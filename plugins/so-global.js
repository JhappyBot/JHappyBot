/*import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
    if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
    global.db.data.users[m.sender].money += 50 
    global.db.data.users[m.sender].exp += 50
 

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/(A Bueno master|Bueno master|Bueno Máster|)/gi.test(m.text) && chat.audios) {
let vn = './media/A bueno adios master.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (chat.audios && m.text.match(/(abduzcan|Abduzcan|adbuzcan|Adbuzcan)/gi)) {
let vn = './media/abduzcan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Adios|bye|chao)/gi)) {    
let vn = './media/adios.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(TENGO LOS CALZONES|Tengo los calzones|tengo los calzones)/gi)) {    
let vn = './media/admin-calzones.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(baneado|Baneado)/gi)) {    
let vn = './media/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(Cada|Basado|Basada|Basadisimo|BASADO|basado|basada|Que basado|Que basada|que basado)/gi)) {    
let vn = './media/basado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (chat.audios && m.text.match(/(Bien pensado woody|bien pensado woody|Bien pensado|bien pensado|Bien pensado wudy|bien pensado wudy|Bien pensado Woody|bien pensado Woody|Bien pensado woodi|bien pensado woodi)/gi)) {    
let vn = './media/bien-pensado-woody.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (chat.audios && m.text.match(/(bienvenido|bienvenida)|/gi)) {    
let vn = './media/Bienvenido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Blackpink in your area|blackpink in your area|in your area|In your area)/gi)) {    
let vn = './media/Blackpink in your area.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Buen día grupo|Buen dia grupo|🙌)/gi)) {    
let vn = './media/Buen día grupo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Bueno si|bueno si|bueno sí|Bueno sí)/gi)) {    
let vn = './media/bueno si.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Corte Corte)/gi)) {    
let vn = './media/Corte Corte.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(El Toxico|El tóxico)/gi)) {    
let vn = './media/El Toxico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(hablar primos|Hablar primos)/gi)) {    
let vn = './media/hablar primos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Elmo sabe donde vives|Elmo sabe dónde vives)/gi)) {    
let vn = './media/Elmo sabe donde vives.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(En caso de una investigación|En caso de una investigacion)/gi)) {    
let vn = './media/En caso de una investigación.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Enojado|ENOJADO|enojado|Molesto|Enojada|ENOJADA|enojada|Molesta)/gi)) {    
let vn = './media/asen.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(ENTRADA|entrada|Entrada|Entra|ENTRA|Entra|Ingresa|ingresa|INGRESA|ingresar|INGRESAR|Ingresar)/gi)) {    
let vn = './media/entrada-epica-al-chat.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Eres Fuerte)/gi)) {    
let vn = './media/Eres Fuerte.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Zzzz|zzz|😴)/gi)) {    
let vn = './media/Esta Zzzz.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Esto va ser épico papus|esto va ser épico papus|Esto va ser|Esto va a hacer|esto va acer|Esto va aser|esto va ser|esto va a hacer)/gi)) {    
let vn = './media/esto va a hacer epico papus.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Esto va para ti|esto va para ti)/gi)) {    
let vn = './media/esto va para ti.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Fino señores|fino señores|Fino senores|fino senores|Fino)/gi)) {    
let vn = './media/fino-senores.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Me voy|me voy|ME VOY|Me fui|me fui|ME FUI|Se fue|se fue|SE FUE|Adios|adios|ADIOS|Chao|chao|CHAO)/gi)) {    
let vn = './media/flash.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Hey|Hei|hey|HEY)/gi)) {    
let vn = './media/jai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Homero chino|homero chino|Omero chino|omero chino|Homero Chino)/gi)) {    
let vn = './media/Homero chino.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Jesucristo|jesucristo|Jesús|jesús|Auronplay|Auron|Dios)/gi)) {    
let vn = './media/jesucristo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Joder|joder)/gi)) {    
let vn = './media/joder.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(La voz de hombre|la voz de hombre|La voz del hombre|la voz del hombre|La voz|la voz)/gi)) {    
let vn = './media/la-voz-de-hombre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Las reglas del grupo)/gi)) {    
let vn = './media/Las reglas del grupo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(MA MA MASIVO|ma ma masivo|Ma ma masivo|Bv|BV|bv|masivo|Masivo|MASIVO)/gi)) {    
let vn = './media/masivo-cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Me anda buscando anonymous|me anda buscando anonymous|Me está buscando anonymous|me está buscando anonymous|Me está buscando anonimo|Me esta buscando anonimo|anonimus|anónimo)/gi)) {    
let vn = './media/Me anda buscando anonymous.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Mentiroso|mentira|mentirosa|mentiroso|Mentira)/gi)) {    
let vn = './media/mentira.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(mmm|Mmm|MmM)/gi)) {    
let vn = './media/mmm.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Momento equisde|momento equisde|Momento xd|Momento XD)/gi)) {    
let vn = './media/Momento equisde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Moshi moshi|Shinobu)/gi)) {    
let vn = './media/UwU.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Motivacion|Motivación)/gi)) {    
let vn = './media/Motivacion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Muchachos)/gi)) {    
let vn = './media/Muchachos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(nadie te pregunto|Nadie te pregunto|Nadie te preguntó|nadie te preguntó)/gi)) {    
let vn = './media/nadie te pregunto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(No chupa la|No chupala|no chupala|No chu|no chu|No, chupala|No, chupa la)/gi)) {    
let vn = './media/no chu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Parchís rata|parchís rata|Parchis es rata|parchís es rata|parchis es rata|parchis rata|rata parchis)/gi)) {    
let vn = './media/policia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Pero esto|pero esto|Pero esto ya es otro nivel|pero esto ya es otro nivel|Otro nivel|otro nivel)/gi)) {    
let vn = './media/pero-esto-ya-es-otro-nivel.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(No me hables|no me hables)/gi)) {    
let vn = './media/no me hables.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(OMAIGA|OMG|omg|omaiga|Omg|Omaiga|OMAIGA)/gi)) {    
let vn = './media/omaiga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(orale|Orale)/gi)) {    
let vn = './media/orale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto)/gi)) {    
let vn = './media/Murio.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(Cagaste|Miedo|miedo|Pvp|PVP|temor|que pasa|Que sucede|Que pasa|que sucede|Qué pasa|Qué sucede|Dime|dime)/gi)) {    
let vn = './media/suspenso.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(tal vez)/gi)) {    
let vn = './media/Tal vez.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
/* 
if (chat.audios && m.text.match(/(Muchachos)/gi)) {    
let vn = './media/Muchachos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Muchachos)/gi)) {    
let vn = './media/Muchachos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
     
if (chat.audios && m.text.match(/(Muchachos)/gi)) {    
let vn = './media/Muchachos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    

return !0 }
export default handler
*/
