import 'package:flutter/material.dart';
import 'gradient_back.dart';
import 'card_image_list.dart';

class HeaderAppBar extends StatelessWidget {
  const HeaderAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return const Stack(
      children: [GradientBack('Hello World'), CardImageList()],
    );
  }
}
