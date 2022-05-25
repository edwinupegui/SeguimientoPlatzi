import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
