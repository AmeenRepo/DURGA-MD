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
│               Ameen-Ser${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])}
│         
└┬❖ 「 *Owner Menu* 」
   │
   │${pickRandom([️"${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])}", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*On/Off* public
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*On/Off* autoreact 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}update 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sudo
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}autoadmin
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}left
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}banchat
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}unbanchat
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ban
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}unban
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}banlist
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}block
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}unblock
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}blocklist
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}bc
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}bcgc
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}join
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}restart
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setpp
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setprefix
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}resetprefix
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}resetuser
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}getfile
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}getplugin 
   └─────────────┈ ⳹
   ┌─❖「 *Bot Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ping
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}uptime
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}enable
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}alive
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}owner
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}report
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}bot
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}worker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}runtime
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}infobot
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}donate
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}groups
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}blocklist
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}listprem
   └─────────────┈ ⳹
   ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
   ┌─❖「 *Fun Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}Love
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}moon
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}question 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}character 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}truth
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}dare 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}flirt
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}gay
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}meme
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ship
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kill
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kiss
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pat
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}slap
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}waste
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}simpcard
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hornycard
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ytcomment
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}stupid
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}lolicon
   └─────────────┈ ⳹
   ┌─❖「 *Downloader Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}song
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}play
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}apk
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}yts
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}insta *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}img
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pinterest 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}mediafire *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}gdrive *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}gitclone *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}twitter *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tiktok *link*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tiktokstalk
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}spotify 
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}fb *link*
   └─────────────┈ ⳹
   ┌─❖「 *Group Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kick *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}promote *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}demote *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}infogroup
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}getbio *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}resetlink
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}link
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*On/Off* antilink
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*On/Off* antidelete
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}invite
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setppgc *image*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setname *text*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setdesc *text*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setwelcome *text*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}setbye *text*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hidetag *text/image/audio*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}warn *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}unwarn *@tag*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}listwarn
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}listnum
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kicknum
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}group *Open/Close*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tagall
   └─────────────┈ ⳹
   ┌─❖「 *Economy Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}claim/daily
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}weekly
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}monthly
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}leaderboard
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}bet
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}heal
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}craft
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}balance
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}shop
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sell
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}adventure
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}opencreate
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}mine
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}work
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}transfer
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}todaimond
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tomoney
   └─────────────┈ ⳹
   ┌─❖「 *Tool Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}autosticker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pdf
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}whatmusic
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tempmail
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}checkmail
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pokedex
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}calc
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}google
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}lyrics
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}readmore
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ssweb
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tts
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}trt
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}wiki
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}nowa
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}qrmaker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}true
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}fancy
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}weather
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}alexa
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}itunes
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}technews
   └─────────────┈ ⳹
   ┌─❖「 *Converter Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}toanime
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tomp3
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}toimg
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tovid
   └─────────────┈ ⳹
   ┌─❖「 *Sticker Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sticker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}take
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}smaker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}getsticker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}emix
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}attp
   └─────────────┈ ⳹
   ┌─❖「 *Game Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tictactoe
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}delttt
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}math
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}math answer
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ppt
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}slot
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}casino
   └─────────────┈ ⳹
   ┌─❖「 *NSFW Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*On* nsfw
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}*Off* nsfw
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hentais *text*
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}xnxxdl *link*
   └─────────────┈ ⳹
   ┌─❖「 *Anime Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}waifu
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}neko
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}loli
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}naruto
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}itachi
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}akira
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}asuna
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}akiyama
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}boruto
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hornycard
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ayuzawa
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}anna
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}chiho
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}chitoge
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}deidara
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}erza
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}elaina
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}emilia
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hestia
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hinata
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}inori
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}isuzu
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kagura
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kaori
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}keneki
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kurumi
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}madara
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}mikasa
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}miku
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}minato
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}nezuko
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sagiri
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sasuke
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}sakura
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}kotori
   └─────────────┈ ⳹
   ┌─❖「 *Audio Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}bass
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}blown
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}deep
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}earrape
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}fat
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}fast
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}nightcore
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}reverse
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}squrrel
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}slow
   └─────────────┈ ⳹
   ┌─❖「 *Random Menu* 」
   │
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}cr7
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}cat
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}coffee
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}cartoon
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}cyberspace
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}couplepp
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}dog
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}doraemon
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ff
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hacker
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}messi
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pubg
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}pentol
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}planet
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}tech
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}wpmountain
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}wpgaming
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}wprandom
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}aes
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}hehe
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}messi
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}ninja
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}blackpink
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}url
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}movie
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}Dalle
   │${pickRandom([️"乂️", "❖", "㋡", "☞", "✑", "➣"⁩])} ${usedPrefix}fws
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