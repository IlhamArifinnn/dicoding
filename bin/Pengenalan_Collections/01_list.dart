void main() {
  List<int> numberList = [1, 2, 3, 4, 5];

  var numberList1 = [1, 2, 3, 4, 5];
  var stringList = ['Hello', 'Dicoding', 'Dart'];

  List dynamicList = [1, 'Dicoding', true];
  print(dynamicList.runtimeType);

  // mengakses posisi tertentu dari List
  print(dynamicList[1]);

  // Untuk menampilkan seluruh item dari list kita bisa memanfaatkan looping
  for (int i = 0; i < stringList.length; i++) {
    print(stringList[i]);
  }
  // juga bisa menggunakan fungsi foreach untuk menampilkan data di dalam list.
  stringList.forEach((s) => print(s));

  // Menambahkan data di akhir list.
  stringList.add('Flutter');
  print(stringList);

  // Menambahkan data di indeks ke-0.
  stringList.insert(0, 'Programming');
  print(stringList);

  // Untuk mengubah nilai di dalam list, kita bisa langsung menginisialisasikan nilai baru sesuai indeks yang diinginkan.
  stringList[1] = 'Application';
  print(stringList);

  // Menghapus list dengan nilai Programming
  stringList.remove('Programming');

  // Menghapus list pada index ke-1
  // stringList.removeAt(1);

  // Menghapus data list terakhir
  // stringList.removeLast();

  // Menghapus list mulai index ke-0 sampai ke-1 (indeks 2 masih dipertahankan)
  // stringList.removeRange(0,2);

  print(stringList);
}
