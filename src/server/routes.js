const AlbumModel = require("./AlbumModel");
import { createPlugin } from "fusion-core";
import bodyParser from "koa-bodyparser";

export default __NODE__ &&
  createPlugin({
    middleware() {
      const parseBody = bodyParser();
      return async (ctx, next) => {
        // get all albums
        if (ctx.method === "GET" && ctx.path === "/api/albums") {
          const albums = await AlbumModel.find({});
          console.log("albums");
          ctx.body = albums;
          // get album by id
        } else if (ctx.method === "GET" && ctx.path === "/api/album/:id") {
          let { id } = ctx.request.body;
          const albums = await AlbumModel.find({ id }).exec();
          return next();
          // create album
        } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
          await parseBody(ctx, () => Promise.resolve());
          let { name, images } = ctx.request.body;
          const newAlbum = new AlbumModel({ name, images });
          const result = await newAlbum.save();
          console.log("result", result);
          ctx.body = { message: "status ok", result };
        }
        return next();
      };
    }
  });
