import fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import { wspClient } from "./services/wspClient.js";
import { messagesRoutes } from "./routes/messages.routes.js";
import formbody from '@fastify/formbody'

const app = fastify({ logger: false });
app.register(formbody)

app.register(fastifyMultipart, {
  attachFieldsToBody: true,
  addToBody: true,

});


messagesRoutes.forEach((route) => app.route(route));

const start = async () => {
  console.log("INICIANDO ......");
  await wspClient.initialize();
  await app.listen({ port: 3000 });
  console.log("SERVICIO ACTIVADO\n");
  console.log("[ + LOGS + ] ")
};

start();
