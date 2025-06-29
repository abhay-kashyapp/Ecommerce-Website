
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    await mongoose.connect(process.env.MONGODB_URI) 
     
    
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
