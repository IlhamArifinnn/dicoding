import 'animal.dart';

class Fish extends Animal {
  Fish(String name, int age, double weight) : super(name, age, weight);

  void swim() {
    print('$name is swimming');
  }
}
