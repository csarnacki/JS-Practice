let sportsCar = {
  "Fuel Type": "gasoline",
  Color: "red",
  Car: "Ferrari",
  madeIn: 1967,
  HP: 200 
};

sportsCar.Color = "navy blue";
sportsCar.numExhaustPipes = 2;

console.log(sportsCar);
delete sportsCar.numExhaustPipes;
console.log(sportsCar);
console.log("\n");

const newGreeting = "Hello and welcome to our new escape room! Please carefully read the signs posted around the room and if you need any help at all just let me know";

const getReady = {
  greeting () {
    console.log(newGreeting)
  },
  finalMessage () {
    console.log("Are you ready? Your one hour starts now! Good luck and have fun!")
  }
};

getReady.greeting();
getReady.finalMessage();
console.log("\n");

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const dog = new Pet("Buddy", "Dog");
const cat = new Pet("Whiskers", "Cat");
console.log(dog.name);
console.log(dog.type);
console.log(cat.name);
console.log(cat.type);
console.log("\n");

let loop = 4;
while (loop < 8) {
  console.log(loop);
  loop++
}
console.log("\n");

for (let i = 1; i < 10; i++) {
  if (i > 6) {
    break;
  }
  console.log("Here we go!");
}
console.log("Wow that was so fun!")