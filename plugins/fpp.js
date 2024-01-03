import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://gist.githubusercontent.com/Mrimperfect7/873ba6f5eb9df9ca60ad97631cdaf4a4/raw/705ec6545b8ce13aedf495be2793c7a431ff4971/fpps.json`)).data  
let url = await res.files[Math.floor(res.files.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*fpp*`, m)} 
//conn.sendButton(m.chat, "*fpp*", author, url, [[' NEXT ', `${usedPrefix + command}`]], m)}
handler.help = ['fpp']
handler.tags = ['internet']
handler.command = /^(fpp)$/i
export default handler
