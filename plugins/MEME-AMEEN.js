import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/AmeenRepo/database/blob/main/ameen/hehe.json')).json()
  let meera = data[Math.floor(Math.random() * data.length)]
  
  let ameen = await(await fetch(meera.ameens)).buffer()
  await conn.sendFile(m.chat, ameen, '', '_◽AMEEN-SER_', m)
}
handler.help = ['meme', 'memevid']
handler.tags = ['internet']
handler.command = ['meme','memevid'] 


export default handler
