const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error Connecting with mongo");
});

db.once("open", () => {
  console.log("Connected with mongo");
});

module.exports = db;
