//exercise14&15
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

let animalArray = [dog, cat];

console.log(animalArray);
