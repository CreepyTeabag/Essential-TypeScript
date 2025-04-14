/* let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`); */

/* if (hatPrice === bootsPrice) {
   console.log("Prices are the same");
} else {
   console.log('Prices are different');
}

let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
 myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`); */

/* let taxRate;
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0;
console.log(`Tax rate: ${taxRate ?? 10}%`); */

/* let names = ["Hat", "Boots", "Gloves"];

let [one, two] = names;
console.log(`One: ${one} Two: ${two}`);
let [, , three] = names; // three = "Gloves"
console.log(`Three: ${three}`);
let prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a - b);
highest.forEach((price) => console.log(`High price: ${price}`));
console.log(`First Item: ${names[0]}: ${prices[0]}`); */

let hat = {
  name: "Hat",
  _price: 100,
  priceIncTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice;
    this.priceIncTax = this._price * 1.2;
  },

  get price() {
    return this._price;
  },

  writeDetails() {
    console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
  },
};

/* let propertyCheck = hat.price ?? 0;
let objectAndPropertyCheck = hat?.price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`); */

let boots = {
  name: "Boots",
  price: "100",

  get priceIncTax() {
    return Number(this.price) * 1.2;
  },
};

hat.writeDetails = hat.writeDetails.bind(hat);
hat.writeDetails();
hat.price = 120;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

/* let additionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

let gloves = {
  productName: "Gloves",
  price: "40",
};

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20; */

let sumPrices = (...numbers) =>
  numbers.reduce(
    (total, val) => total + (Number.isNaN(Number(val)) ? 0 : Number(val))
  );

/* let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); */

/* let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach((element) =>
  console.log(`Combined Array Element: ${element}`)
); */

/* let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); */

function writeMessage(message) {
  console.log(`${this.greeting}, ${message}`);
}
greeting = "Hello";
writeMessage("It is sunny today");
writeMessage.call(global, "It is sunny today");

let myObject = {
  greeting: "Hi there",

  /* writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
  }, */
  getWriter() {
    return (message) => console.log(`${this.greeting}, ${message}`);
  },
};

/* myObject.writeMessage = myObject.writeMessage.bind(myObject); */

greeting = "Hello";

/* myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today"); */
// myFunction.call(global, "It is sunny today");

// let writer = myObject.getWriter();
// writer("It is raining today");
myObject.getWriter()("It is sunny today");

let standAlone = myObject.getWriter();
let standAloneWriter = standAlone;
standAloneWriter("It is sunny today");
