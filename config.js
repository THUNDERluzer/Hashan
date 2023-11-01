const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '94782543893';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://hashan:2002@cluster0.si1ga4x.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363168396392052@g.us' ;
global.email = 'nowtyhashan44@gmail.com' ;
global.location = 'Matara' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://wa.me/qr/P6WADRJOKAFUK1' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '94782543893'; ;
global.devs = "94782543893"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://wa.me/qr/P6WADRJOKAFUK1';
global.scan  = process.env.QR_URL || 'https://wa.me/qr/P6WADRJOKAFUK1';
global.website = 'https://wa.me/qr/P6WADRJOKAFUK1' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "Secktor;;;SargeSquished",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'Hashan',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `Hashan`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊94782543893 𓃮 \n\ncontact me...\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'cmd',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'hutt',
  alwaysonline: process.env.WAPRESENCE || 'unavailable', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'false',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 5,
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
  VERSION: process.env.VERSION || 'v.1.2.2',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'HASHAN',
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
 
