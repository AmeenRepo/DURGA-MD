import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://gist.githubusercontent.com/Mrimperfect7/873ba6f5eb9df9ca60ad97631cdaf4a4/raw/cdddb5989b8a0c9ca6efd6c51a40dc130bcf0639/fpps.json`)).data  
let url = await res.files[Math.floor(res.files.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*fpp*`, m)} 
//conn.sendButton(m.chat, "*fpp*", author, url, [[' NEXT ', `${usedPrefix + command}`]], m)}
handler.help = ['fpp']
handler.tags = ['internet']
handler.command = /^(fpp)$/i
export default handler
