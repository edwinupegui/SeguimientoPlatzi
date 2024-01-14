void main() {
  int num = 1;
  int num2 = 5;
  int num3 = 10;

  while (num <= 5) {
    print(num);
    num++;
  }

  do {
    print(num2);
    num2--;
  } while (num2 >= 1);

  for (var i = 0; i < num3; i++) {
    print(i);
  }
}
