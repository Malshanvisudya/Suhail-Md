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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94717120796";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_18_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkZnlsVEVkbnRtWERoVUp3U2lhcWR0REIvZzhDbzRJMGFQeEtWSytmU3I4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY4MDE2NTAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMzQ1RTk4Q0NCQTJEM0ZFQ0E2OUJDMUNFOTRBOERFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMDQzMDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2ODAxNjUwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUZCNUY5Rjc0RTE1RDBFQkZERDhFNkJBNjgyQTIyOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjA0MzAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjgwMTY1MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVCRUZDOUMyREUzRUQxQTRDNUNBN0FGN0VGRjkyRkM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIwNDMwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY4MDE2NTAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQURGQjFCM0IwOEVDMEE3RDFCMkZCRjc1REQ4QUY2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMDQzMDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVFPUElucTNSOXktb0lVdnlZeDNId1wiLFxuICBcInBob25lSWRcIjogXCIzOWJkMGMyZC02MjRmLTQ3OTAtYWZkNi1iMWE4ZWJiYjJmNjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjM3LFxuICAgICAgNjUsXG4gICAgICAxMzYsXG4gICAgICAyMzYsXG4gICAgICAxODEsXG4gICAgICAyNCxcbiAgICAgIDE4MixcbiAgICAgIDk1LFxuICAgICAgMTEwLFxuICAgICAgMzMsXG4gICAgICAxMDIsXG4gICAgICAyMzgsXG4gICAgICAxNDEsXG4gICAgICAyMzcsXG4gICAgICAxOTAsXG4gICAgICAxMDEsXG4gICAgICA2NCxcbiAgICAgIDIyNSxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAyMjAsXG4gICAgICAxNjIsXG4gICAgICAxMjYsXG4gICAgICAyMjQsXG4gICAgICA1OSxcbiAgICAgIDIxNyxcbiAgICAgIDcxLFxuICAgICAgMSxcbiAgICAgIDE1NSxcbiAgICAgIDgsXG4gICAgICA0LFxuICAgICAgMTYwLFxuICAgICAgMTgzLFxuICAgICAgMjUyLFxuICAgICAgMjA3LFxuICAgICAgNDUsXG4gICAgICA3MSxcbiAgICAgIDEzNixcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKS0pNREhES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjgwMTY1MDI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE3Mzc1Njc3NjQ1MDoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkx1Y2lmZXIg8J+Rv1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w2amtha0dFTW44M2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1lhakZ4bFVUbUNSN0VQdXMwOEdHa2F3QXQ3RVQrcWswZmd3NWlDdTVBdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5dlZhYnJDaHI0VlBMWHpzK29sUlhVMVM2bkpQSWNJUkpsaVBCRjMwWnVQdC9vTmFzTFJOTkZhREV4NUR5dW96SHdxNGJuTU12TmQ2ZWUwTVpnMkVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEYlVIU1o4MENGdzlONllPT1VCK1FzdkxPeFBLb3U1WE1QMmtyMjhqOWtWb3B3K1hBbk0rZjBnZ1YyNXd3NlZrelRET0J3QURUelV2dlRBZUcwdXlDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2ODAxNjUwMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIwNDMwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5hdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmF1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNU4ycjhQTWlNZHFmSi9qUlhWSGYwa0RuVUUzdjVUYXg0VkQzZ1hSeUFIZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk2ODc5MDM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMDIxODQ2MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
