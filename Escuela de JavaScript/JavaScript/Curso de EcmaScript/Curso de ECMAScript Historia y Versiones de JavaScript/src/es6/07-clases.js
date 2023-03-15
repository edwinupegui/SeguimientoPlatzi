class User {

  constructor(userName, userAge) {
    this.userName = userName;
    this.userAge = userAge;
  }

  greeting() {
    return `Hello ${this.userName}!`;
  }

  get _userAge() {
    return this.userAge;
  }

  set _userAge(age) {
    this.userAge = age;
  }
}

const pepito = new User('Pepito', 20);
console.log(pepito.greeting());
console.log(pepito._userAge); // 20
console.log(pepito._userAge = 16); // 16

const mike = new User('Mike', 24);
console.log(mike.greeting());
console.log(mike._userAge); // 24
console.log(mike._userAge = 33); // 33