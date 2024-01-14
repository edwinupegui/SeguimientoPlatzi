void main() {
  Set<String> paises = {};

  paises = {"Argentina", 'Brasil', 'colombia'};

  paises.add('mexico');

  for (var i = 0; i < paises.length; i++) {
    print(paises.elementAt(i));
  }

  print(paises);

  Set<dynamic> test = {
    {"Argentina", 'Brasil', 'colombia', 2, true},
    {"Argentina", 'Brasil', 'colombia', false},
    {"Argentina", 'Brasil', 'colombia', 3.6}
  };

  print(test);
}
