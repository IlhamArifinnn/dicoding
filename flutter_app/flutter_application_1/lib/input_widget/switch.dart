import 'package:flutter/material.dart';

void main() {
  runApp(_FirstScreenState());
}

class _FirstScreenState extends StatefulWidget {
  @override
  _FirstScreenStateState createState() => _FirstScreenStateState();
}

class _FirstScreenStateState extends State<_FirstScreenState> {
  bool lightOn = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('First Screen')),
      body: Switch(
        value: lightOn,
        onChanged: (bool value) {
          setState(() {
            lightOn = value;
          });

          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(lightOn ? 'Light On' : 'Light Off'),
              duration: Duration(seconds: 1),
            ),
          );
        },
      ),
    );
  }
}
