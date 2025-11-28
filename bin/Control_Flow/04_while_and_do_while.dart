void main() {
  var i = 1;

  while (i <= 10) {
    print(i);
    i++;
  }

  // Bentuk lain dari while adalah perulangan do-while
  do {
    print(i);
    i++;
  } while (i <= 10);

  var j = 10;
  while (j >= 1) {
    print("* " * j);
    j--;
  }
}
