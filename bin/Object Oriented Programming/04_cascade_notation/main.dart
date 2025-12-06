import 'animal.dart';

void main() {
  var dicodingCat = Animal('', 2, 4.2)
    ..name = 'Gray'
    ..eat();

  //  melakukan hal yang sama apabila menuliskan kode seperti ini:
  // var dicodingCat = Animal('', 2, 4.2);
  // dicodingCat.name = 'Gray';
  // dicodingCat.eat();
}
