let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
//let pp = `./AMEEN-SER/YOU/${pickRandom(["DURGA", "DURGA1", "NINJA", "AMEEN", "MEERA", "AMEEN1", "NINJA1", "MEERA1"])}.png`
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
│               Ameen-Ser乂️
│         
└┬❖ 「 *Owner Menu* 」
   │
   │乂️ ${usedPrefix}*On/Off* public
   │乂️ ${usedPrefix}*On/Off* autoreact 
   │乂️ ${usedPrefix}update 
   │乂️ ${usedPrefix}sudo
   │乂️ ${usedPrefix}autoadmin
   │乂️ ${usedPrefix}left
   │乂️ ${usedPrefix}banchat
   │乂️ ${usedPrefix}unbanchat
   │乂️ ${usedPrefix}ban
   │乂️ ${usedPrefix}unban
   │乂️ ${usedPrefix}banlist
   │乂️ ${usedPrefix}block
   │乂️ ${usedPrefix}unblock
   │乂️ ${usedPrefix}blocklist
   │乂️ ${usedPrefix}bc
   │乂️ ${usedPrefix}bcgc
   │乂️ ${usedPrefix}join
   │乂️ ${usedPrefix}restart
   │乂️ ${usedPrefix}setpp
   │乂️ ${usedPrefix}setprefix
   │乂️ ${usedPrefix}resetprefix
   │乂️ ${usedPrefix}resetuser
   │乂️ ${usedPrefix}getfile
   │乂️ ${usedPrefix}getplugin 
   └─────────────┈ ⳹
   ┌─❖「 *Bot Menu* 」
   │
   │乂️ ${usedPrefix}ping
   │乂️ ${usedPrefix}uptime
   │乂️ ${usedPrefix}enable
   │乂️ ${usedPrefix}alive
   │乂️ ${usedPrefix}owner
   │乂️ ${usedPrefix}report
   │乂️ ${usedPrefix}bot
   │乂️ ${usedPrefix}worker
   │乂️ ${usedPrefix}runtime
   │乂️ ${usedPrefix}infobot
   │乂️ ${usedPrefix}donate
   │乂️ ${usedPrefix}groups
   │乂️ ${usedPrefix}blocklist
   │乂️ ${usedPrefix}listprem
   └─────────────┈ ⳹
   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
   ┌─❖「 *Fun Menu* 」
   │
   │乂️ ${usedPrefix}Love
   │乂️ ${usedPrefix}moon
   │乂️ ${usedPrefix}question 
   │乂️ ${usedPrefix}character 
   │乂️ ${usedPrefix}truth
   │乂️ ${usedPrefix}dare 
   │乂️ ${usedPrefix}flirt
   │乂️ ${usedPrefix}gay
   │乂️ ${usedPrefix}meme
   │乂️ ${usedPrefix}ship
   │乂️ ${usedPrefix}kill
   │乂️ ${usedPrefix}kiss
   │乂️ ${usedPrefix}pat
   │乂️ ${usedPrefix}slap
   │乂️ ${usedPrefix}waste
   │乂️ ${usedPrefix}simpcard
   │乂️ ${usedPrefix}hornycard
   │乂️ ${usedPrefix}ytcomment
   │乂️ ${usedPrefix}stupid
   │乂️ ${usedPrefix}lolicon
   └─────────────┈ ⳹
   ┌─❖「 *Downloader Menu* 」
   │
   │乂️ ${usedPrefix}song
   │乂️ ${usedPrefix}play
   │乂️ ${usedPrefix}apk
   │乂️ ${usedPrefix}yts
   │乂️ ${usedPrefix}insta *link*
   │乂️ ${usedPrefix}img
   │乂️ ${usedPrefix}pinterest 
   │乂️ ${usedPrefix}mediafire *link*
   │乂️ ${usedPrefix}gdrive *link*
   │乂️ ${usedPrefix}gitclone *link*
   │乂️ ${usedPrefix}twitter *link*
   │乂️ ${usedPrefix}tiktok *link*
   │乂️ ${usedPrefix}tiktokstalk
   │乂️ ${usedPrefix}spotify 
   │乂️ ${usedPrefix}fb *link*
   └─────────────┈ ⳹
   ┌─❖「 *Group Menu* 」
   │
   │乂️ ${usedPrefix}kick *@tag*
   │乂️ ${usedPrefix}promote *@tag*
   │乂️ ${usedPrefix}demote *@tag*
   │乂️ ${usedPrefix}infogroup
   │乂️ ${usedPrefix}getbio *@tag*
   │乂️ ${usedPrefix}resetlink
   │乂️ ${usedPrefix}link
   │乂️ ${usedPrefix}*On/Off* antilink
   │乂️ ${usedPrefix}*On/Off* antidelete
   │乂️ ${usedPrefix}invite
   │乂️ ${usedPrefix}setppgc *image*
   │乂️ ${usedPrefix}setname *text*
   │乂️ ${usedPrefix}setdesc *text*
   │乂️ ${usedPrefix}setwelcome *text*
   │乂️ ${usedPrefix}setbye *text*
   │乂️ ${usedPrefix}hidetag *text/image/audio*
   │乂️ ${usedPrefix}warn *@tag*
   │乂️ ${usedPrefix}unwarn *@tag*
   │乂️ ${usedPrefix}listwarn
   │乂️ ${usedPrefix}listnum
   │乂️ ${usedPrefix}kicknum
   │乂️ ${usedPrefix}group *Open/Close*
   │乂️ ${usedPrefix}tagall
   └─────────────┈ ⳹
   ┌─❖「 *Economy Menu* 」
   │
   │乂️ ${usedPrefix}claim/daily
   │乂️ ${usedPrefix}weekly
   │乂️ ${usedPrefix}monthly
   │乂️ ${usedPrefix}leaderboard
   │乂️ ${usedPrefix}bet
   │乂️ ${usedPrefix}heal
   │乂️ ${usedPrefix}craft
   │乂️ ${usedPrefix}balance
   │乂️ ${usedPrefix}shop
   │乂️ ${usedPrefix}sell
   │乂️ ${usedPrefix}adventure
   │乂️ ${usedPrefix}opencreate
   │乂️ ${usedPrefix}mine
   │乂️ ${usedPrefix}work
   │乂️ ${usedPrefix}transfer
   │乂️ ${usedPrefix}todaimond
   │乂️ ${usedPrefix}tomoney
   └─────────────┈ ⳹
   ┌─❖「 *Tool Menu* 」
   │
   │乂️ ${usedPrefix}autosticker
   │乂️ ${usedPrefix}pdf
   │乂️ ${usedPrefix}whatmusic
   │乂️ ${usedPrefix}tempmail
   │乂️ ${usedPrefix}checkmail
   │乂️ ${usedPrefix}pokedex
   │乂️ ${usedPrefix}calc
   │乂️ ${usedPrefix}google
   │乂️ ${usedPrefix}lyrics
   │乂️ ${usedPrefix}readmore
   │乂️ ${usedPrefix}ssweb
   │乂️ ${usedPrefix}tts
   │乂️ ${usedPrefix}trt
   │乂️ ${usedPrefix}wiki
   │乂️ ${usedPrefix}nowa
   │乂️ ${usedPrefix}qrmaker
   │乂️ ${usedPrefix}true
   │乂️ ${usedPrefix}fancy
   │乂️ ${usedPrefix}weather
   │乂️ ${usedPrefix}alexa
   │乂️ ${usedPrefix}itunes
   │乂️ ${usedPrefix}technews
   └─────────────┈ ⳹
   ┌─❖「 *Converter Menu* 」
   │
   │乂️ ${usedPrefix}toanime
   │乂️ ${usedPrefix}tomp3
   │乂️ ${usedPrefix}toimg
   │乂️ ${usedPrefix}tovid
   └─────────────┈ ⳹
   ┌─❖「 *Sticker Menu* 」
   │
   │乂️ ${usedPrefix}sticker
   │乂️ ${usedPrefix}take
   │乂️ ${usedPrefix}smaker
   │乂️ ${usedPrefix}getsticker
   │乂️ ${usedPrefix}emix
   │乂️ ${usedPrefix}attp
   └─────────────┈ ⳹
   ┌─❖「 *Game Menu* 」
   │
   │乂️ ${usedPrefix}tictactoe
   │乂️ ${usedPrefix}delttt
   │乂️ ${usedPrefix}math
   │乂️ ${usedPrefix}math answer
   │乂️ ${usedPrefix}ppt
   │乂️ ${usedPrefix}slot
   │乂️ ${usedPrefix}casino
   └─────────────┈ ⳹
   ┌─❖「 *NSFW Menu* 」
   │
   │乂️ ${usedPrefix}*On* nsfw
   │乂️ ${usedPrefix}*Off* nsfw
   │乂️ ${usedPrefix}hentais *text*
   │乂️ ${usedPrefix}xnxxdl *link*
   └─────────────┈ ⳹
   ┌─❖「 *Anime Menu* 」
   │
   │乂️ ${usedPrefix}waifu
   │乂️ ${usedPrefix}neko
   │乂️ ${usedPrefix}loli
   │乂️ ${usedPrefix}naruto
   │乂️ ${usedPrefix}itachi
   │乂️ ${usedPrefix}akira
   │乂️ ${usedPrefix}asuna
   │乂️ ${usedPrefix}akiyama
   │乂️ ${usedPrefix}boruto
   │乂️ ${usedPrefix}hornycard
   │乂️ ${usedPrefix}ayuzawa
   │乂️ ${usedPrefix}anna
   │乂️ ${usedPrefix}chiho
   │乂️ ${usedPrefix}chitoge
   │乂️ ${usedPrefix}deidara
   │乂️ ${usedPrefix}erza
   │乂️ ${usedPrefix}elaina
   │乂️ ${usedPrefix}emilia
   │乂️ ${usedPrefix}hestia
   │乂️ ${usedPrefix}hinata
   │乂️ ${usedPrefix}inori
   │乂️ ${usedPrefix}isuzu
   │乂️ ${usedPrefix}kagura
   │乂️ ${usedPrefix}kaori
   │乂️ ${usedPrefix}keneki
   │乂️ ${usedPrefix}kurumi
   │乂️ ${usedPrefix}madara
   │乂️ ${usedPrefix}mikasa
   │乂️ ${usedPrefix}miku
   │乂️ ${usedPrefix}minato
   │乂️ ${usedPrefix}nezuko
   │乂️ ${usedPrefix}sagiri
   │乂️ ${usedPrefix}sasuke
   │乂️ ${usedPrefix}sakura
   │乂️ ${usedPrefix}kotori
   └─────────────┈ ⳹
   ┌─❖「 *Audio Menu* 」
   │
   │乂️ ${usedPrefix}bass
   │乂️ ${usedPrefix}blown
   │乂️ ${usedPrefix}deep
   │乂️ ${usedPrefix}earrape
   │乂️ ${usedPrefix}fat
   │乂️ ${usedPrefix}fast
   │乂️ ${usedPrefix}nightcore
   │乂️ ${usedPrefix}reverse
   │乂️ ${usedPrefix}squrrel
   │乂️ ${usedPrefix}slow
   └─────────────┈ ⳹
   ┌─❖「 *Random Menu* 」
   │
   │乂️ ${usedPrefix}cr7
   │乂️ ${usedPrefix}cat
   │乂️ ${usedPrefix}coffee
   │乂️ ${usedPrefix}cartoon
   │乂️ ${usedPrefix}cyberspace
   │乂️ ${usedPrefix}couplepp
   │乂️ ${usedPrefix}dog
   │乂️ ${usedPrefix}doraemon
   │乂️ ${usedPrefix}ff
   │乂️ ${usedPrefix}hacker
   │乂️ ${usedPrefix}messi
   │乂️ ${usedPrefix}pubg
   │乂️ ${usedPrefix}pentol
   │乂️ ${usedPrefix}planet
   │乂️ ${usedPrefix}tech
   │乂️ ${usedPrefix}wpmountain
   │乂️ ${usedPrefix}wpgaming
   │乂️ ${usedPrefix}wprandom
   │乂️ ${usedPrefix}aes
   │乂️ ${usedPrefix}hehe
   │乂️ ${usedPrefix}messi
   │乂️ ${usedPrefix}ninja
   │乂️ ${usedPrefix}blackpink
   │乂️ ${usedPrefix}url
   │乂️ ${usedPrefix}movie
   │乂️ ${usedPrefix}Dalle
   │乂️ ${usedPrefix}fws
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

conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
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