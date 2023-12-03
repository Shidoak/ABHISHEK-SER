let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}ping_
│ _${usedPrefix}bot_
╰─────────────⦁

╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}ban_
│ _${usedPrefix}owner_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}restart_
╰─────────────⦁
${readMore} 
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}warn *@tag*_
│ _${usedPrefix}unwarn *@tag*_
│ _${usedPrefix}listwarn_
╰─────────────⦁

╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}hearts_
╰─────────────⦁

╭───❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}toanime_
╰─────────────⦁

╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}trt_
╰─────────────⦁

╭───❮  *🎯SM BOT* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   SAMRAJYAM☘️
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
