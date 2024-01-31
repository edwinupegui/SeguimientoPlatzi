import 'package:flutter/material.dart';

class CardImage extends StatelessWidget {
  final String pathImage;
  const CardImage(this.pathImage, {super.key});

  @override
  Widget build(BuildContext context) {
    final card = Container(
      height: 350.0,
      width: 250.0,
      margin: const EdgeInsets.only(
        top: 80.0,
        left: 40.0,
      ),
      decoration: BoxDecoration(
        image: DecorationImage(
          fit: BoxFit.cover,
          image: AssetImage(pathImage),
        ),
        borderRadius: const BorderRadius.all(Radius.circular(10.0)),
        shape: BoxShape.rectangle,
        boxShadow: const [
          BoxShadow (
            color: Colors.black38,
            blurRadius: 15.0,
            offset: Offset(0.0, 7.0),
          )
        ]
      ),
    );

    return card;
  }
}
