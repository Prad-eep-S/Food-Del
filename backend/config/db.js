import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Pradeep274:SATHYAPRADEEPARAVIND@cluster0.lvjbgxy.mongodb.net/food-del").then(()=>console.log("DB Connected"));
} 
