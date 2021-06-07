console.log("This is a string");
console.log("This is an integer: " + 45);
console.log("This is a float: " + 12.456);
console.log("This " + "is " + "a " + "string");
console.log(2 + 2);
console.log(4 - 2);
console.log(2 * 2);
console.log(4 / 2);
console.log(2 ** 2);
console.log(5 % 2);
console.log("\n");

console.log("HERE IS ANOTHER STRING".toLowerCase());
console.log("here is another string".toUpperCase());
console.log(typeof "Here is another string"); 
console.log("\n");

let var1 = "Please change me!";
let var2 = " Wait, I don't want to be changed!";
let var3 = var1 + var2;
console.log(var3);
console.log("\n");

let change = "I can be changed if you use my keyword";
const noChange = "I cannot be changed if youuse my keyword";
console.log(change);
console.log(noChange);
console.log("\n");

let changed = "Hello";
changed = "Goodbye";
console.log(changed);
console.log("\n");

let a = 10;
a++;
let b = 10;
b--;
console.log(a);
console.log(b);
console.log("\n");

let day = "Tuesday";
let dinner = "lasagna";
let show = "The Office";
console.log(`Today is ${day}, which means that I will be making some ${dinner} for dinner tonight. While I am eating my ${dinner}, I think I'll watch an episode of ${show}.`);
console.log("\n");

function Christmas () {
  console.log("It is Christmas today and it is rainy outside and very cold");
}
Christmas();
console.log("\n");

function Dog (name) {
  console.log(`I have a black lab and her name is ${name} and she is 5 years old`);
}
Dog("Pepper");
console.log("\n");

function storeOrder (name1 = "Brad", name2 = "Shirley", name3 = "Pierre") {
  console.log(`Thank you, ${name1} for your order!`);
  console.log(`Thank you, ${name2} for your order!`);
  console.log(`Thank you, ${name3} for your order!`);
}
storeOrder();
console.log("\n");

function logIn (name = "Stranger") {
  console.log("Welcome to our site " + name);
}
logIn("Jose");
logIn();
console.log("\n");

let season = "spring";
if (season === "winter") {
  console.log("Yuck, my least favorite season");
} else if (season === "spring") {
  console.log("Alright! My second favorite season!");
} else if (season === "summer") {
  console.log("Hooray! My favorite season!");
} else if (season === "fall") {
  console.log("Ehh it's nice but still my second least favorite season");
} else {
  console.log("invalid season");
}
console.log("\n");

let number = 5;
if (number === 3) {
  console.log("Congratulations!! You guessed the lucky number!!");
} else {
  console.log("Sorry, please guess again");
}
console.log("\n");

let weather = "snowy"; 
  switch(weather) {
    case "foggy":
      console.log("I should use my headlights");
      break;
    case "rainy":
      console.log("I need to use my windshield wipers");
      break;
    case "snowy":
      console.log("I need to drive slowly and carefully");
      break;
    case "sunny":
      console.log("I should drive with sunglasses on");
      break;
    default:
      console.log("I don't know what the weather is like");
      break;
  }
console.log("\n");

let movies = ["Harry Potter", "Lord of the Rings", "Free Willy", "Die Hard"];
console.log(movies);
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);
console.log("\n");

let nums = [0, [8, 6], [3, 7], 5];
console.log(nums[2]);
console.log(nums[2][1]);
console.log("\n");

let candy = ["Reeses", "Snickers", "Kit Kat"];
candy.push("Hersheys");
console.log(candy);
candy.pop();
console.log(candy);
console.log("\n");

