class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature; 
    }
  }
  
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key; 
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  

  abstract class House {
    protected door: boolean = false; 
    protected key: Key; 
    protected tenants: Person[] = []; 
    constructor(key: Key) {
      this.key = key; 
    }
  
    abstract openDoor(key: Key): void; 
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person); 
        console.log(`${person.getKey().getSignature()} has entered the house.`);
      } else {
        console.log("The door is closed. You can't come in.");
      }
    }
  }
  

  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true; 
        console.log('Door is now open!');
      } else {
        console.log('Wrong key! The door remains closed.');
      }
    }
  }
  
  // Тестування сценарію
  const key = new Key(); 
  const house = new MyHouse(key);
  const person = new Person(key); 
  
  house.openDoor(person.getKey()); 
  house.comeIn(person); 
  