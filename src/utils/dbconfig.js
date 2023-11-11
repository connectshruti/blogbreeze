import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  } catch (error) {
    throw new Error("Connection failed");
  }
};
export default connectDatabase;
