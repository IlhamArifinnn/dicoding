void main() {
  var favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
  var others = ['Cake', 'Pie', 'Donut'];
  // var allFavorites = [favorites, others];
  // print(allFavorites);

  // spread operator  dapat menggabungkan kedua List di atas:
  var allFavorites = [...favorites, ...others];
  print(allFavorites);

  // Untuk mengatasi List yang bisa bernilai null
  List<dynamic>? list;
  List<dynamic>? list2 = [0, ...?list];
  print(list2);
}
