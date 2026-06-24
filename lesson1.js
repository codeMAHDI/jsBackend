const DATABASE_URL = "mongodb://localhost:27017/my_app";
console.log("Database URL:", DATABASE_URL);

// DATABASE_URL ="mongodb://localhost:27017/another_app"; 


let cartTotal = 0;
const item1Price = 250;
const item2Price = 150;

cartTotal= item1Price + item2Price;
console.log("Cart Total:", cartTotal);

//Backend object and data types(example: Api response)

const userProfile={
    userId: 1024,                   // Number
    username: "codeMAHDI",          // String
    email: "mahdiappdev@gmail.com", // String
    isActive: true,                 // Boolean
    roles: ["developer", "admin"]   // Array
};

console.log("User profile object:", userProfile);
console.log("Is User Admin?", userProfile.roles.includes("admin"));



// Ecommerce product object

const productDetails={
    productId: 1,
    title: "Headphones",
    price: 99.99,
    isAvailable: true,
    tags:["electronics", "audio", "accessory"]
};

console.log("Product Details:", productDetails);
console.log("Price of the product is:", productDetails.price);