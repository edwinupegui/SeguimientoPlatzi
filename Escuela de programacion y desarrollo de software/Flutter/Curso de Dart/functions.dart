void main() {
  void myFuncion(x, y) {
    print(x + y);
  }

  int myFuncion2(x, y) {
    return x + y;
  }

  myFuncion(2, 3);
  int sum = myFuncion2(5, 7);
  print(sum);
}
