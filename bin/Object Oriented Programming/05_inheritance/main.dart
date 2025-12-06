import 'cat.dart';
import 'bird.dart';
import 'fish.dart';

void main() {
  var dicodingCat = Cat('Grayson', 2, 2.2, 'Gray');
  dicodingCat.walk();
  dicodingCat.eat();
  print(dicodingCat.weight);

  var dicodingBird = Bird('Tweety', 1, 0.5);
  dicodingBird.fly();
  dicodingBird.eat();
  print(dicodingBird.weight);

  var dicodingFish = Fish('Nemo', 1, 0.3);
  dicodingFish.swim();
  dicodingFish.eat();
  print(dicodingFish.weight);
}
