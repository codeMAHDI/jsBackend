// // Array Methods
// const cartItems = [
//     { id: 1, name: "Laptop", price: 20, quantity: 1 },
//     { id: 2, name: "Mouse", price: 30, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 40, quantity: 1 },
//     { id: 4, name: "Monitor", price: 50, quantity: 1 }
// ];

// // .map() method

//  const itemNames= cartItems.map((item)=>item.name);
//  console.log("Item Names:", itemNames);

//  // .filter()

// const expensiveItems= cartItems.filter((item)=>item.price>20);
// console.log("Expensive Items:", expensiveItems);

//  // .find()

//  const targetItem= cartItems.find((item)=>item.id===2);
// console.log("Target Item:", targetItem);

//  // .reduce()

//  const totalBill= cartItems.reduce((prev, item)=>{
//     return prev+(item.price*item.quantity);
//  });
//  console.log("Total Payable Amount:", totalBill);



 // --practice--

const userList = [
    { id: 101, name: "Abir", role: "user", isVerified: true },
    { id: 102, name: "Bishal", role: "admin", isVerified: false },
    { id: 103, name: "Chayan", role: "user", isVerified: false },
    { id: 104, name: "Diana", role: "user", isVerified: true }
];


// User array make

const userArray=  userList.map((user)=>user.name);
console.log("User Array:", userArray);

const isVerified= userList.filter((user)=> user.isVerified);
console.log("Verified Users:", isVerified);

const targetUser= userList.find((user)=>user.id===103);
console.log("Target User:", targetUser);