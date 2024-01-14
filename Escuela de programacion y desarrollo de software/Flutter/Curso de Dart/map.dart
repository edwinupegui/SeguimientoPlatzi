void main() {
  Map<dynamic, dynamic> person = {
    'nombre': "ana",
    "edad": 12,
  };

  print(person.keys);
  print(person.values);

  print(person["nombre"]);
  print(person['pais']);

  if (person['pais'] == null) {
    print('sin pais');
  } else {
    print('si tiene pais');
  }
}
