import 'package:flutter/material.dart';
import 'card_image.dart';

class CardImageList extends StatelessWidget {
  const CardImageList({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 350.0,
      child: ListView(
        padding: const EdgeInsets.all(25.0),
        scrollDirection: Axis.horizontal,
        children: const [
          CardImage('assets/img/1314528.jpeg'),
          CardImage('assets/img/1325988.jpeg'),
          CardImage('assets/img/1325994.jpeg'),
          CardImage('assets/img/1325995.jpeg'),
        ],
      ),
    );
  }
}
