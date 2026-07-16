export const addProduct = (req, res) => {
    const { name, price } = req.body;
    console.log("Received data in Controller:", name, price);
    
    res.json({ 
        message: "Product received successfully via MVC Controller!",
        data: { name, price } 
    });
};