import mongoose from "mongoose";

const connectTOMongoDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectTOMongoDB;
