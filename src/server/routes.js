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
          console.log("album", album);
          ctx.body = { message: "status ok", album };
          // create album
        } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
          await parseBody(ctx, () => Promise.resolve());
          let { name, images } = ctx.request.body;
          // console.log("name", name);
          // console.log("images", images);
          const newAlbum = new AlbumModel({ name, images });
          const result = await newAlbum.save();
          console.log("result", result);
          ctx.body = { message: "status ok", result };
        }
        return next();
      };
    }
  });
