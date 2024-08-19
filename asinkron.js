function makeCoffee() {
  // 1000 milidetik = 1 detik
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
  );

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log("Pramusaji selesai membuat kopi.");
  }, estimationTime);
}

console.log("Saya memesan kopi di kafe.");

makeCoffee();

console.log("Pramusaji memberikan kopi pesanan.");
console.log("Saya mendapatkan kopi dan menghabiskannya.");
