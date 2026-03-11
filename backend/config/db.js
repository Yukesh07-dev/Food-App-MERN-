// import mongoose from "mongoose"

// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://yukesh:<password>@cluster0.s3yerix.mongodb.net/foodapp?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );

    console.log("✅ DB Connected Successfully");
  } catch (error) {
    console.log("❌ DB Connection Failed:", error.message);
  }
};

export default connectDB;


 
