import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command }) => {
  let images = ["https://i.imgur.com/hye66Kj.png", "https://i.imgur.com/jvvtYwA.png", "https://i.imgur.com/RUUsFRP.png", "https://i.imgur.com/fdxVIhb.png", "https://i.imgur.com/lcsUT6D.png", "https://i.imgur.com/CPUxXNx.png", "https://i.imgur.com/LXFgeAp.png", "https://i.imgur.com/fsngIvL.png", "https://i.imgur.com/keuqqHC.png", "https://i.imgur.com/xHocdiJ.png", "https://i.imgur.com/9SQqYPd.png", "https://i.imgur.com/l7b5S78.png", "https://i.imgur.com/4dhxmkd.png", "https://i.imgur.com/5ro2oO9.png", "https://i.imgur.com/Td8GXZp.png", "https://i.imgur.com/sgjZoak.png", "https://i.imgur.com/O5EWi61.png", "https://i.imgur.com/cIFyVI7.png", "https://i.imgur.com/m1ONvBS.png", "https://i.imgur.com/nMy8WwK.png", "https://i.imgur.com/KvIsQ9y.png", "https://i.imgur.com/rMFqw8q.png", "https://i.imgur.com/n6S2GEy.png", "https://i.imgur.com/raWVODA.png", "https://i.imgur.com/hZrsS8d.png", "https://i.imgur.com/6DRp88b.png", "https://i.imgur.com/eOsDT8C.png", "https://i.imgur.com/ytQrtdH.png", "https://i.imgur.com/JKR1hPo.png", "https://i.imgur.com/w31SQgz.png", "https://i.imgur.com/08wHSLw.png", "https://i.imgur.com/R6Xr185.png", "https://i.imgur.com/C5kpwGq.png", "https://i.imgur.com/m4UKbZA.png", "https://i.imgur.com/ncqaRiI.png", "https://i.imgur.com/xlOrmFv.png", "https://i.imgur.com/nw0oocF.png", "https://i.imgur.com/xwtgZsB.png", "https://i.imgur.com/le3tTDC.png", "https://i.imgur.com/053KpfK.png", "https://i.imgur.com/ezZ7Kxt.png", "https://i.imgur.com/1TJqgJW.png", "https://i.imgur.com/fSUqRZ1.png", "https://i.imgur.com/AhoaGbC.png", "https://i.imgur.com/D09QMHr.png"];
  
  let res = await axios.get(images[Math.floor(Math.random() * images.length)]);
  let url = res.config.url; // Use res.config.url to get the requested URL

  conn.sendMessage(m.chat, { url }, null, { asSticker: true }); // Pass { url } to sendMessage
  m.react('🗡️');
};

handler.help = ['mser'];
handler.tags = ['sticker'];
handler.command = /^(mser)$/i;

export default handler;
