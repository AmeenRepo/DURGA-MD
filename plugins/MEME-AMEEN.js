import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/blob/main/ameen/hehe.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'image.jpg', `*HEHE BY AMEEN✌🏻*`, m)}
conn.sendpoll(m.chat, "*HEHE BY AMEEN✌🏻*", author, "AMEEN", [['NEXT', `${usedPrefix + command}`]], m)}
handler.help = ['meme', 'hehe']
handler.tags = ['internet']
handler.command = /^(meme|hehe)$/i
export default handler
