import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*╭━[ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙑𝙄𝙋 | 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍𝙎 ]━⬣*\n*┃*\n` + prem.map(v => '*┃* ➥ 💎 @' + v.replace(/@.+/, ' 💎')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `𝙌𝙐𝙀 𝙋𝙍𝙊!! 🤡 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙂𝙍𝙀𝘼𝙏!! ✨`.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '🅙🅗🅐🅟🅟🅨-🅑🅞🅣 | 🤡',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/jmenub2.jpg"),
sourceUrl: `${yt}`}}})
   
await conn.sendHydrated(m.chat, null, wm, null, ig, 'Hola', null, null, [
['𝙏𝙤𝙥 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 | 𝙐𝙨𝙚𝙧𝙨 🏆', '.top'],
['🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡', '.juegosmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)
  
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
