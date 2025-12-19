import 'package:flutter/material.dart';

void main() {
  runApp(_FirstScreenState());
}

class _FirstScreenState extends StatefulWidget {
  @override
  _FirstScreenStateState createState() => _FirstScreenStateState();
}

class _FirstScreenStateState extends State<_FirstScreenState> {
  bool agree = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('First Screen')),
      body: ListTile(
        leading: Checkbox(
          value: agree,
          onChanged: (bool? value) {
            setState(() {
              agree = value!;
            });
          },
        ),
        title: Text('Agree / Disagree'),
      ),
    );
  }
}
