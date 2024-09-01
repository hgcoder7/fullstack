import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:76913@cluster0.1bkbl.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}