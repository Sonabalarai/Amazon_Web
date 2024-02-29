import mongoose from "mongoose";

// set rule

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  manufactureDate: Date,
  expiryDate: Date,
  freeShipping: Boolean,
  brand: String,
  quantity: Number,
});

// create Table
const Product = mongoose.model("product", productSchema);
export default Product;
