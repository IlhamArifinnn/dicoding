// Select form and input elements
const bookForm = document.getElementById("bookForm");
const bookFormTitle = document.getElementById("bookFormTitle");
const bookFormAuthor = document.getElementById("bookFormAuthor");
const bookFormYear = document.getElementById("bookFormYear");
const bookFormIsComplete = document.getElementById("bookFormIsComplete");

const incompleteBookList = document.getElementById("incompleteBookList");
const completeBookList = document.getElementById("completeBookList");

const BOOKS_KEY = "BOOKSHELF-APP";

// Load books from localStorage
function loadBooks() {
  const books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
  books.forEach((book) => addBookToDOM(book));
}

// Save books to localStorage
function saveBooks(books) {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
}

// Generate unique ID
function generateId() {
  return +new Date();
}

// Add book to DOM
function addBookToDOM(book) {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("data-bookid", book.id);
  bookItem.setAttribute("data-testid", "bookItem");

  bookItem.innerHTML = `
    <h3 data-testid="bookItemTitle">${book.title}</h3>
    <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
    <p data-testid="bookItemYear">Tahun: ${book.year}</p>
    <div>
      <button data-testid="bookItemIsCompleteButton">
        ${book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
      </button>
      <button data-testid="bookItemDeleteButton">Hapus Buku</button>
      <button data-testid="bookItemEditButton">Edit Buku</button>
    </div>
  `;

  // Append to the correct section
  if (book.isComplete) {
    completeBookList.appendChild(bookItem);
  } else {
    incompleteBookList.appendChild(bookItem);
  }

  // Add event listeners
  bookItem.querySelector("[data-testid='bookItemIsCompleteButton']").onclick =
    () => toggleBookComplete(book.id);
  bookItem.querySelector("[data-testid='bookItemDeleteButton']").onclick = () =>
    deleteBook(book.id);
}

// Add book to the app and save to storage
function addBook(title, author, year, isComplete) {
  const book = {
    id: generateId(),
    title,
    author,
    year,
    isComplete,
  };

  const books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
  books.push(book);
  saveBooks(books);
  addBookToDOM(book);
}

// Toggle book between complete and incomplete lists
function toggleBookComplete(bookId) {
  const books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
  const book = books.find((book) => book.id === bookId);
  if (book) {
    book.isComplete = !book.isComplete;
    saveBooks(books);
    renderBooks();
  }
}

// Delete book from DOM and localStorage
function deleteBook(bookId) {
  let books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];
  books = books.filter((book) => book.id !== bookId);
  saveBooks(books);
  renderBooks();
}

// Render all books (refresh DOM)
function renderBooks() {
  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";
  loadBooks();
}

// Form submission
bookForm.onsubmit = (e) => {
  e.preventDefault();
  const title = bookFormTitle.value;
  const author = bookFormAuthor.value;
  const year = parseInt(bookFormYear.value);
  const isComplete = bookFormIsComplete.checked;

  addBook(title, author, year, isComplete);

  // Clear form fields
  bookFormTitle.value = "";
  bookFormAuthor.value = "";
  bookFormYear.value = "";
  bookFormIsComplete.checked = false;
};

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  renderBooks();
});
