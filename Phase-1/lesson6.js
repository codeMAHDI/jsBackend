// Try/Catch Error Handling
// It is used to handle errors in JavaScript. 
// The try block contains the code that may throw an error, 
// and the catch block contains the code that will execute if an error occurs.

// const findProductInDB= async (productId)=>{
//     if(productId === "p01"){
//         return{id: "p01", name: "Wireless Mouse", price: 1200}; 
//     }else{
//         throw new Error("Product not found in the database!");
//     }
// };


// const getProductDetails= async(id)=>{
// try{
// console.log("Searching for product...");
// const product = await findProductInDB(id);
// console.log("Success! Product Data:", product);
// console.log("Sending 200 OK Response to Flutter App.");
// }catch(error){
// console.log("❌ Error Caught in Controller:", error.message);
// console.log("Sending 404 Not Found Response to Flutter App.");
// }
// };

// console.log("--- Test 1: Requesting valid product ---");
// getProductDetails("p01");
// setTimeout(() => {
//     console.log("\n--- Test 2: Requesting invalid product ---");
//     getProductDetails("p99");
// }, 1000);

// -- Practice  --

const loginDatabase= async(password)=>{
    if(password ==='admin123'){
        return { status: "Logged In", token: "XYZ123" };
    }else{
        throw new Error("Wrong Password! Access Denied.");
    }
};

const handleLogin=async(password)=>{
    try{
        console.log("Attempting to log in...");
        const loginResponse= await loginDatabase(password);
        console.log("Success! Login Response:", loginResponse);
        console.log("Sending 200 OK Response to Flutter App.");
    }catch(error){
        console.log("❌ Error Caught in Login Controller:", error.message);
        console.log("Sending 401 Unauthorized Response to Flutter App.");
    }
}; 


console.log("--- Test 1: Requesting valid login ---");
handleLogin("admin123");
setTimeout(()=>{
    console.log("\n--- Test 2: Requesting invalid login ---");
    handleLogin("wrongpass");
}, 2000);
