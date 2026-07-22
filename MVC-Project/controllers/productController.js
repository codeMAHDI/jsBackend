import Product from "../models/productModel.js";


// export const addProduct = (req, res) => {
//     const { name, price } = req.body;
//     console.log("data received", name, price);
//     res.json({
//         message: "Product added successfully!", data: { name, price }
//     });
// };

// export const getProducts = (req, res) => {
//     const productList = [
//         { id: 1, name: "Laptop", price: 80000 },
//         { id: 2, name: "Mouse", price: 1500 },
//         { id: 3, name: "Keyboard", price: 3500 }
//     ];
//     console.log("Fetching products list...");
//     res.json({
//         success: true,
//         count: productList.length,
//         data: productList
//     });

// };

export const UpdateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    console.log(`Updating product with ID: ${id} to Name: ${name}, Price: ${price}`);
    res.json({
        success: true,
        message: `Product with ID: ${id} updated successfully!`,
        updatedData: { id, name, price }
    });
};

export const DeleteProduct = (req, res) => {
    const { id } = req.params;
    console.log(`Deleting product with ID: ${id}`);
    res.json({
        success: true,
        message: `Product with ID: ${id} has been deleted successfully!`
    });

};


export const getProductDetails = (req, res, next) => {
    try {
        const { id } = req.params;

        if (id === "0") {
            const error = new Error("Product with ID 0 is invalid!");
            error.statusCode = 400;
            throw error;
        }
        res.json({
            success: true,
            message: `Product Details fetched for ID: ${id}`
        })

    } catch (error) {
        next(error);
    }
};


// Complete API Testing
export const testApi = (req, res) => {
    const authHeader = req.headers["authorization"];
    const { search, limit } = req.query;
    const { id } = req.params;
    const { category } = req.body;

    res.json({
        success: true,
        message: "API Testing Successful!",
        receivedData: {
            headerToken: authHeader || "No Token Provided",
            pathId: id,
            querySearch: search || "No Search Query",
            queryLimit: limit || "No Limit Set",
            bodyCategory: category || "No Category in Body"
        }
    });


};


// Database CRUD (Create & Read)

//Create product 
export const addProduct = async (req, res, next) => {
    try {
        const { name, price, category, inStock } = req.body;

        //Save data to database
        const newProduct = await Product.create({
            name,
            price,
            category,
            inStock
        });
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: newProduct
        });

    } catch (error) {
        next(error);
    }
};

// Read all products

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    }
    catch (error) {
        next(error);
    }
};
