"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "channel", reaction: "🫠", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Yoo support me by following my channel and subscribing on my youtube channel* \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x";
    let d = '                                                     ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@wemacomic';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/4d7898457e46962b69b22.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "bugatti", reaction: "🏎️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝑻𝒉𝒊𝒔 𝒊𝒔 𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝑩𝒐𝒕 𝒃𝒚 𝑴𝒂𝒓𝒊𝒔𝒆𝒍\n\n ' + "𝑻𝒚𝒑𝒆 𝒎𝒆𝒏𝒖 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒎𝒆";
    let d = '                                                𝑨𝒎 𝒕𝒉𝒆 𝑺𝒖𝒑𝒆𝒓 𝒇𝒂𝒔𝒕𝒆 𝒃𝒐𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒘𝒐𝒓𝒍𝒅';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/4d7898457e46962b69b22.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");
