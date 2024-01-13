void main() {
  int mascotas = 3;

  if (mascotas <= 0) {
    print('no tienes mascotas');
  } else {
    print('tienes mascotas');
  }

  switch(mascotas){
    case 0:
      print("no tienes mascotas");
      break;
    case 1:
      print('tienes 1 mascota');
      break;
    default:
      print('tienes muchas');
  }
}
