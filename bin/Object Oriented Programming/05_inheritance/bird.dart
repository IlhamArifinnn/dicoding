import 'animal.dart';

class Bird extends Animal {
  Bird(String name, int age, double weight) : super(name, age, weight);

  void fly() {
    print("The bird is flying.");
  }
}
