import {calculateTax} from './mathUtils.js';

const product = {
    name: "Phone",
    price: 50000
};

const productTax= calculateTax(product.price);

console.log(`Product Name: ${product.name}`);
console.log(`Product Price: ${product.price} BDT`);
console.log(`Calculated Tax (15%): ${productTax} BDT`);
console.log(`Total Payable Amount: ${product.price + productTax} BDT`);