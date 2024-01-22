let handler = async function getMessage(key) {
    if (store) {
let m = await store.loadMessage(key.remoteJid, key.id);
        return m?.message;
    }
    return {
        conversation: "",
    };
}

vorterx.ev.on('messages.update', async chatUpdate => {
    for (let { key, update } of chatUpdate) {
        if (update.pollUpdates && key.fromMe) {
let pollCreation = await getMessage(key);
            if (pollCreation) {
let pollUpdate = await getAggregateVotesInPollMessage({
                    message: pollCreation,
                    pollUpdates: update.pollUpdates,
                });
                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name;
                if (toCmd == undefined) return;
                var prefCmd = prefix + toCmd;

                try {
                  
                    await vorterx.sendMessage(key.remoteJid, { delete: key });
                } catch (error) {
                    console.error("Error deleting message:", error);
                }

                vorterx.appendTextMessage(prefCmd, chatUpdate);
            }
        }
    }
});

vorterx.getPoll = (name = '', values = [], selectableCount = 1) => {
    return vorterx.sendMessage({ poll: { name, values, selectableCount }});
}

let tod = `
╭━──━─◈─━─━╮
│🔖 *Bot Name* : ${botname}
│🔖 *Owner Name* : ${ownername}
│🔖 *Owner Number* : ${owner}
│🔖 *Prefix* :「 . 」
│🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
│🔖 *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
│🔖 *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰━━─━─◈─━─━╯`;


conn.sendPoll(m.chat, tod, pollOptions);

handler.help = ['bot']
handler.tags = ['main']
handler.command = ['boti'] 

export default handler