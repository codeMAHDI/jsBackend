import {validuser, generateSession} from './authController.js';

const startServer=()=>{console.log("Server checking credentials...");};
const isValid = validuser("mahdi", "1234");

if(isValid){
    const session= generateSession("mahdi");
    console.log("Login Success! Session Created:", session);
}else{
    console.log("Access Denied!");
};

startServer();

