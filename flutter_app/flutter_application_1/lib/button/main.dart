import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Button Example')),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              child: const Text("Tombol"),
              onPressed: () {
                // Aksi ketika button diklik
              },
            ),
            TextButton(
              child: const Text('Text Button'),
              onPressed: () {
                // Aksi ketika button diklik
              },
            ),
            OutlinedButton(
              child: const Text('Outlined Button'),
              onPressed: () {
                // Aksi ketika button diklik
              },
            ),
            IconButton(
              icon: const Icon(Icons.volume_up),
              tooltip: 'Increase volume by 10',
              onPressed: () {
                // Aksi ketika button diklik
              },
            ),
          ],
        ),
      ),
    );
  }
}

class FirstScreen extends StatefulWidget {
  const FirstScreen({Key? key}) : super(key: key);

  @override
  State<FirstScreen> createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  String? language;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('First Screen')),
      body: DropdownButton<String>(
        items: const <DropdownMenuItem<String>>[
          DropdownMenuItem<String>(value: 'Dart', child: Text('Dart')),
          DropdownMenuItem<String>(value: 'Kotlin', child: Text('Kotlin')),
          DropdownMenuItem<String>(value: 'Swift', child: Text('Swift')),
        ],
        value: language,
        hint: const Text('Select Language'),
        onChanged: (String? value) {
          setState(() {
            language = value;
          });
        },
      ),
    );
  }
}
