import 'dart:io';

var greetings = 'Hello Dart!'; // String
var myAge = 20; // integers

// bisa langsung mendeklarasikan tipe variabel
// String greetings = 'Hello Dart!';
// int myAge = 20;

void main() {
  Object x; // dynamic
  x = 7;
  x = 'Dart is great';
  print(x);

  var y = 7; // int
  // Kesalahan assignment
  // y = 'Dart is great';
  print(y);

  stdout.write('Nama Anda : ');
  String name = stdin.readLineSync()!;
  stdout.write('Usia Anda : ');
  int age = int.parse(stdin.readLineSync()!);
  print('Halo $name, usia Anda $age tahun');
}
