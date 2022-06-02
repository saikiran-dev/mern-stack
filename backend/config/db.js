const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connectDB;
