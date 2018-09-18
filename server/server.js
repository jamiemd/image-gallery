const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const db = process.env.MONGODB_URI || "mongodb://localhost/image-gallery";
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const Routes = require("./routes");
Routes(app);

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  db,
  { useNewUrlParser: true }
);

connect.then(
  () => {
    app.listen(port);
    console.log(`Server Listening on ${port}`);
  },
  err => {
    console.log("Could not connect to MongoDB");
  }
);
