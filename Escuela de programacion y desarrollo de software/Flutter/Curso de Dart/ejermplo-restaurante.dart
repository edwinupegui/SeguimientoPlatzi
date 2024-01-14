void main() {
  Map restaurante = {
    'nombre': 'Pollos del monte',
    "estrella": [5, 4, 3, 2, 3]
  };

  print(restaurante);

  if (restaurante['estrella'] == null) {
    print('sin estrellas');
  } else {
    List<int> estrellas = restaurante['estrella'];
    int suma = 0;
    for (var i = 0; i < estrellas.length; i++) {
      suma += estrellas[i];
    }
    double promedio = suma / estrellas.length;
    restaurante.addAll({'promedio': promedio});
  }
  print(restaurante);
}
