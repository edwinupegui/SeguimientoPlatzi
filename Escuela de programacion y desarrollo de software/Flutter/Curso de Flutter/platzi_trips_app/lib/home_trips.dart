import 'package:flutter/material.dart';
import 'package:platzi_trips_app/description_place.dart';
import 'package:platzi_trips_app/header_appbar.dart';
import 'package:platzi_trips_app/review_list.dart';

class HomeTrips extends StatelessWidget {
  const HomeTrips({super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(children: [
      ListView(
        children: const [
          DescriptionPlace("Medellin", 4,
              "Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galerada de tipo y la mezcló para hacer un libro de muestras tipográficas."),
          ReviewList(),
        ],
      ),
      const HeaderAppBar(),
    ]);
  }
}
