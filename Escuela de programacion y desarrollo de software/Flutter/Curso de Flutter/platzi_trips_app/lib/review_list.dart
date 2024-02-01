import 'package:flutter/material.dart';
import 'review.dart';

class ReviewList extends StatelessWidget {
  const ReviewList({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Review('assets/img/1314528.jpeg', 'Edwin Upegui', '1 review 5 photos',
            'this is one commentary'),
        Review('assets/img/1325988.jpeg', 'Edwin Upegui', '1 review 5 photos',
            'this is one commentary'),
        Review('assets/img/1325994.jpeg', 'Edwin Upegui', '1 review 5 photos',
            'this is one commentary'),
        Review('assets/img/1325995.jpeg', 'Edwin Upegui', '1 review 5 photos',
            'this is one commentary'),
      ],
    );
  }
}
