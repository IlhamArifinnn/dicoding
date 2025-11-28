void main() {
  var isRaining = true;

  print('Prepare before going to office.');
  if (isRaining) {
    print("Oh. It's raining, bring an umbrella.");
  }
  print('Going to the office.');

  // melakukan operasi lain ketika kondisi bernilai false
  var openHours = 8;
  var closedHours = 21;
  var now = 17;

  if (now > openHours && now < closedHours) {
    print("Hello, we're open");
  } else {
    print("Sorry, we've closed");
  }

  // mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if
  var score = 85;

  print('Nilai Anda: ${calculateScore(score)}');
}

String calculateScore(num score) {
  if (score > 90) {
    return 'A';
  } else if (score > 80) {
    return 'B';
  } else if (score > 70) {
    return 'C';
  } else if (score > 60) {
    return 'D';
  } else {
    return 'E';
  }

  //  conditional expressions
  var shopStatus = now > openHours
      ? "Hello, we're open"
      : "Sorry, we've closed";

  // conditional expressions
  // expression1 ?? expression2
  var buyer = name ?? 'user';
}
