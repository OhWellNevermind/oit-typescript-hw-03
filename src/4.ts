class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Array<Person> = [];

  comeIn(person: Person) {
    if (this.door) {
      console.log("You welcome in!");
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("Door is open");
      this.door = true;
    }
  }
}

const key = new Key();

const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
