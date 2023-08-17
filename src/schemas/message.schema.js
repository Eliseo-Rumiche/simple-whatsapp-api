export const simpleMessageSchema = {
  body: {
    type: "object",
    required: ["phone", "message"],
    properties: {
      phone: {
        type: "string",
        minLength: 9,
        maxLength: 12,
        pattern: "^[0-9]+$",
      },
      message: {
        type: "string",
      },
    },
  },
};

export const mediaMessageUrlSchema = {
  body: {
    type: "object",
    required: ["phone", "urlMedia"],
    properties: {
      phone: {
        type: "string",
        minLength: 9,
        maxLength: 12,
        pattern: "^[0-9]+$",
      },
      urlMedia: {
        type: "string",
        // pattern : `^https?://[a-zA-Z0-9-]+.[a-zA-Z0-9-]+*$`
      },
      caption: {
        type: "string",
      },
    },
  },
};

export const messageMediaSchema = {
  consumes: ["multipart/form-data"],
  body: {
    type: "object",
    required: ["phone", "file"],
    properties: {
      phone: {
        type: "string",
        minLength: 9,
        maxLength: 12,
        pattern: "^[0-9]+$",
      },
      file: {
        type: "array",
      },
      caption: {
        type: "string",
      },
    },
  },
};

export const locationMessageSchema = {
  body: {
    type: "object",
    required : ['phone', 'latitude', 'longitude'],
    properties: {
      phone: {
        type: "string",
        minLength: 9,
        maxLength: 12,
        pattern: "^[0-9]+$",
      },
      latitude : {
        type : "string",
        pattern : "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$"
      },
      longitude : {
        type : "string",
        pattern : "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$"
      },
      description : {
        type : 'string',
      }
    },
  },
};
