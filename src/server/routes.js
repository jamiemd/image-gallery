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
          ctx.body = { message: "status ok", albums };
          // find album by id
        } else if (
          ctx.method === "GET" &&
          ctx.path.startsWith("/api/findAlbum/")
        ) {
          const id = ctx.path.match(/findAlbum\/(.*)/)[1];
          const album = await AlbumModel.findOne({ _id: id });
          ctx.body = { message: "status ok", album };
          // create album
        } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
          await parseBody(ctx, () => Promise.resolve());
          let { albumName } = ctx.request.body;
          const newAlbum = new AlbumModel({ name: albumName });
          const result = await newAlbum.save();
          ctx.body = { message: "status ok", albumId: result._id };
          // add images
        } else if (ctx.method === "POST" && ctx.path === "/api/add-images") {
          await parseBody(ctx, () => Promise.resolve());
          let { images } = ctx.request.body;
          const newAlbum = new AlbumModel({ images });
          const result = await newAlbum.save();
          ctx.body = { message: "status ok", result };
        }
        return next();
      };
    }
  });
