import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/main/ameen/mser.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*MSER BY AMEEN 🕊️*`, m)} 
conn.sendMessage(m.chat, url, null, { asSticker: true });
  m.react('🗡️');
};
handler.help = ['mser']
handler.tags = ['internet']
handler.command = /^(mser)$/i
export default handler