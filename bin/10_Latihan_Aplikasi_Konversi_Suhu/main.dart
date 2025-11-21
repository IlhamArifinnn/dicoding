import 'dart:io';

void main() {
  // konverter fahrenheit ke celcius
  stdout.write('Masukkan suhu dalam Fahrenheit: ');
  var fahrenheit = num.parse(stdin.readLineSync()!);
  var celsius = (fahrenheit - 32) * 5 / 9;

  print('$fahrenheit derajat Fahrenheit = $celsius derajat celsius');
}
