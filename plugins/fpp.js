import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://gist.githubusercontent.com/Mrimperfect7/18c1c9f06ebad7fdfa3f4b689d55aa6b/raw/f51e6357af29eee8b3ceea0ac369638fc1b43248/fpp.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*fpp*`, m)} 
//conn.sendButton(m.chat, "*fpp*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['fpp']
handler.tags = ['internet']
handler.command = /^(fpp)$/i
export default handler
