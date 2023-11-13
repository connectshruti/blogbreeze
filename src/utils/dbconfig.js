import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    //kya krun ram mujhe budha mil gya
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error("Connection failed");
  }
};
export default connectDatabase;
