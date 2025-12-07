Function calculate(base) {
  var count = 1;

  return () => print("Value is ${base + count++}");
}

void main() {
  var closureExample = calculate(2);
  closureExample();
  closureExample();
}
