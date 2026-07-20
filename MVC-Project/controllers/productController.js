export const addProduct = (req, res) => {
    const { name, price } = req.body;
    console.log("data received", name, price);
    res.json({
        message: "Product added successfully!", data: { name, price }
    });
};