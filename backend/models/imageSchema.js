const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../utils/config");

const url = `mongodb+srv://${config.USERNAME}:${config.PASSWORD}@products.bm9h4.mongodb.net/PotteryEcommerce?retryWrites=true&w=majority`;
//connect to database
mongoose
  .connect(url)
  .then(() => {
    console.log("connect to mongo db");
  })
  .catch((err) => {
    console.log(`error connecting to mondoDB: ${err}`);
  });

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
