// Objects(Map) & Arrays(list) in JavaScript 
// Objects are key-value pairs, where keys are strings (or Symbols) and values can be any data type.
// const user={
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,    
//     roles: "admin",
// }
// const id = user.id;// Traditional way to extract values from an object
// const{firstName, lastName, age, roles}=  user; // Modern Destructuring way to extract values from an object
// console.log("User ID:", id);
// console.log("User Email:", firstName);
// console.log("User Roles:", roles);

//Array is an ordered list of values, where each value can be of any data type.

// const products=[
//     { id: 1, name: "Laptop", price: 80000 },
//     { id: 2, name: "Mouse", price: 1500 },
//     { id: 3, name: "Keyboard", price: 3500 }  
// ];

// // New profuct push
// products.push({ id: 4, name: "Keyboard", price: 3500 });
// console.log("Total Products in Array:", products.length);
// console.log("First Product Name:", products[0].name);


//-----Practice task-----
// //Object(Map)
// const orderDetails={
//     orderId: 101,
//     customerName: "Alice",
//     totalItems: 3,
//     status: "Processing",
// }

// const{customerName, status}= orderDetails; 
// console.log("Customer Name:", customerName);
// console.log("Order Status:", status);

//Array(list)
// const cartItems=[
//     { id: 1, name: "Laptop", price: 80000, quantity: 1 },
//     { id: 2, name: "Mouse", price: 1500, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 3500, quantity: 1 }
// ]
// cartItems.push({ id: 4, name: "Monitor", price: 12000, quantity: 1 });
// console.log("Full array of cart items:", cartItems);