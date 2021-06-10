let mysteryNumber = 6;
if (mysteryNumber === 5) {
  console.log("The mystery number is five");
} else {
  console.log("The mystery number is something else");
}
console.log("\n");

let day = "Sunday";
if (day === "Monday") {
  console.log("It's the beginning of the week");
} else if (day === "Tuesday") {
  console.log("It's still the beginning of the week but not as bad as Monday");
} else if (day === "Wednesday") {
  console.log("It's the middle of the week");
} else if (day === "Thursday") {
  console.log("It's getting close to the weekend finally!");
} else if (day === "Friday") {
  console.log("The weekend is nearly here! I can't wait!!");
} else if (day === "Saturday") {
  console.log("Hooray! The weekend is finally here!! I'm so excited!");
} else if (day === "Sunday") {
  console.log("It's still the weekend but I have to go back to work tomorrow");
} else {
  console.log("Please enter a valid day");
}
console.log("\n");

let weatherTemp = "cold";
switch(weatherTemp) {
  case "hot":
    console.log("It's really hot and sunny out here! Better grab some shorts and sunglasses!");
    break;
  case "warm":
    console.log("It's pretty warm out today so I can wear a t shirt and shorts");
    break;
  case "chilly":
    console.log("Brrr!! It sure is getting cold and windy out here! I should put a jacket on");
    break;
  case "cold":
    console.log("It's freezing out here!! I need a scarf and gloves to stay warm!");
    break;
  default:
    console.log("The weather must be pleasant");
    break;
}
console.log("\n");

function favoriteDrink () {
  console.log("Root Beer");
}
favoriteDrink();

console.log("\n");

function myPet (name) {
  console.log("I have a dog and her name is " + name + " and she is a black lab.");
}
myPet("Pepper");

console.log("\n");

function myExercises(exercise1 = "legs", exercise2 = "core", exercise3 = "arms") {
  console.log(`I need to do ${exercise1} today.`);
  console.log(`I need to do ${exercise2} today.`);
  console.log(`I need to do ${exercise3} today.`);
}
myExercises();

console.log("\n");

function logInInfo(name = "stranger") {
  console.log(`Hello, ${name} and welcome`)
}
logInInfo("James");
logInInfo();
console.log("\n");

