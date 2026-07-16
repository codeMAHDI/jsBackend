//import
import express from "express";
import dotenv from "dotenv";

//config - means to set up the environment variables from
// a .env file(like port, database url, etc.) to be used in the application.
dotenv.config();

// create an instance of the express application(server) by calling the express()
// function. This instance is used to define routes,
// middleware, and other configurations for the application.
const app = express();
const PORT = process.env.PORT || 8000;

// Route Handling: The app.get() method is used to define a route handler
// for the root URL ("/"= this is the root =http://localhost:3000/).
// When a GET request is made to the root URL,
// the provided callback function is executed,
// which sends a response back to the client with the message
// "Hello from Express.js!".
app.get("/", (req, res)=>{
    res.send("Hello Mahdi! Your Express Server is live!");
});

// Tell the server that it will receice json data
app.use(express.json());

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "API is working perfectly!",
    developer: "Mahdi",
  });
});

app.post("/api/add-product", (req, res) => {
    const {name, price}= req.body;
    console.log("Received data:", name, price);
    res.json({ 
    message: "Product received successfully!",
    receivedProduct: { name, price }
} );
});

//Listening to the port: The app.listen() method is used to start the server
// and listen for incoming requests on the specified port. When the server
// starts successfully, a message is logged to the console indicating that
// the server is running and listening on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
