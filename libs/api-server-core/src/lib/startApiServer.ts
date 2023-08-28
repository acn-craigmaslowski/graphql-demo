import {expressMiddleware} from "@apollo/server/express4";
import cors from "cors";
import express, {json} from "express";
import http from "http";

import {getApolloServer, getContext} from "@graphql-demo/graphql-server";

/**
 * Properties object to be passed to the `startApi` function
 */
interface StartApiServerProps {
  /**
   * The port number the server responds on
   */
  port?: number;
}

/**
 * A funtion to start the api server
 *
 * @param param0
 */
export async function startApiServer({port = 4000}: StartApiServerProps) {
  // setup app
  const app = express();
  const corsConfiguration = {
    origin: "http://localhost:4200",
    credentials: true,
    methods: ["POST"],
  };

  app.set("etag", false);
  app.use(cors(corsConfiguration));
  app.use(json());
  const httpServer = http.createServer(app);

  // setup grapqhl server
  const apolloServer = getApolloServer({httpServer});
  await apolloServer.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsConfiguration),
    expressMiddleware(apolloServer, {
      context: getContext,
    })
  );

  // begin listening for requests
  await new Promise<void>(resolve => httpServer.listen({port}, resolve));
  console.info(`🚀 GraphQL Server ready at http://localhost:${port}`);
}
