void main() {
  print('Tipos de datos');
  bool booleano = true;
  int numeroEntero = 15;
  numeroEntero = 2;
  double numeroDecimal = 7.5;
  String cadenaTexto = 'Hello World!';
  List<String> letras = ['a', 'b'];
  var nombre = 'Edwin';
  final apellido = 'Upegui';
  const sobrenombre = 'theBest';
  dynamic dinamico = 5;
  dinamico = 'fui cambiado';

  print(booleano);
  print(++numeroEntero);
  print(--numeroEntero);
  print(numeroDecimal);
  print(cadenaTexto);
  print(letras);
  print(nombre);
  print(apellido);
  print(sobrenombre);
  print(dinamico);

  print('Comentarios');

  //esto es un comentario en linea
/*
esto es un comentario en bloque
 */

  // print(sobrenombre);

  // print(dinamico);
  // print(sobrenombre);
  // print(dinamico);

  print('Concatenado strings');

  String edwin = 'Edwin';
  String pais = 'Colombia';

  print("Soy " + edwin + " y vivo en " + pais);
  print("Soy $edwin y vivo en $pais");
  print("Soy \"$edwin\"\n y vivo en $pais");

  print("funciones de string");
  String nombre2 = "EdWiN";
  String nombre3 = "EdWiN es de colombia";
  print(nombre2.toLowerCase());
  print(nombre2.toUpperCase());
  print(nombre3.replaceAll('colombia', 'Canada'));
}
