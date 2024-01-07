import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {        
let res = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/main/ameen/mser.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, url, "sticker.webp", { asSticker: true }, m)
handler.help = ['mser']
handler.tags = ['internet']
handler.command = /^(mser)$/i
export default handler