void main() {
  print('Hello Dart!');
  greet();
  greet2('Dicoding', 2015);

  var firstNumber = 7;
  var secondNumber = 10;
  print(
    'Rata-rata dari $firstNumber & $secondNumber adalah ${average(firstNumber, secondNumber)}',
  );
}

void greet() {
  print('Hello!');
}

// Function parameters
void greet2(String name, int bornYear) {
  var age = 2023 - bornYear;
  print('Halo $name! Tahun ini Anda berusia $age tahun');
}

double average(num num1, num num2) {
  return (num1 + num2) / 2;
}

// atau
double average2(num num1, num num2) => (num1 + num2) / 2;

// Optional parameters
// positional optional parameters
void greetNewUser([
  String name = "dico",
  int age = 10,
  bool isVerified = true,
]) {}

// named optional parameters
void greetNewUser2({String? name, int? age, bool? isVerified}) {}

// named parameters wajib isi
void greetNewUser3({
  required String name,
  required int age,
  bool isVerified = false,
}) {}
