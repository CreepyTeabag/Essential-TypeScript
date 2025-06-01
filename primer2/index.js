/* let ProductProto = {
  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  },
};

let hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

let boots = {
  name: "Boots",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto); */

/* let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}; */

/* console.log(hat.toString());
console.log(boots.toString()); */

/* console.log(`Hat prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`); */

let Product = function (name, price) {
  this.name = name;
  this.price = price;
};
Product.prototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};

Product.process = (...products) => {
  products.forEach((product) => {
    console.log(product.toString());
  });
};

Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

let TaxedProduct = function (name, price, taxRate) {
  Product.call(this, name, price);
  this.taxRate = taxRate;
};

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function () {
  return Number(this.price) * this.taxRate;
};
TaxedProduct.prototype.toTaxString = function () {
  return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
};

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

console.log(hat.toTaxString());
console.log(boots.toString());

console.log(`hat and taxedProduct: ${hat instanceof TaxedProduct}`);
console.log(`hat and Product: ${hat instanceof Product}`);
console.log(`boots and taxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots and Product: ${boots instanceof Product}`);
