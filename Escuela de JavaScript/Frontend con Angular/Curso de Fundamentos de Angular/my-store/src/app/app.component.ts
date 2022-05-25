import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Edwin';
  age = 50;
  img = 'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png'
  btnDisabled = true;
  person = {
    name: "nicolas",
    age: 50,
    avatar: 'https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png'
  }

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];

  newEmoji = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addEmoji() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  deleteEmoji(index: number) {
    this.emojis.splice(index, 1);
  }
}
