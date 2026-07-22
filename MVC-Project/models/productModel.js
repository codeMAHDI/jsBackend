import mongoose from "mongoose";

// Schema design

// const schema= new mongoose.Schema({...})

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: [true, "Name is required"],
        },
        price: {
            type: String,
            require: [true, "Price is required"],
            default: 0
        },
        category: {
            type: String,
            require: [true, "Category is required"],
            trim: true
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    {
        timestams: true
    }
);

// Schema to model

const Product = mongoose.model("Product", productSchema);
export default Product;