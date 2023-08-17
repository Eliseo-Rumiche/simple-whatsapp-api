import qrcode from "qrcode-terminal"
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;


const wspClient = new Client({
    authStrategy: new LocalAuth({
    }),

    puppeteer: {
        args: ['--no-sandbox']
    },
})

wspClient.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log(`⚡ Escanea el  QR   ⚡'`);
    console.log(`⚡ Recuerda que el QR se actualiza cada minuto ⚡'`);
});

wspClient.on('ready', () => {
    console.log('CLIENTE WHATSAPP EN LINEA ');
});

export { wspClient }


 