void main() {
  List<String> coloresSecundarios = ["morado", "verde", 'naranja', for(int i = 0; i < 3; i++ ) "azulito"];
  List<String> coloresPrimarios = [
    "rojo",
    "amarillo",
    'azul',
    if(coloresSecundarios[0] == "morado") "morado",
    ...coloresSecundarios
  ];

  coloresSecundarios.addAll(coloresPrimarios);

  List<String> colores = [...coloresSecundarios, ...coloresPrimarios];
  print(coloresPrimarios);
  print(coloresSecundarios);
  print(colores);


}
