void main() {
  List<Bird> birdList = [Bird(), Dove(), Duck()];

  // List<Bird> birdList = [Bird(), Dove(), Duck(), Animal()];  // Error

  // List<Bird> myBird = List<Animal>();  // Error: A value of type 'List<Animal>' can't be assigned to a variable of type 'List<Bird>'.
}

class Animal {}

class Bird implements Animal {}

class Dove implements Bird {}

class Duck implements Bird {}
