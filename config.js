const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '94782543893';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363168396392052@g.us' ;
global.email = 'nowtyhashan44@gmail.com' ;
global.location = 'Matara' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Colombo'
global.gurl = 'https://wa.me/qr/P6WADRJOKAFUK1' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '94782543893'; ;
global.devs = "94782543893"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://wa.me/qr/P6WADRJOKAFUK1';
global.scan  = process.env.QR_URL || 'https://wa.me/qr/P6WADRJOKAFUK1';
global.website = 'https://wa.me/qr/P6WADRJOKAFUK1' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hTRnlWMWRoSUdBeno3WUxFNm4yNnB4U2lTZldmd2hyclFaNnRvZVgzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidCtwMDE1UVJhNm0xK3F5bVRYaXNzakI4U2Zma3Q0Q0pNeHlmWUZ0MXZHUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SnB2eG9nNFVFY054Q01QQTlEVTZqb0tVQU5MUEV1R085QndaY2RQbVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTUU3MFNGVnJTeC9WQlpIUU9iOFRxdWkxRFNTVmJXVlR3NU1LdlkzMzNJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJOHFUdC92aGZmTHFZMFdIeWNRV0RHSnJYSW1YNUpiYnBiY1dVTjY5R0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJFQ2xFVnkzNUtpNW5zeUUxVyt0eGFraW1jMUJrWHQ3dXpKQ21CU1R3Rkk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTEt2WWx0dG1zS1MxZVY4WndnOUVZYS9RWHlUcEhBYWtEMDRaTHFlWWlmMHIwWjl0L3QzNG1EZnlwK0hQOXJWUkhQUHlxQm5Oay9JajlBd0tJV3FoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2MCwiYWR2U2VjcmV0S2V5Ijoid2hsV2dFamNhVHI1blo0cDRjM2owMFZYblR5Z1JJNE5DNGJwSlA4eDZFRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU2kxRXV5LW9TRi1sRUtfVGZiOHlmdyIsInBob25lSWQiOiJhOTUxNzNkNi00NTQ2LTQ5ZjItOTMzYS0wMjE5NWJkYTNmMzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTAxWUJTeXZIQUZrRGFJcURGMFJhRG1HRE5nPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOFJRMUFCNzdZSTBrMVhvSWx5aWRZWExlVDg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOM0lwZXdDRUlpbndxa0dHQjA9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJZK09heU52OW9sU291YmtwWWpwT1dwNDRFS2tyRnNzS0hvVmIyR2VxR1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlGSjRuMEZWeDV0YVY2bWZ4WWNBWFpOZHVGQzRzMmsyUFJqZ3NNNTFzUjMzVVpqekFHMklCV1hEZ2ZpeUV1Q25vWGY5TVEzblRTM1FoQXVOWHR0akFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLalQ4NWxJVURYNTZnT1RoanV5bndRMWFOSDM0dHZVVEd4S3FMZG9CbFVnbXVLSUtwb3JTZUJ2cmwvSkNTdVU2QXhQWGIrUzdyN2FHV2ZXTkw1MzRoZz09In0sIm1lIjp7ImlkIjoiOTQ3ODI1NDM4OTM6NjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6oCNYeKDoPCdmLTwn4S38J2Vkm7MiiA6LSninaTvuI/wn5iMIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgyNTQzODkzOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFXUGptc2piL2FKVXFMbTVLV0k2VGxxZU9CQ3BLeGJMQ2g2Rlc5aG5xaG0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTc2ODIzMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlV0In0=",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'Hashan',
  botbgm: process.env.BOT_BGM || 'true',
  ownername:  process.env.OWNER_NAME || `Hashan`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊94782543893 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'cmd',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'hutt',
  alwaysonline: process.env.WAPRESENCE || 'unavailable', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "oxoumbpJ6BnNGfegYjGTEoUu",
  caption :process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hashan```",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'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' ,
  VERSION: process.env.VERSION || 'v.1.2.3',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'hashan',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
