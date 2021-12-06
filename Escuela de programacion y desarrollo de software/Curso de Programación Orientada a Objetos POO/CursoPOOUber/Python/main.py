from car import Car
from account import Account


numero = int(input("Escriba un número positivo: "))
while numero < 0:
   print("¡Ha escrito un número positvo! Inténtelo de nuevo")
   numero = int(input("Escriba un número negativo: "))
print("Gracias por su colaboración")
