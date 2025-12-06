abstract class Animal {
  String name;
  int age;
  double weight;

  Animal(this.name, this.age, this.weight);
  void eat();
  void sleep();
  void poop();
}

void main() {
  var dicodingCat = Animal(
    'Gray',
    2,
    4.2,
  ); // Error: The class 'Animal' is abstract and can't be instantiated.
}
