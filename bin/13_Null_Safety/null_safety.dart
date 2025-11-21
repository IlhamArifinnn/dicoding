void main() {
  String? favoriteFood = null;
  buyAMeal(favoriteFood); // Compile error

  String? favoriteFood2 = 'Mie Ayam';
  buyAMeal2(
    /*bang operator (!): memberitahu compiler dan memberikan jaminan bahwa variabel tidak akan bernilai null
     ketika variabel ternyata bernilai null, akan tetap memungkinkan terjadi crash
     */
    favoriteFood2!,
  );
}

void buyAMeal(String favoriteFood) {
  print('I bought a $favoriteFood');
}

void buyAMeal2(String favoriteFood) {
  print('I bought a $favoriteFood');
}
