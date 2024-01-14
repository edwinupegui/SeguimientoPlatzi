void main() {
  List<String> amigos = [];

  amigos = ["amanda", 'beto', 'pedro', 'sara'];

  print(amigos.isEmpty);
  print(amigos.length);
  amigos.add("edwin");
  print(amigos);
  amigos.remove("pedro");
  amigos.insert(2, "pedro2");
  for (var i = 0; i < amigos.length; i++) {
    print("amigos[$i]: ${amigos[i]}");
  }
  amigos.clear();
  if (amigos.isEmpty) {
    print('no tienes amigos');
  }
}
