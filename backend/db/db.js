var {mongoose} = require("mongoose");
var {config} = require("dotenv");

config();

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("error: " + error);
  }
};
module.exports = {db};
