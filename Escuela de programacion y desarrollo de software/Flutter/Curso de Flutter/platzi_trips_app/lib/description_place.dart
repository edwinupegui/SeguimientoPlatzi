import 'package:flutter/material.dart';
import 'button_purple.dart';

class DescriptionPlace extends StatelessWidget {
  final String namePlace;
  final int start;
  final String descriptionPlace;

  const DescriptionPlace(this.namePlace, this.start, this.descriptionPlace,
      {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final starHalf = Container(
      margin: const EdgeInsets.only(
        top: 323.0,
        right: 3.0,
      ),
      child: const Icon(
        Icons.star_half,
        color: Color(0xFFF2C611),
      ),
    );
    final starBorder = Container(
      margin: const EdgeInsets.only(
        top: 323.0,
        right: 3.0,
      ),
      child: const Icon(
        Icons.star_border,
        color: Color(0xFFF2C611),
      ),
    );
    final star = Container(
      margin: const EdgeInsets.only(
        top: 323.0,
        right: 3.0,
      ),
      child: const Icon(
        Icons.star,
        color: Color(0xFFF2C611),
      ),
    );

    final titleStars = Row(
      children: [
        Container(
          margin: const EdgeInsets.only(
            top: 320.0,
            left: 20.0,
            right: 20.0,
          ),
          child: Text(
            namePlace,
            style: const TextStyle(
              fontFamily: 'Lato',
              fontSize: 30.0,
              fontWeight: FontWeight.w900,
            ),
            textAlign: TextAlign.left,
          ),
        ),
        Row(
          children: [
            star,
            star,
            star,
            starHalf,
            starBorder,
          ],
        ),
      ],
    );

    final description = Container(
      margin: const EdgeInsets.only(
        left: 20.0,
        right: 20.0,
      ),
      child: Text(
        descriptionPlace,
        style: const TextStyle(
            fontFamily: 'Lato', fontSize: 16.0, color: Color(0xFF6D6E71)),
        textAlign: TextAlign.justify,
      ),
    );

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        titleStars,
        description,
        const ButtonPurple(buttonText: 'Navigate'),
      ],
    );
  }
}