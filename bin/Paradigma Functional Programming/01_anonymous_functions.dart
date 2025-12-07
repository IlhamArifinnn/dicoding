void main() {
  (int num1, int num2) {
    return num1 + num2;
  };

  var sum = (int num1, int num2) {
    return num1 + num2;
  };

  Function printLambda = () {
    print('This is lambda function');
  };

  printLambda();
  print(sum(3, 4));

  // lambda juga mendukung function expression
  var sum1 = (int num1, int num2) => num1 + num2;

  Function printLambda1 = () => print('This is lambda function');

  // Memanggil nama variabel dari anonymous function
  print(sum1(3, 4));
  printLambda1();
}
