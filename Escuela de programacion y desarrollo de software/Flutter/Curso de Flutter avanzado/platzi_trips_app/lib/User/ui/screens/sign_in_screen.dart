import 'package:flutter/material.dart';
import 'package:platzi_trips_app/widgets/gradient_back.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<StatefulWidget> createState() {
    return _SignInScreen();
  }
}

class _SignInScreen extends State<SignInScreen> {
  @override
  Widget build(BuildContext context) {
    return signInGoogleUi();
  }

  Widget signInGoogleUi() {
    return const Scaffold(
      body: Stack(alignment: Alignment.center, children: [
        GradientBack("", null),
        Column(
          children: [
            Text(
              "Welcome \n This is your Travel App",
              style: TextStyle(
                  fontSize: 37.0,
                  fontFamily: "Lato",
                  fontWeight: FontWeight.bold),
            )
          ],
        )
      ]),
    );
  }
}
