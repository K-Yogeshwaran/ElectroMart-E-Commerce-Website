import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: String,
        image: String,
        category: String,
        stock: {
            type: Number,
            default: 0,
        },
        features: [
            {
                label: String,
                value: String,
            },
        ],
        rating: {
            average: {
                type: Number,
                default: 0,
            },
            count: {
                type: Number,
                default: 0,
            },
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        strict: true, // keep strict, schema now matches
    }
);

export const Product = mongoose.model(
    "Product",
    ProductSchema,
    "products" // force correct collection
);
