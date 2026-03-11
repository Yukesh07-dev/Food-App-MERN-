// import mongoose from "mongoose"

// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://yukesh:<password>@cluster0.s3yerix.mongodb.net/foodapp?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yukesh:Yukesh123@cluster0.7nmeoom.mongodb.net/?appName=Cluster0"
    );

    console.log("✅ DB Connected Successfully");
  } catch (error) {
    console.log("❌ DB Connection Failed:", error.message);
  }
};

export default connectDB;


 
