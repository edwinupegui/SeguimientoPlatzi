import 'package:flutter/material.dart';
import 'package:platzi_trips_app/widgets/button_green.dart';
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
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "Welcome \n This is your Travel App",
              style: TextStyle(
                fontSize: 37.0,
                fontFamily: "Lato",
                fontWeight: FontWeight.bold,
              ),
            ),
            ButtonGreen(
              text: "Login with Gmail",
              height: 50.0,
              width: 300.0,
            )
          ],
        )
      ]),
    );
  }
}
