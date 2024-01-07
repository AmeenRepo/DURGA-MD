import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {        
let res = (await axios.get(`https://raw.githubusercontent.com/AmeenRepo/database/main/ameen/mser.json`)).data  
let ameen = await axios.get(res[Math.floor(Math.random() * res.length)])
  let { url } = ameen.data

  conn.sendMessage(m.chat, url, null, { asSticker: true })
  m.react('🗡️')
}
handler.help = ['mser']
handler.tags = ['internet']
handler.command = /^(mser)$/i
export default handler