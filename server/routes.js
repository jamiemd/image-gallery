const AlbumModel = require("./AlbumModel");

// reference: https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const STATUS_OKAY = 200;
const STATUS_NOT_FOUND = 404;

module.exports = app => {
  app.get("/api/albums", (req, res) => {
    AlbumModel.find({})
      .then(result => 
        console.log("result", result)
        res.status(200).json(result);
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "The information could not be retrieved" });
      });
  });
};
