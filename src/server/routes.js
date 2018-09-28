const AlbumModel = require("./AlbumModel");
import { createPlugin } from "fusion-core";
import bodyParser from "koa-bodyparser";

export default __NODE__ &&
  createPlugin({
    middleware() {
      const parseBody = bodyParser();
      return async (ctx, next) => {
        // get all albums
        if (ctx.method === "GET" && ctx.path === "/api/getAlbums") {
          const albums = await AlbumModel.find({});
          ctx.body = { message: "all albums found", albums };
          // find album by id
        } else if (
          ctx.method === "GET" &&
          ctx.path.startsWith("/api/findAlbum/")
        ) {
          const albumId = ctx.path.match(/findAlbum\/(.*)/)[1];
          const album = await AlbumModel.findOne({ _id: albumId });
          ctx.body = { message: "album found", album };
          // create album
        } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
          await parseBody(ctx, () => Promise.resolve());
          let { albumName } = ctx.request.body;
          const newAlbum = new AlbumModel({ name: albumName });
          const result = await newAlbum.save();
          ctx.body = { message: "album created", albumId: result._id };
          // add images
        } else if (
          ctx.method === "PUT" &&
          ctx.path.startsWith("/api/add-image")
        ) {
          const albumId = ctx.path.match(/add-image\/(.*)/)[1];
          await parseBody(ctx, () => Promise.resolve());
          let { image } = ctx.request.body;
          const album = await AlbumModel.findOne({ _id: albumId });
          let currentAlbum = album.images;
          currentAlbum.push(image);
          const result = await AlbumModel.findOneAndUpdate(
            { _id: albumId },
            {
              $set: { images: currentAlbum }
            },
            { new: true }
          );
          ctx.body = { message: "image added", result };
          // delete album
        } else if (ctx.method === "POST" && ctx.path === "/api/delete-album") {
          await parseBody(ctx, () => Promise.resolve());
          let { albumId } = ctx.request.body;
          const result = await AlbumModel.findOneAndDelete({ _id: albumId });
          ctx.body = { message: "album deleted", result };
          // delete image
        } else if (ctx.method === "POST" && ctx.path === "/api/delete-image") {
          await parseBody(ctx, () => Promise.resolve());
          let { imageToDelete, albumId } = ctx.request.body;
          const album = await AlbumModel.findOne({ _id: albumId });
          const imagesArray = album.images;
          for (let i = 0; i < imagesArray.length; i++) {
            let idString = String(imagesArray[i]._id);
            if (idString === imageToDelete) {
              imagesArray.splice(i, 1);
            }
          }
          const result = await AlbumModel.findOneAndUpdate(
            { _id: albumId },
            {
              $set: { images: imagesArray }
            },
            { new: true }
          );
          ctx.body = { message: "image deleted", result };
        }
        return next();
      };
    }
  });
