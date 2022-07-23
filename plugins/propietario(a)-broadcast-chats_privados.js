import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*╭━━[ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀 ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [[' 𝙈𝙚𝙣𝙪', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '🅙🅗🅐🅟🅟🅨-🅑🅞🅣 | Hola',
body: 'Super Bot WhatsApp', 
sourceUrl: `Hola`, 
thumbnail: fs.readFileSync('./media/menus/jmenub2.jpg') }}})}
m.reply(`${iig} ✅ *El mensaje fue enviado a ${chats.length} Chats Privados*\n*Es posible que no se haya enviado a todos los Chats Privados. Disculpe.*\n\n✅ *The message was sent to ${chats.length} Private Chats*\n*May not have been sent to all Private Chats. Excuse me.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
