const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitnMUhiS2VFNFVZbSs3ZzcrNlBkdzJlTVRjSVhmbFo1MHEyQTdqWldCNE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImYxZUFMdm9KUk42LWtIUm5MdGVicGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmZmZGI3Y2EtNzQ3My00NDI1LThjMmYtYmViYThhNjY0NjRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICA4NyxcbiAgICAgIDExNixcbiAgICAgIDQ3LFxuICAgICAgNTYsXG4gICAgICAyMDcsXG4gICAgICAxNjksXG4gICAgICAyMDAsXG4gICAgICAxMDksXG4gICAgICAyMTUsXG4gICAgICA4NCxcbiAgICAgIDIwMyxcbiAgICAgIDYzLFxuICAgICAgMTQ1LFxuICAgICAgMjM4LFxuICAgICAgMTIsXG4gICAgICAzOSxcbiAgICAgIDQyLFxuICAgICAgNzAsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDc0LFxuICAgICAgMTIwLFxuICAgICAgMjAzLFxuICAgICAgMjMxLFxuICAgICAgMTA3LFxuICAgICAgMTc2LFxuICAgICAgMTU3LFxuICAgICAgMTEsXG4gICAgICAxODgsXG4gICAgICAyMzEsXG4gICAgICA2OSxcbiAgICAgIDIyMSxcbiAgICAgIDIzMixcbiAgICAgIDEzMCxcbiAgICAgIDU4LFxuICAgICAgNjIsXG4gICAgICAxLFxuICAgICAgNCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpCWk1IUDFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTcwMTM2Mjc5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW2EubsmUaW50LsmbZCDJlMy5ybkgbsmUdCDJmC5uyZRpbnTJm2RdXCIsXG4gICAgXCJsaWRcIjogXCIzMzgxMDQwMjAyOTYwMjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYVh1L3NDRUt2THByUUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBUVjZDNjlRZjAwQWNhOTBhQ0ZIYzFIb2FhWHA2WUJhQUpWOVZOanIyMDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVU5RZHBaWGdGbm93TDJhU0VzcHBubDl4Wi9vQ2hkSXNRVGpBby9qd1pDNXNxdG5XMlZCeEZOeThjeGJ4am9tRytVZHM4cEk5STkvQXcwRzdlcHJjRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDBySlc3Wm1uRm9SUkFYdXRlaUZVWmd5T1hOVGtwSTJWaUxkVE4wSnorbGg1SFVqVVMzaWFlaE9sblVadVh2Z1N0V1BkNzBlcjFSYnAvdlFZTFBEQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE3MDEzNjI3OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI5Njg3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFEdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUR1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjhYMTk0L3JxUEJJdXFPYUVVTDBodCsyM2xMU1VydmpvdlpIN1MxRERCND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3OTU3OTAyOTQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
