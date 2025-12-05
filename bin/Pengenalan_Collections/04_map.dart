void main() {
  var capital = {'Jakarta': 'Indonesia', 'London': 'England', 'Tokyo': 'Japan'};

  print(capital['Jakarta']);
  var mapKeys = capital.keys;
  print("mapKeys: $mapKeys");

  var mapValues = capital.values;
  print("mapValues: $mapValues");

  /// Output:
  /// mapKeys = (Jakarta, London, Tokyo)
  /// mapValues = (Indonesia, England, Japan)

  // Untuk menambahkan key-value baru ke dalam Map
  capital['New Delhi'] = 'India';
  print(capital);

  print(capital['Indonesia']); // null
}
