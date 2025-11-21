void main() {
  var a = 7;
  var b = 0;
  print(a ~/ b);

  // Unhandled exception:
  // IntegerDivisionByZeroException
  // #0      int.~/ (dart:core-patch/integers.dart:27:7)
  // #1      main (file:///C:/data-ipin/dicoding/Memulai%20Pemrograman%20dengan%20Dart/belajar_dart/bin/09_Exceptions/exceptions.dart:4:11)
  // #2      _delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:314:19)
  // #3      _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:193:12)

  try {
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } on Exception {
    //IntegerDivisionByZeroException
    print('Can not divide by zero.');
  }

  // IOException, FormatException
  try {
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } catch (e) {
    print('Exception happened: $e');
  }

  // objek stack trace
  try {
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } catch (e, s) {
    print('Exception happened: $e');
    print('Stack trace: $s');
  }

  // Finally
  try {
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } catch (e, s) {
    print('Exception happened: $e');
    print('Stack trace: $s');
  } finally {
    print('This line still executed');
  }
}
