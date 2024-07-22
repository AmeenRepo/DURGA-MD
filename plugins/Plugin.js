import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `=>await.(!text)\n\nUsage:\n${usedPrefix + command} <teks>\n\nexample:\n${usedPrefix + command} menu`
    if (!m.quoted.text) throw `No normal state`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`STORED ${path}`)
}
handler.customPrefix = ('set')
handler.command = new RegExp
handler.tags = ['Own']
handler.help = ['set']
handler.rowner = false
export default handler
