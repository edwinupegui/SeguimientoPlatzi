void main() {
  Tiempo tiempo = Tiempo.Soleado;

  switch (tiempo) {
    case Tiempo.Despejado:
      print('despejado');
      break;
    case Tiempo.Lluvioso:
      print('llueve');
      break;
    case Tiempo.Soleado:
      print('calor');
      break;
  }
}

enum Tiempo { Soleado, Lluvioso, Despejado }
