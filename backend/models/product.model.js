import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
//The second argument to the Schema constructor is an options object. Here, { timestamps: true } is passed, which automatically adds createdAt and updatedAt fields to each document, allowing MongoDB to track when the document was created and last updated.
