const AlbumModel = require("./AlbumModel");
import { createPlugin } from "fusion-core";
import bodyParser from "koa-bodyparser";

export default __NODE__ &&
  createPlugin({
    middleware() {
      const parseBody = bodyParser();
      return async (ctx, next) => {
        if (ctx.method === "GET" && ctx.path === "/api/album") {
          const albums = await AlbumModel.find({}).exec();
          ctx.body = albums;
        } else if (ctx.method === "GET" && ctx.path === "/api/album/:id") {
          return next();
        } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
          await parseBody(ctx, () => Promise.resolve());
          ctx.body = ctx.request.body;
        }
        return next();
      };
    }
  });
