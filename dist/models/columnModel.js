import mongoose from "mongoose";
// Define the Lecture schema
const columnSchema = new mongoose.Schema({
    columnName: { type: String, required: true },
}, { timestamps: true });
export const Column = mongoose.models?.Column || mongoose.model("Column", columnSchema);
