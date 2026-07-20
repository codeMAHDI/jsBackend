export const addProduct = (req, res) => {
    const { name, price } = req.body;
    console.log("data received", name, price);
    res.json({
        message: "Product added successfully!", data: { name, price }
    });
};

export const getProducts = (req, res) => {
    const productList = [
        { id: 1, name: "Laptop", price: 80000 },
        { id: 2, name: "Mouse", price: 1500 },
        { id: 3, name: "Keyboard", price: 3500 }
    ];
    console.log("Fetching products list...");
    res.json({
        success: true,
        count: productList.length,
        data: productList
    });

};