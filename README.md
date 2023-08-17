# simple-whatsapp-api
simple whatsapp api 

This is a simple WhatsApp API that allows you to send messages, media messages, and location messages.

To use the API, first clone the repository and install the dependencies:

```
git clone https://github.com/Eliseo-Rumiche/simple-whatsapp-api.git
cd simple-whatsapp-api
npm install
```

A QR code will be printed to the terminal. Scan the QR code with your phone to open the WhatsApp web client.

The service will be running on port 3000 by default.

You can send a message using the following endpoint:

```
POST /api/v1/message
```

The body of the request should be a JSON object with the following properties:

* `phone`: The phone number of the recipient, in international format.
* `message`: The message to send.

You can send a media message using the following endpoint:

```
POST /api/v1/messageMediaUrl
```

The body of the request should be a JSON object with the following properties:

* `phone`: The phone number of the recipient, in international format.
* `urlMedia`: The URL of the media file.
* `caption`: (Optional) A caption for the media file.

To send media, you can use the following endpoint:

```
POST /api/v1/messageMedia
```

The request body should contain the following data:

*  `phone`: The phone number of the recipient, in international format.
* `file`: the file to send
* `caption`: (Optional) A caption for the media file.

The file parameter should be a file object that contains the file data.


You can send a location message using the following endpoint:

```
POST /api/v1/messageLocation
```

The body of the request should be a JSON object with the following properties:

* `phone`: The phone number of the recipient, in international format.
* `latitude`: The latitude of the location.
* `longitude`: The longitude of the location.
* `description`: (Optional) A description of the location.

I hope you find this API useful!
