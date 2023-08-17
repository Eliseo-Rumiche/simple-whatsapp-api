import { wspClient } from "../services/wspClient.js";
import { Buffer } from "buffer";
import pkg from "whatsapp-web.js";
const { MessageMedia, Location } = pkg;

export const simpleMessage = async (req, reply) => {
  const chatId = req.body.phone + "@c.us";
  const message = await req.body.message;

  await wspClient
    .sendMessage(chatId, message)
    .then(() => {
      console.log(`[ + ] ${chatId} =>  msg`);
      return reply.code(200).send({ status: "success" });
    })
    .catch((e) => reply.status(400).send({ status: "error", error: e }));
};

export const mediaMessageUrl = async (req, reply) => {
  const chatId = req.body.phone + "@c.us";

  const media = await MessageMedia.fromUrl(req.body.urlMedia);
  const caption = req.body.caption;

  await wspClient
    .sendMessage(chatId, media, { caption: caption })
    .then(() => {
      console.log(`[ + ] ${chatId} =>  ${media.filename}`);
      return reply.code(200).send({ status: "success" });
    })
    .catch((e) => reply.status(400).send({ status: "error", error: e }));
};

export const mediaMessage = async (req, reply) => {
  const chatId = req.body.phone + "@c.us";

  const file = req.body.file[0];
  const fileB64 = Buffer.from(file.data).toString("base64");
  const caption = req.body.caption;

  const media = new MessageMedia(file.mimetype, fileB64, file.filename);

  await wspClient
    .sendMessage(chatId, media, { caption: caption })
    .then(() => {
      console.log(`[ + ] ${chatId} =>  ${file.filename}`);
      return reply.code(200).send({ status: "success" });
    })
    .catch((e) => reply.status(400).send({ status: "error", error: e }));
};

export const locationMessage = async (req, reply) => {
  const chatId = req.body.phone + "@c.us";
  const { latitude, longitude, description } = req.body;

  const location = new Location(
    Number(latitude),
    Number(longitude),
    description
  );

  await wspClient
    .sendMessage(chatId, location)
    .then(() => {
      console.log(`[ + ] ${chatId} =>  Location`);
      return reply.code(200).send({ status: "success" });
    })
    .catch((e) => reply.code(400).send({ status: "error", error: e }));
};
