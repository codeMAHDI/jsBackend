// Normal Function

// function hashPassword(plainPassword) {
//     const hashedPassword = plainPassword + "_secure_secret_hash";
//     return hashedPassword;
// }

// const userSecret = hashPassword("myPassword123");
// console.log("Hashed Password:", userSecret);



// Arrow Function
// const functionName = () => { ... };


// const calculateFinalPrice=(price , discountPercentage)=>{
//     const discountAmount = (price * discountPercentage) / 100;
//     return price - discountAmount;
// }

// const finalPrice= calculateFinalPrice(100,20);
// console.log("Final Payable Price:", finalPrice); 



//-----Practice task-----

// Normal Function
function generateToken(userId){
    const token = userId + "_secure_token";
    return token;

}

const userToken = generateToken("user123");
console.log("Generated Token:", userToken);

// Arrow Function
const isCartValid=(totalAmount)=>totalAmount > 0;


const cartStatus = isCartValid(150);
console.log("Is Cart Valid:", cartStatus);