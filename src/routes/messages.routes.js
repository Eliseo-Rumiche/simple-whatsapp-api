import { simpleMessage,mediaMessageUrl, mediaMessage, locationMessage } from "../controllers/messages.controller.js";
import { simpleMessageSchema, mediaMessageUrlSchema, messageMediaSchema , locationMessageSchema} from "../schemas/message.schema.js";

export const messagesRoutes = [
  {
    url: "/api/v1/message",
    method: "POST",
    handler: simpleMessage,
    schema: simpleMessageSchema
  },
  {
    url: "/api/v1/messageMediaUrl",
    method: "POST",
    handler: mediaMessageUrl,
    schema: mediaMessageUrlSchema
  },
  {
    url: "/api/v1/messageMedia",
    method: "POST",
    handler: mediaMessage,
    schema: messageMediaSchema
  },
  {
    url: "/api/v1/messageLocation",
    method: "POST",
    handler: locationMessage,
    schema: locationMessageSchema
  }
];
