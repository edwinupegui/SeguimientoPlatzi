void main () {
  print("funciones de string");
  String nombre2 = "EdWiN";
  String nombre3 = "EdWiN es de colombia";
  print(nombre2.toLowerCase());
  print(nombre2.toUpperCase());
  print(nombre3.replaceAll('colombia', 'Canada'));

  String text = '12';
  int num = 12;
  int numInt = int.parse(text);
  double numDou = double.parse(text);
  String numToString = num.toString();

  print(numInt);
  print(numDou);
  print(numToString);
}