import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
      default: [],
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Stock: {
      type: Number,
      required: true,
    },
    productIsNew: {
      type: Boolean,
      required: true,
    },
    stripeId: {
      type: String,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
