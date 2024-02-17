let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let amee = `./AMEEN-SER/YOU/${pickRandom(["DURGA", "DURGA1", "NINJA", "AMEEN", "MEERA", "AMEEN1", "NINJA1", "MEERA1"])}.png`
let pp =`./AMEEN-SER/YOU/${pickRandom(["ERIC", "DERIC", "ERICD"])}.png`
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `┌─❖
│「 𝗛ey 👋🏻 」
└┬❖ 「 *🏷️𝐃𝐔𝐑𝐆𝐀-𝐌𝐃㋡* 」
  │
  │❖ *HOST:* LINUX   
  │  
  │❖ *OWNER:* ${author}
  │
  │❖ *DEVELOPER:* AMEEN-SER
  │
  │❖ *BOT:* DURGA MD
  │
  │❖ *PLUGINS BY:* IMPU SER
  │
  └─────────────┈ ⳹
┌─❖
│「❤️𝐃𝐔𝐑𝐆𝐀-𝐌𝐃❤️」
│
│    ⚠️ Made By
│               Ameen-Ser ❖
│         
└┬❖ 「 *Owner Menu* 」
   │
   │ ❖ ${usedPrefix}*On/Off* public
   │ ❖ ${usedPrefix}*On/Off* autoreact 
   │ ❖ ${usedPrefix}update 
   │ ❖ ${usedPrefix}sudo
   │ ❖ ${usedPrefix}autoadmin
   │ ❖ ${usedPrefix}left
   │ ❖ ${usedPrefix}banchat
   │ ❖ ${usedPrefix}unbanchat
   │ ❖ ${usedPrefix}ban
   │ ❖ ${usedPrefix}unban
   │ ❖ ${usedPrefix}banlist
   │ ❖ ${usedPrefix}block
   │ ❖ ${usedPrefix}unblock
   │ ❖ ${usedPrefix}blocklist
   │ ❖ ${usedPrefix}bc
   │ ❖ ${usedPrefix}bcgc
   │ ❖ ${usedPrefix}join
   │ ❖ ${usedPrefix}restart
   │ ❖ ${usedPrefix}setpp
   │ ❖ ${usedPrefix}setprefix
   │ ❖ ${usedPrefix}resetprefix
   │ ❖ ${usedPrefix}resetuser
   │ ❖ ${usedPrefix}getfile
   │ ❖ ${usedPrefix}getplugin 
   └─────────────┈ ⳹
   ┌─❖「 *Bot Menu* 」
   │
   │ ❖ ${usedPrefix}ping
   │ ❖ ${usedPrefix}uptime
   │ ❖ ${usedPrefix}enable
   │ ❖ ${usedPrefix}alive
   │ ❖ ${usedPrefix}owner
   │ ❖ ${usedPrefix}report
   │ ❖ ${usedPrefix}bot
   │ ❖ ${usedPrefix}worker
   │ ❖ ${usedPrefix}runtime
   │ ❖ ${usedPrefix}infobot
   │ ❖ ${usedPrefix}donate
   │ ❖ ${usedPrefix}groups
   │ ❖ ${usedPrefix}blocklist
   │ ❖ ${usedPrefix}listprem
   └─────────────┈ ⳹
   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
   ┌─❖「 *Fun Menu* 」
   │
   │ ❖ ${usedPrefix}Love
   │ ❖ ${usedPrefix}moon
   │ ❖ ${usedPrefix}question 
   │ ❖ ${usedPrefix}character 
   │ ❖ ${usedPrefix}truth
   │ ❖ ${usedPrefix}dare 
   │ ❖ ${usedPrefix}flirt
   │ ❖ ${usedPrefix}gay
   │ ❖ ${usedPrefix}meme
   │ ❖ ${usedPrefix}ship
   │ ❖ ${usedPrefix}kill
   │ ❖ ${usedPrefix}kiss
   │ ❖ ${usedPrefix}pat
   │ ❖ ${usedPrefix}slap
   │ ❖ ${usedPrefix}waste
   │ ❖ ${usedPrefix}simpcard
   │ ❖ ${usedPrefix}hornycard
   │ ❖ ${usedPrefix}ytcomment
   │ ❖ ${usedPrefix}stupid
   │ ❖ ${usedPrefix}lolicon
   └─────────────┈ ⳹
   ┌─❖「 *Downloader Menu* 」
   │
   │ ❖ ${usedPrefix}song
   │ ❖ ${usedPrefix}play
   │ ❖ ${usedPrefix}apk
   │ ❖ ${usedPrefix}yts
   │ ❖ ${usedPrefix}insta *link*
   │ ❖ ${usedPrefix}img
   │ ❖ ${usedPrefix}pinterest 
   │ ❖ ${usedPrefix}mediafire *link*
   │ ❖ ${usedPrefix}gdrive *link*
   │ ❖ ${usedPrefix}gitclone *link*
   │ ❖ ${usedPrefix}twitter *link*
   │ ❖ ${usedPrefix}tiktok *link*
   │ ❖ ${usedPrefix}tiktokstalk
   │ ❖ ${usedPrefix}spotify 
   │ ❖ ${usedPrefix}fb *link*
   └─────────────┈ ⳹
   ┌─❖「 *Group Menu* 」
   │
   │ ❖ ${usedPrefix}kick *@tag*
   │ ❖ ${usedPrefix}promote *@tag*
   │ ❖ ${usedPrefix}demote *@tag*
   │ ❖ ${usedPrefix}infogroup
   │ ❖ ${usedPrefix}getbio *@tag*
   │ ❖ ${usedPrefix}resetlink
   │ ❖ ${usedPrefix}link
   │ ❖ ${usedPrefix}*On/Off* antilink
   │ ❖ ${usedPrefix}*On/Off* antidelete
   │ ❖ ${usedPrefix}invite
   │ ❖ ${usedPrefix}setppgc *image*
   │ ❖ ${usedPrefix}setname *text*
   │ ❖ ${usedPrefix}setdesc *text*
   │ ❖ ${usedPrefix}setwelcome *text*
   │ ❖ ${usedPrefix}setbye *text*
   │ ❖ ${usedPrefix}hidetag *text/image/audio*
   │ ❖ ${usedPrefix}warn *@tag*
   │ ❖ ${usedPrefix}unwarn *@tag*
   │ ❖ ${usedPrefix}listwarn
   │ ❖ ${usedPrefix}listnum
   │ ❖ ${usedPrefix}kicknum
   │ ❖ ${usedPrefix}group *Open/Close*
   │ ❖ ${usedPrefix}tagall
   └─────────────┈ ⳹
   ┌─❖「 *Economy Menu* 」
   │
   │ ❖ ${usedPrefix}claim/daily
   │ ❖ ${usedPrefix}weekly
   │ ❖ ${usedPrefix}monthly
   │ ❖ ${usedPrefix}leaderboard
   │ ❖ ${usedPrefix}bet
   │ ❖ ${usedPrefix}heal
   │ ❖ ${usedPrefix}craft
   │ ❖ ${usedPrefix}balance
   │ ❖ ${usedPrefix}shop
   │ ❖ ${usedPrefix}sell
   │ ❖ ${usedPrefix}adventure
   │ ❖ ${usedPrefix}opencreate
   │ ❖ ${usedPrefix}mine
   │ ❖ ${usedPrefix}work
   │ ❖ ${usedPrefix}transfer
   │ ❖ ${usedPrefix}todaimond
   │ ❖ ${usedPrefix}tomoney
   └─────────────┈ ⳹
   ┌─❖「 *Tool Menu* 」
   │
   │ ❖ ${usedPrefix}autosticker
   │ ❖ ${usedPrefix}pdf
   │ ❖ ${usedPrefix}whatmusic
   │ ❖ ${usedPrefix}tempmail
   │ ❖ ${usedPrefix}checkmail
   │ ❖ ${usedPrefix}pokedex
   │ ❖ ${usedPrefix}calc
   │ ❖ ${usedPrefix}google
   │ ❖ ${usedPrefix}lyrics
   │ ❖ ${usedPrefix}readmore
   │ ❖ ${usedPrefix}ssweb
   │ ❖ ${usedPrefix}tts
   │ ❖ ${usedPrefix}trt
   │ ❖ ${usedPrefix}wiki
   │ ❖ ${usedPrefix}nowa
   │ ❖ ${usedPrefix}qrmaker
   │ ❖ ${usedPrefix}true
   │ ❖ ${usedPrefix}fancy
   │ ❖ ${usedPrefix}weather
   │ ❖ ${usedPrefix}alexa
   │ ❖ ${usedPrefix}itunes
   │ ❖ ${usedPrefix}technews
   └─────────────┈ ⳹
   ┌─❖「 *Converter Menu* 」
   │
   │ ❖ ${usedPrefix}toanime
   │ ❖ ${usedPrefix}tomp3
   │ ❖ ${usedPrefix}toimg
   │ ❖ ${usedPrefix}tovid
   └─────────────┈ ⳹
   ┌─❖「 *Sticker Menu* 」
   │
   │ ❖ ${usedPrefix}sticker
   │ ❖ ${usedPrefix}take
   │ ❖ ${usedPrefix}smaker
   │ ❖ ${usedPrefix}getsticker
   │ ❖ ${usedPrefix}emix
   │ ❖ ${usedPrefix}attp
   └─────────────┈ ⳹
   ┌─❖「 *Game Menu* 」
   │
   │ ❖ ${usedPrefix}tictactoe
   │ ❖ ${usedPrefix}delttt
   │ ❖ ${usedPrefix}math
   │ ❖ ${usedPrefix}math answer
   │ ❖ ${usedPrefix}ppt
   │ ❖ ${usedPrefix}slot
   │ ❖ ${usedPrefix}casino
   └─────────────┈ ⳹
   ┌─❖「 *NSFW Menu* 」
   │
   │ ❖ ${usedPrefix}*On* nsfw
   │ ❖ ${usedPrefix}*Off* nsfw
   │ ❖ ${usedPrefix}hentais *text*
   │ ❖ ${usedPrefix}xnxxdl *link*
   └─────────────┈ ⳹
   ┌─❖「 *Anime Menu* 」
   │
   │ ❖ ${usedPrefix}waifu
   │ ❖ ${usedPrefix}neko
   │ ❖ ${usedPrefix}loli
   │ ❖ ${usedPrefix}naruto
   │ ❖ ${usedPrefix}itachi
   │ ❖ ${usedPrefix}akira
   │ ❖ ${usedPrefix}asuna
   │ ❖ ${usedPrefix}akiyama
   │ ❖ ${usedPrefix}boruto
   │ ❖ ${usedPrefix}hornycard
   │ ❖ ${usedPrefix}ayuzawa
   │ ❖ ${usedPrefix}anna
   │ ❖ ${usedPrefix}chiho
   │ ❖ ${usedPrefix}chitoge
   │ ❖ ${usedPrefix}deidara
   │ ❖ ${usedPrefix}erza
   │ ❖ ${usedPrefix}elaina
   │ ❖ ${usedPrefix}emilia
   │ ❖ ${usedPrefix}hestia
   │ ❖ ${usedPrefix}hinata
   │ ❖ ${usedPrefix}inori
   │ ❖ ${usedPrefix}isuzu
   │ ❖ ${usedPrefix}kagura
   │ ❖ ${usedPrefix}kaori
   │ ❖ ${usedPrefix}keneki
   │ ❖ ${usedPrefix}kurumi
   │ ❖ ${usedPrefix}madara
   │ ❖ ${usedPrefix}mikasa
   │ ❖ ${usedPrefix}miku
   │ ❖ ${usedPrefix}minato
   │ ❖ ${usedPrefix}nezuko
   │ ❖ ${usedPrefix}sagiri
   │ ❖ ${usedPrefix}sasuke
   │ ❖ ${usedPrefix}sakura
   │ ❖ ${usedPrefix}kotori
   └─────────────┈ ⳹
   ┌─❖「 *Audio Menu* 」
   │
   │ ❖ ${usedPrefix}bass
   │ ❖ ${usedPrefix}blown
   │ ❖ ${usedPrefix}deep
   │ ❖ ${usedPrefix}earrape
   │ ❖ ${usedPrefix}fat
   │ ❖ ${usedPrefix}fast
   │ ❖ ${usedPrefix}nightcore
   │ ❖ ${usedPrefix}reverse
   │ ❖ ${usedPrefix}squrrel
   │ ❖ ${usedPrefix}slow
   └─────────────┈ ⳹
   ┌─❖「 *Random Menu* 」
   │
   │ ❖ ${usedPrefix}cr7
   │ ❖ ${usedPrefix}cat
   │ ❖ ${usedPrefix}coffee
   │ ❖ ${usedPrefix}cartoon
   │ ❖ ${usedPrefix}cyberspace
   │ ❖ ${usedPrefix}couplepp
   │ ❖ ${usedPrefix}dog
   │ ❖ ${usedPrefix}doraemon
   │ ❖ ${usedPrefix}ff
   │ ❖ ${usedPrefix}hacker
   │ ❖ ${usedPrefix}messi
   │ ❖ ${usedPrefix}pubg
   │ ❖ ${usedPrefix}pentol
   │ ❖ ${usedPrefix}planet
   │ ❖ ${usedPrefix}tech
   │ ❖ ${usedPrefix}wpmountain
   │ ❖ ${usedPrefix}wpgaming
   │ ❖ ${usedPrefix}wprandom
   │ ❖ ${usedPrefix}aes
   │ ❖ ${usedPrefix}hehe
   │ ❖ ${usedPrefix}messi
   │ ❖ ${usedPrefix}ninja
   │ ❖ ${usedPrefix}blackpink
   │ ❖ ${usedPrefix}url
   │ ❖ ${usedPrefix}movie
   │ ❖ ${usedPrefix}Dalle
   │ ❖ ${usedPrefix}fws
   └─────────────┈ ⳹
  
`  
let ami = `┌─❤‍🩹
│「★✪ *E̾R̾I̾C̾-̾B̾O̾T̾* ✪★」
│
│     Made By
│             Ameen-Ser㋡ 
│         
└┬💖 「 *⚠️COMMING SOON* 」
   │
   │☞ *OWNER:* 𝐀𝐌𝐄𝐄𝐍 𝐒𝐄𝐑 乂
   │
   │☞ *BOT:* 𝐄𝐑𝐈𝐂-𝐌𝐃
   │
└─────────────┈ ⳹`
// ${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])}
conn.sendFile(m.chat, amee, 'perfil.jpg', lkr, m, false, { mentions: [who] })
conn.sendFile(m.chat, pp, 'perfil.jpg', ami, false, { mentions: [who] })
m.react('🕊️')
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['Command', 'help', 'menu'] 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}