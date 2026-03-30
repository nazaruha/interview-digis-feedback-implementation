interface Pet {
  name: string;
}

export class Fish implements Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} is swimming!`);
  }
}

export class Bird implements Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly() {
    console.log(`${this.name} is flying!`);
  }
}
