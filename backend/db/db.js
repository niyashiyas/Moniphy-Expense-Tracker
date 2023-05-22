var {mongoose} = require("mongoose");
var {config} = require("dotenv");
const MONGO_URL =
  "mongodb+srv://niya03:QSulPRwjjsBKBwPq@expensetracker.dti2am3.mongodb.net/?retryWrites=true&w=majority;";

config();

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("error: " + error);
  }
};
module.exports = {db};
