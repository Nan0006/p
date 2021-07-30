/*[===============> 🌟 CONEXÃO DE ARQUIVOS 🌟 <==================================================================================================================================================================================]*/
const {
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
    Browser
} = require('@adiwajshing/baileys');
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const cd = 4.32e+7
/*[===============> 🌟 CONEXÃO DE PASTAS 🌟 <==================================================================================================================================================================================]*/
const { ind } = require('./language')
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
/*[===============> 🌟 CONEXÃO DE PASTAS PERSONALIZAVEIS 🌟 <==================================================================================================================================================================================]*/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime } = require('./lib/register.js')
const { webp2gifFile } = require("./lib/gif.js")
const { donasi } = require('./lib/donasi')
const { aventurar } = require('./lib/aventurar')
const { brincadeiras } = require('./lib/brincadeiras')
const { jogos } = require('./lib/jogos')
const { velha } = require('./lib/velha')
const { figurinhas } = require('./lib/figurinhas')
const { picture } = require('./lib/picture')
const { transferencia } = require('./lib/transferencia')
const { download } = require('./lib/download')
const { comandos } = require('./lib/comandos')
const { administração } = require('./lib/administração')
const { donobot } = require('./lib/donobot')
/*[===============> 🌟 CONEXÃO DE PASTAS JOGO DA VELHA 🌟 <==================================================================================================================================================================================]*/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
/*[===============> 🌟 CONEXÃO DE PASTAS QUE DA TEMPO LIMITE 🌟 <==================================================================================================================================================================================]*/
const { addLimit, getLimit } = require('./lib/limit.js')

/*[===============> ☃️ CARREGAR CONFIGURAÇOE ☃️ <==================================================================================================================================================================================]*/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	limitawal,
	memberlimit,
	healawal,
	potionawal,
	cr,
	BotPrefix,
	owner,
	author,
	pack
} = settingan

/*[===============> 🍜 MANUAL DONO 🍜 <==================================================================================================================================================================================]*/
const ownerNumber = `${owner}@s.whatsapp.net`
prefix = BotPrefix
blocked = []  

/*[===============> 🪐 TEMPO 🪐 <==================================================================================================================================================================================]*/
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { cdd, opy, apy, crtt, upy, hrs, asi, ahoo } = infos

/*[===============> 🐼 JOGO DA VELHA 🐼 <==================================================================================================================================================================================]*/   
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

/*[===============> 🎮 CARREGAR FUNÇOES LEVELING LEVEL, XP, ID 🎮 <==================================================================================================================================================================================]*/
/*[===============> 🎮 LEVELING, LEVEL, XP, ID, EM OUTRA PASTA 🎮 <==================================================================================================================================================================================]*/
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

/*[===============> 🏵 REGISTRO 🏵 <=======================================================================================================================]*/
const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

/*[===============> 🎯 CREDITOS ( LIMIT) 🎯 <===========================================================================================================================]*/
const bayarLimit = (userid, amount) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const limitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const l50imitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 50
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const l500imitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 500
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const l100imitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 100
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const l300imitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 300
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

const l10imitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 10
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
    }
}

/*[===============> 💰 DINHEIRO 💰 <===========================================================================================================================]*/
const addATM = (userid) => {
	const obj = {id: userid, uang : 0}
    uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}

const addKoinUser = (userid, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

const checkATMuser = (userid) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}

const confirmATM = (userid, amount) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
    }
}

/*[===============> 🤩 CONTADOR 🤩 <======================================================================================================================]*/
const addNON = (sender) => {
    const obj2 = {id: sender, contador : 0}
    contador.push(obj2)
    fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador))
}

const addContUser = (sender, amount) => {
    let position = false
    Object.keys(contador).forEach((i) => {
        if (contador[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        contador[position].contador += amount
        fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador))
    }
}

const checkNONuser = (sender) => {
    let position = false
    Object.keys(contador).forEach((i) => {
        if (contador[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return contador[position].contador
    }
}

const confirmNON = (sender, amount) => {
    let position = false
    Object.keys(contador).forEach((i) => {
        if (contador[i].id === contador) {
            position = i
            }
    })
    if (position !== false) {
        contador[position].contador -= amount
        fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador))
    }
}

/*[===============> 👑 RANK 👑 <=====================================================================================================================================]*/
const addNAN = (sender) => {
    const obj1 = {id: sender, rank : 0}
    rank.push(obj1)
    fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
}

const addPontUser = (sender, amount) => {
    let position = false
    Object.keys(rank).forEach((i) => {
        if (rank[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        rank[position].rank += amount
        fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
    }
}

const checkNANuser = (sender) => {
    let position = false
    Object.keys(rank).forEach((i) => {
        if (rank[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return rank[position].rank
    }
}

const confirmNAN = (sender, amount) => {
    let position = false
    Object.keys(rank).forEach((i) => {
        if (rank[i].id === sender) {
            position = i
            }
    })
    if (position !== false) {
        rank[position].rank -= amount
        fs.writeFileSync('./database/user/rank.json', JSON.stringify(rank))
    }
}

/*[===============> 👩🏻‍✈️ AVENTURA 👩🏻‍✈️ <=====================================================================================================================================]*/
const addAVE = (sender) => {
    const obj1 = {id: sender, ventura : 0}
    ventura.push(obj1)
    fs.writeFileSync('./database/user/ventura.json', JSON.stringify(ventura))
}

const addViveUser = (sender, amount) => {
    let position = false
    Object.keys(ventura).forEach((i) => {
        if (ventura[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        ventura[position].ventura += amount
        fs.writeFileSync('./database/user/ventura.json', JSON.stringify(ventura))
    }
}

const checkAVEuser = (sender) => {
    let position = false
    Object.keys(ventura).forEach((i) => {
        if (ventura[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return ventura[position].ventura
    }
}

const confirmAVE = (sender, amount) => {
    let position = false
    Object.keys(ventura).forEach((i) => {
        if (ventura[i].id === sender) {
            position = i
            }
    })
    if (position !== false) {
        ventura[position].ventura -= amount
        fs.writeFileSync('./database/user/ventura.json', JSON.stringify(ventura))
    }
}

/*[===============> ⛩ CRIME ⛩ <=====================================================================================================================================]*/
const addHIT = (sender) => {
    const obj1 = {id: sender, crime : 0}
    crime.push(obj1)
    fs.writeFileSync('./database/user/crime.json', JSON.stringify(crime))
}

const addKillUser = (sender, amount) => {
    let position = false
    Object.keys(crime).forEach((i) => {
        if (crime[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        crime[position].crime += amount
        fs.writeFileSync('./database/user/crime.json', JSON.stringify(crime))
    }
}

const checkHITuser = (sender) => {
    let position = false
    Object.keys(crime).forEach((i) => {
        if (crime[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return crime[position].crime
    }
}

const confirmHIT = (sender, amount) => {
    let position = false
    Object.keys(crime).forEach((i) => {
        if (crime[i].id === sender) {
            position = i
            }
    })
    if (position !== false) {
        crime[position].crime -= amount
        fs.writeFileSync('./database/user/crime.json', JSON.stringify(crime))
    }
}
		
/*[===============> 🎆 AFK 🎆 <=============================================================================================================================]*/
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition,
    afkDel
} = require('./lib/afk.js')

/*[===============> 🌠 TOTAL CMD 🌠 <=======================================================================================================================]*/
const {
	cmdadd
} = require('./lib/totalcmd.js')
	
/*[===============> ⚓️ VCARD ⚓️ <===============================================================================================================================]*/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:ADMIN NANDO\n' 
            + `ORG: Universo Otaku BOT;\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${PhoneNumber('+' + owner).getNumber('international')}\n` 
            + 'END:VCARD' 

       
/*[===============> ⌛️ CARREGAR ARQUIVOS ⌛️ <================================================================================================================]*/
/*[----- ⏳ VIDEO AUDIO IMAGEM FIGURINHAS ⏳ -----]*/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
/*[----- ⏳ LEVELING LEVEL ⏳ -----]*/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
/*[----- ⏳ VIDEO AUDIO IMAGEM FIGURINHAS ⏳ -----]*/
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
/*[----- ⏳ BEM VINDO ⏳ -----]*/
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
/*[----- ⏳ SISTEMA DE CONTENÇÃO DE CRIMES ⏳ -----]*/
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
/*[----- ⏳ EVENTO DE UP ⏳ -----]*/
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
/*[----- ⏳ CREDITOS (LIMIT) DINHEIRO (UANG) CONTADOR RANK CRIME ⏳ -----]*/
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const contador = JSON.parse(fs.readFileSync('./database/user/contador.json'))
const rank = JSON.parse(fs.readFileSync('./database/user/rank.json'))
const crime = JSON.parse(fs.readFileSync('./database/user/crime.json'))
/*[----- ⏳ ANTI LINK ⏳  -----]*/
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*[----- ⏳ ANTI GHOST ⏳  -----]*/
const antighost = JSON.parse(fs.readFileSync('./database/group/antighost.json'))
/*[----- ⏳ PROIBIÇÃO DE PALAVRAS ⏳ -----]*/
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*[----- ⏳ SISTEMA DE BANIMENTOS DO BOT ⏳ -----]*/
const ban = JSON.parse(fs.readFileSync('./database/user/ban.json'))
/*[----- ⏳ ARQUIVOS DE TEMPO LIMITE PARA COMANDOS ⏳ -----]*/
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const deily = JSON.parse(fs.readFileSync('./data/dory.json'))
const doily = JSON.parse(fs.readFileSync('./data/dury.json'))
const dily = JSON.parse(fs.readFileSync('./data/diry.json'))
const deely = JSON.parse(fs.readFileSync('./data/deery.json'))
const daoly = JSON.parse(fs.readFileSync('./data/doory.json'))
/*[----- ⏳ SISTEMA DE AVENTURA ⏳ -----]*/
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
const ventura = JSON.parse(fs.readFileSync('./database/user/ventura.json'))

/*[===============> 🧸 FUNÇÃO HORAS TIME 🧸 <======================================================================================================================]*/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
	

/*[===============> 🏮 UPDATE MENSAGEM 🏮 <============================================================================================================]*/
module.exports = msgHdlr = async (client , mek) => {
/*[===============> 🏮 UPDATE BLOCK 🏮 <===============================================================================================================]*/
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
/*[===============> 🏮 ARQUIVOS 🏮 <===============================================================================================================]*/	
		try {
             if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*[===============> 📯 COMANDOS 📯 <==========================================================================================================]*/
/*[----- ⏳ EVENTO UP ⏳  -----]*/
            const isEventon = isGroup ? event.includes(from) : false
/*[----- ⏳ REGISTRO ⏳  -----]*/
            const isRegistered = checkRegisteredUser(sender)
/*[----- ⏳ PALAVROES ⏳  -----]*/
            const isBadWord = isGroup ? badword.includes(from) : false
/*[----- ⏳ ADM PARA O BOT ⏳  -----]*/
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
/*[----- ⏳ SISTEMA DE LEVEL ⏳  -----]*/
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
/*[----- ⏳ SO OS ADMS ⏳  -----]*/
			const isGroupAdmins = groupAdmins.includes(sender) || false
/*[----- ⏳ ATIVAR BEM VINDO NO GRUPO ⏳  -----]*/
			const isWelkom = isGroup ? welkom.includes(from) : false
/*[----- ⏳ ATIVAR/DESATIVAR CRIMES ⏳  -----]*/
			const isNsfw = isGroup ? nsfw.includes(from) : false
/*[----- ⏳ SO DONO ⏳  -----]*/
			const isOwner = ownerNumber.includes(sender)
/*[----- ⏳ AFK ⏳  -----]*/
			const isAfkOn = checkAfkUser(sender)
/*[----- ⏳ BANIR DOS COMANDOS DO BOT ⏳  -----]*/
			const isBanned = ban.includes(sender)
/*[----- ⏳ SISTEMA DE TEMPO  ⏳  -----]*/
			const isDaily = daily.includes(sender)
			const isDeily = deily.includes(sender)
			const isDeely = deely.includes(sender)
/*[----- ⏳ ATIVAR/DESATIVAR ANTILINK ⏳  -----]*/
			const isAntiLink = isGroup ? antilink.includes(from) : false
/*[----- ⏳ ATIVAR/DESATIVAR ANTIGHOST ⏳  -----]*/
const isAntiGhost = isGroup ? antighost.includes(from) : false
/*[----- ⏳ OUTROS ⏳  -----]*/
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
	    


/*[===============> 🎈 FUNÇÃO DE BARRA DE LEVEL 🎈 <=====================================================================================================]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 250 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
							
/*[===============> 🧸 FUNÇÃO DE RANQUEAMENTO 🧸 <======================================================================================================================]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = ' Membro '
   	     if (levelRole <= 2) {
   	         role = ' Membro Oficial '
   	     } else if (levelRole <= 3) {
   	         role = ' Membro Elite '
		 } else if (levelRole <= 4) {
   	         role = ' Membro Veterano '
		 } else if (levelRole <= 5) {
   	         role = ' Senpai '
		 } else if (levelRole <= 6) {
   	         role = ' O Inigmatico '
		 } else if (levelRole <= 7) {
   	         role = ' O Manipulador '
		 } else if (levelRole <= 8) {
   	         role = ' Rei Das Sombras '	 
		 } else if (levelRole <= 9) {
   	         role = ' Perigo Continental '	 
		 } else if (levelRole <= 10) {
   	         role = ' Desastre Planetario '	 
		 } else if (levelRole <= 11) {
   	         role = ' Além Da Terra '	 
		 } else if (levelRole <= 12) {
   	         role = ' O Conquistador '	 
		 } else if (levelRole <= 13) {
   	         role = ' Viajante Entre Dimensoes '
         } else if (levelRole <= 14) {
   	         role = ' Criador De Planetas '
         } else if (levelRole <= 15) {
   	         role = ' Destruidor De Estrelas '
         } else if (levelRole <= 16) {
   	         role = ' Intangivel '
         } else if (levelRole <= 17) {
   	         role = ' *Membro De Elite* '
         } else if (levelRole <= 18) {
   	         role = ' *Membro De Elite* '
         } else if (levelRole <= 19) {
   	         role = ' *Membro De Elite* '
         } else if (levelRole <= 20) {
   	         role = ' *Membro De Elite* '
		 } else if (levelRole <= 21) {
   	         role = ' *Membro De Elite* '	 
   	     } else if (levelRole <= 22) {
   	         role = ' *Senpai* '
   	     } else if (levelRole <= 23) {
   	         role = ' *Senpai Veterano* '
   	     } else if (levelRole <= 24) {
   	         role = ' *Senpai Lendario* '
   	     } else if (levelRole <= 25) {
   	         role = ' *Senpai Zueiro* '
   	     } else if (levelRole <= 26) {
   	         role = ' *Classificação Codificada* '
   	     } else if (levelRole <= 27) {
   	         role = ' *Amigo Dos ADMS* '
   	     } else if (levelRole <= 28) {
   	         role = ' *Favorito Dos ADMS* '
   	     } else if (levelRole <= 29) {
   	         role = '*Candidato A ADM*'
   	     } else if (levelRole <= 30) {
   	         role = '*Humildade*'
   	     } else if (levelRole <= 31) {
   	         role = '*Game Zerado*'
   	     }
		 
/*[===============> 📮 FUNÇOES DE JOGOS 📮 <==================================================================================================================================================================================]*/		 
/*[----- 💢 JOGO DA FRUTA 💢  -----]*/         
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
/*[----- 💢 NENHUM JOGO AINDA INTEGRADO A ISSO 💢  -----]*/
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
/*[----- 💢 JOGO DA ROLETA DA SORTE 💢  -----]*/
            const nayla1 = ['10','50','10','100','10','50','60','10','50','25','0','10','25','25','25','10','25','10','0','25','200']
/*[----- 💢 JOGO APOSTA 💢  -----]*/
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
/*[----- 💢 FUNÇÃO PARA TUDO SAIR ALEATORIO 💢  -----]*/
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]

/*[===============> 💯 CAÇANIQUE AUTOMATICA 💯 <==================================================================================================================================================================================]*/
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]	
		
/*[===============> ♻️ FUNÇÃO JOGO DA VELHA ♻️ <==================================================================================================================================================================================]*/


const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}

if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`🎪 _Seu Tempo Expirou_ 🎪\n\n➣ 🎟️ *Punição*: ${randomEndTTTXP} *XP* ♟️`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`🎮 *O tempo De Jogo Acabou* 🎮`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
		
/*[===============> 🈳 FUNÇÃO DE NOMES PERSONALIZADOS 🈳 <==================================================================================================================================================================================]*/
   		     if (isRegistered) {
				    const semi =['🧐','Triste','Crush','Vingativo','Motivado','Desconfiado','Imperativo','Desafiador','Depressivo','Amargurado','Infeliz','Louco','Sede Por Sangue','Sem emoção','Confiança','Assassino','Escuridão','Explorar','Viajar','Conhecimento','Redenção','Humildade','Motivado','Avançar','Desistir','Sumir','Namorar','Riqueza','Grandeza','Medo','Assustado','Amedrontado','Comediante','Engraçado','Vencedor','Perdedor','Pobreza','Fome','Frio','Quente','Sede','Tesão','Equilibrado']
					const torod = semi[Math.floor(Math.random() * semi.length)]
			        senti = torod
			}
			
			 if (isRegistered) {
				    const regis =['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜','🪰','🪲','🪳','🦟','🦗','🕷️','🕸️','🦂','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🦈','🦭','🐅','🐆','🦓','🦍','🦧','🦣','🐘','🦛','🐪','🐫','🦒','🦘','🦬','🐃','🦜','🦚','🦤','🦃','🐓','🪶','🐈‍⬛','🐈','🐕‍🦺','🦮','🐩','🐕','🦌','🐐','🦙','🐑','🐏','🐖','🐎','🐄','🐂','🦢','🦩','🕊️','🐇','🦝','🦨','🦡','🦦','🦫','🦥','🐁','🐀','🐿️','🦔','🐾','🐉','☀️','🔥','☃️','⛄','💥','🌪️','🌈','🌍','🌕','🌑','🌙']
					const tered = regis[Math.floor(Math.random() * regis.length)]
			        emotion = tered
			}
				
/*[===============> 〽️ FUNÇÃO CLÃS PERSONALIZADOS 〽️ <==================================================================================================================================================================================]*/
		    if (isRegistered) {
				aliansa = '_Nenhum_ 💭'
			} 
			
/*[---------- ✅ FUNÇÃO CONTADOR ✅ ----------]*/
            if (isRegistered && isGroup) {
            const checkNON = checkNONuser(sender)
            try {
                if (checkNON === undefined) addNON(sender)
                const contadorsaku = Math.floor(Math.random() * 1) + 1
                addContUser(sender, contadorsaku)
            } catch (err) {
                console.error(err)
            }
        }
		
/*[---------- ✅ FUNÇÃO RANK ✅ ----------]*/			
            if (isRegistered) {
            const checkNAN = checkNANuser(sender)
            try {
                if (checkNAN === undefined) addNAN(sender)
                const ranksaku = Math.floor(Math.random() * 0) + 0
                addPontUser(sender, ranksaku)
            } catch (err) {
                console.error(err)
            }
        }	

/*[---------- ✅ FUNÇÃO AVENTURA ✅ ----------]*/			
            if (isRegistered) {
            const checkAVE = checkAVEuser(sender)
            try {
                if (checkAVE === undefined) addAVE(sender)
                const venturasaku = Math.floor(Math.random() * 0) + 0
                addViveUser(sender, venturasaku)
            } catch (err) {
                console.error(err)
            }
        }		
				
/*[---------- ✅ FUNÇÃO DINHEIRO ✅ ----------]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 1) + 100
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
			
/*[---------- ✅ FUNÇÃO CRIMES ✅ ----------]*/
                if (isRegistered) {
            const checkHIT = checkHITuser(sender)
            try {
                if (checkHIT === undefined) addHIT(sender)
                const crimesaku = Math.floor(Math.random() * 0) + 0
                addKillUser(sender, crimesaku)
            } catch (err) {
                console.error(err)
            }
        }
		
/*[===============> ✅ HEAL/ENERGY FUNÇÃO ADVENTURE ✅ <====================================================================================================================]*/
            const bayarHeal = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= amount
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
            }
            const addHealUser = (sender, amount) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= 25
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
            }
		    const healAdd = (sender) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal += 25
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
             }
             }
/*[===============> ✅ POTION FUNÇÃO ADVENTURE ✅ <====================================================================================================================]*/
        const bayarPotion = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }
            const addPotioUser = (sender, amount) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }
		    const potionAdd = (sender) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
             if (_potion[i].id == sender) {
             position = i
            }
            })
            if (position !== false) {
            _potion[position].potion += 1
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }

/*[===============> ✅ FUNÇÃO DE LEVEL ✅ <====================================================================================================================]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 2) + 1
                const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 50)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
         

/*[===============> ✅ FUNÇÃO DE LIMITE (CREDITOS) ✅ <==================================================================================================================]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`*🇧🇷🇯🇵 seus Creditos acabaram 🇯🇵🇧🇷*\n\n*🐼 Compre ou suba de nivel para conseguir mais 🐼*`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
/*[===============> ✅ Limit (Creditos) Finais ✅ <======================================================================================================================]*/
            const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
		
/*[===============> ✅ FUNÇAO CREDITOS 50 ✅<========================================================================================================================================]*/
            const isL50imit = (sender) =>{ 
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 50 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

/*[===============> ✅ FUNÇAO CREDITOS 500 ✅ <========================================================================================================================================]*/	 
	         const isL500imit = (sender) =>{ 
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 500 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

/*[===============> ✅ FUNÇAO CREDITOS 100 ✅ <========================================================================================================================================]*/	 
	         const isL100imit = (sender) =>{ 
		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 100 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
/*[===============> ✅FUNÇAO CREDITOS 300 ✅ <========================================================================================================================================]*/
     	     const isL300imit = (sender) =>{ 

		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 300 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
/*[===============> ✅ FUNÇAO CREDITOS 10 ✅ <========================================================================================================================================]*/
	         const isL10imit = (sender) =>{ 

		      let position = false
              for (let lmt of _limit) {
              if (lmt.id === sender) {
              	let limits = limitawal - lmt.limit
              if (limits <= 10 ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	 
/*[===============> ✅ FUNÇAO ADVENTURE ✅ <========================================================================================================================================]*/
	       if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      const point = Math.floor(Math.random() * 1) + 0
	  
	       //function check heal ⚜️
             const checkHeal = (sender) => {
         	let foundh = false
             for (let heallmt of _heal) {
             if (heallmt.id === sender) {
             let healCounts = healawal - heallmt.heal
             if (healCounts <= 0) return client.sendMessage(from,`🇯🇵 *Você esta curado* 🇯🇵\n\n🕋 _A Cura Pode Ser Usada, Usando O Comando ${prefix}usarpoçao_ 🕋`, text,{ quoted: mek})
             client.sendMessage(from, `🐼 *Cura* 🐼 : ${healCounts}`, text, { quoted : mek})
             foundh = true
             }
             }
             if (foundh === false) {
             let obj = { id: sender, heal: 0 }
             _heal.push(obj)
             fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
             client.sendMessage(from, `🐼 *Cura* 🐼 : ${healCounts}`, text, { quoted : mek})
             }
	         }
		 //funtion potion ⚜️
          const isPotion = (sender) =>{ 
	      let position = false
          for (let i of _potion) {
          if (i.id === sender) {
          let potions = i.potion
          if (potions >= potionawal ) {
          position = true
          client.sendMessage(from, `🚧 *Compre Poçoes em comprarpoçao* 🚧`, text, {quoted: mek})
          return true
           } else {
           _potion
           position = true
           return false
           }
           }
           }
           if (position === false) {
           const obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json',JSON.stringify(_potion))
           return false
            }
            }
            const checkPotion = (sender) => {
        	let foundh = false
            for (let potionlmt of _potion) {
            if (potionlmt.id === sender) {
            let potionCounts = potionawal - potionlmt.potion
            if (potionCounts <= 0) return client.sendMessage(from,`🐤 *Voce Esta Sem Poçoes* 🐤\n\n🕋 _Voce Pode Conseguir Mais Poçoes Comprando ${prefix}comprarpoçao_ 🕋`, text,{ quoted: mek})
            client.sendMessage(from, `🚧 *Poçoes* 🚧 : ${potionCounts}`, text, { quoted : mek})
            foundh = true
            }
            }
           if (foundh === false) {
           let obj = { id: sender, potion: 0 }
            _potion.push(obj)
           fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
           client.sendMessage(from, `🚧 *Poçoes* 🚧 : ${potionCounts}`, text, { quoted : mek})
            }
	        }
	
/*[===============> 💮 Automatico Limite de membros no grupo 💮 <===================================================================================]*/
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`🚧 _O numero de Membros é muito pouco_ 🚧\n\n *Minimo De Membros = ${memberlimit}*`)
					setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("1️⃣")
						}, 4000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("2️⃣")
						}, 3000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("3️⃣")
						}, 2000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("4️⃣")
						}, 1000)
							setTimeout( () => {
							client.updatePresence(from, Presence.composing)
							reply("5️⃣")
						}, 0)
				    }
		       } catch (err) { console.error(err)  }
 	       }
 
/*[===============> 💤 DIGA NÃO A PALAVROES 💤 <===========================================================================================================]*/
 	             	if (isGroup && isBadWord) {
                    if (bad.includes(messagesC)) {
                    if (isGroup) {
                    try { 
						        reply("* ( ऀืົཽ₍₍ළ₎₎ ऀืົཽ)▄︻̷̿┻̿═━一 💥💥💥 🛡️*")
								setTimeout( () => {
                                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				                client.groupRemove(from, [kic]) 
					        }, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("⚠️ Ban Temporario Fala Para Algum ADM Te Colocar Depois ⚠️")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("*「🚧 ANTI PALAVROES 🚧 」*\n\n_Detectei Alguem Falando Um Palavrão_")
							}, 0)
                        } catch { client.sendMessage(from, `🚨 *Acho que estou sem ADM, não consegui remove-lo* 🚨`, text , {quoted : mek}) }
                    } else {
                    return reply("*ADM?*")
                }
            }
        }
 
/*[===============> 🗯 FUNÇÃÕ ANTILINK 🗯 <=======================================================================================================]*/
				if (messagesC.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('*Voce é ADM*')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`⚠️ *Adeus* ⚠️  ${sender.split("@")[0]}`)
						setTimeout( () => {
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 1500)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply(" ( ऀืົཽ₍₍ළ₎₎ ऀืົཽ)▄︻̷̿┻̿═━一 💥💥💥 🛡️")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("🚧 _Apagar_ 🚧")
					}, 0)
				}


/*[===============> 🗯 FUNÇÃÕ AUTO RESPONDER 🗯 <=======================================================================================================]*/
if ((budy === 'oi') || (budy === 'Oi') || (budy === 'OI')) {
texto =['Oi','Ola','Roi','Eai','Hmm','Oi como esta','Oi Amigo','Oi amiga','Oi gata','Oi gato','Oi bebe']
const bufi = texto[Math.floor(Math.random() * texto.length)]
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufi}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})
}
if ((budy === 'Te amo') || (budy === 'te amo') || (budy === 'TE AMO')) {
texto =['te amo','te amo demais','te amo tanto','te amo por demais','te amo mensuramente','te amo intensamente','te amo infinitamente']
const bufii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'Triste') || (budy === 'triste') || (budy === 'TRISTE') || (budy === 'TRISTÃO') || (budy === 'Tristão') || (budy === 'tristão') || (budy === 'TÔ TRISTE') || (budy === 'Tô triste') || (budy === 'tô triste')) {	
texto =['triste','estou triste','estou muito triste','grande tristeza','tristeza profunda','profundamente triste','triste demais','meu amigo esta triste','ele esta triste','ela esta triste']	       
const bufiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'PUTA') || (budy === 'Puta') || (budy === 'puta')) {
text =['puta','putinha','putona','putaria','voce gosta de putaria?','minha puta']
const bufiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'OPA') || (budy === 'Opa') || (budy === 'opa')) {
texto =['opa','opa beleza','opa opa','opaa','opa para']
const bufiiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'Sim')) {
texto =['sim','sim?','simm']
const bufiiiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'F')) {
texto =['ele morreu','morte','ele se matou','mataram ele','ele tirou a vida','tiraram a vida dele']
const bufiiiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'CU') || (budy === 'Cu') || (budy === 'cu')) {
texto =['cu','cuzão','cuzin','seu cu','seu cuzao']
const bufiiiiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiiiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'Não') || (budy === 'não') || (budy === 'Nao')) {
texto =['nao','não','nao?','não?']
const bufiiiiiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${bufiiiiiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'MDS') || (budy === 'Mds') || (budy === 'mds')) {
texto =['meu deus','meu deus toma vergonha','meu deus do ceu','meu deus que burro']
const buti = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${buti}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'Vamos') || (budy === 'vamos') || (budy === 'VAMOS') || (budy === 'VMS') || (budy === 'Vms') || (budy === 'vms')) {
texto =['vamos','vamos?','vamos logo','vamos que demora','vamos vagabundo','vamos ir logo']
const butii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${butii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'Ah') || (budy === 'Ah') || (budy === 'ah') || (budy === 'A') || (budy === 'a') || (budy === 'Nha')) {
texto =['sexo','a','ah','gemendo','canta um rap','gostosa','linda','tesuda','novinha','vivendo e aprendendo','peituda','rabuda']
const butiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${butiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'TCHAU') || (budy === 'Tchau') || (budy === 'tchau') || (budy === 'FLW')|| (budy === 'Flw') || (budy === 'flw') || (budy === 'FUI') || (budy === 'Fui') || (budy === 'fui')) {
texto =['tchau','adeus','ate mais','tchau tchau','tchau gostosa','ate uma proxima vez']
const butiiii = texto[Math.floor(Math.random() * texto.length)]	
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${butiiii}&lang=pt`)
buf = (`${sim.success}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}
if ((budy === 'que') || (budy === 'Que') || (budy === 'qe') || (budy === 'Qe')|| (budy === '?') || (budy === 'What') || (budy === 'what') || (budy === ';-;') || (budy === 'mano') || (budy === 'Mano') || (budy === 'lixo') || (budy === 'Lixo') || (budy === 'entendo') || (budy === 'Entendo') || (budy === 'foda') || (budy === 'Foda')) {
texto =['Que gayzin','Esse ta doido pra da','Burro','kkk','Oi','Tudo bem com você?','Olha isso kk','calado.','Muito gay o de cima','Merece uns tapa no rosto pelas merda que esta falando','Não liguem','Necessitado de atenção','Rabudinha essa ai','Foda-se so queria uma loira peituda rabuda','Mi não entender su lingua di mamacu','Alguem para conversar?','Sim','Não','Alguem tem uma historia interessante para contar? Estou entediada :S','Quero viajar o mundo','Adoro Comer Carne','Adoro Salgados','Uma amiga On?','um amigo ai?','Galera uma mina veio no meu pv e mandou nudes ai depois ela falou que tinha 13 anos, o que faço?','Nossa kkkkk','Engraçado morri de ri','As vezes calar os dedos evitar de escrever merdas como essas','As meninas deste grupo são demais kkk','Eita tem alguem fedendo aqui acho que é  de cima','Nossa alguem para ser namorado de aluguel ai minha amiga paga bem','Geral com fogo no rabu','Estou com medo ta escuro aqui em casa','Eu não sei o que tem de tão errado em webnamoro ;x','Minha voz é bonita?','Manga coreanos e chineses muito bom recomendo para voces','Ola','Me perguntou?','Vixi','....','Sksksksksk','kakakakaka','HiHiHiHi','Pqp','Olha essas conversas','Zooi','Rooi','Conversa comigo?','Adoro ler','Adoro correr','Amo fazer exercicios','Nando lindo ta ai?','Nunca vi alguem tão descarado','Pensei coisas inapropriadas agora kk','Vi e revi mais ainda não entendi','Tchau :(','Adeuus ;(','Aishiteru Oni-chan :D','Vagabundo','Vagabunda','Desculpa kk','Obrigadaaa ;D','Vamos todos fazer 1 minuto de silenco','Pensando no que eu falo','Nossa hoje me olhei no espelho e pensei "Eu sou muito gata" ','Alguem recomenda animes para mim? pode ser de romance aventura magia isekai shounen vida cotidiana adoro todos :D','Meuuuu deeeus do ceeeu','Olha a boca menino eu em','Estou feliz ','Aishiteru','gayzin kk','Quero te conhecer','Roi perfeição','Grupo morto']
const butiiiii = texto[Math.floor(Math.random() * texto.length)]	
buf = (`${butiiiii}`)
client.sendMessage(from, buf, MessageType.text, {quoted: mek})	
}

//feature total command ==============================================================================================================================================================
			 if (isCmd) cmdadd()
			
//kolor ==============================================================================================================================================================
			colors = ['red','white','black','blue','yellow','green']
			
//detector media ==============================================================================================================================================================
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
//private chat message ==============================================================================================================================================================
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
//group message ==============================================================================================================================================================
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 
/*
]===============> MENU TEXTOS EDITS <================================================================================================================================[
*/
            case 'letras':  
                   if (isBanned) return reply(ind.benned())
		           if (!isRegistered) return reply(ind.noregis())
		           if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(ind.wait())
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=Alphabott`)
                   anu1 = `➻ *Letras Personalizadas* : ${anu.result}\n`
                   anu1 += `➻ *Letras Personalizadas* : ${anu.result}\n`
                   anu1 += `➻ *Letras Personalizadas* : ${anu.result}\n`
                   anu1 += `➻ *Letras Personalizadas* : ${anu.result}\n`
                   reply(anu1)
				   await limitAdd(sender)
				break 
				case 'procurar':
                if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                carii = args.join(' ')
				reply(wait)
				anu4 = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/mal-name?name=${carii}&apikey=OmniVERSO`)
				anu = anu4.result
				ano = anu.statistics
				ana = ano.score
				teksnya = `🍥 *Informaçoes Do Anime ${carii}* 🍥\n\n`
				teksnya += `🇯🇵 *Titulo* 🇯🇵 : ${anu.title}\n`
				teksnya += `🇯🇵 *Detalhes* 🇯🇵 : *${anu.detailsLink}*\n`
				teksnya += `🇯🇵 *Episodios* 🇯🇵 : ${anu.episodes}\n\n`
				teksnya += `*━━━━━━━━━━━━━━━━━━░★░━━━━━━━━━━━━━━━━━━*\n`
				teksnya += `🇯🇵 *Gerenos* 🇯🇵 : ${anu.genres}\n`
				teksnya += `*━━━━━━━━━━━━━━━━━━░★░━━━━━━━━━━━━━━━━━━*\n\n`
				teksnya += `🇯🇵 *Pontuação* 🇯🇵 : *${ana.value}*\n`
				teksnya += `🇯🇵 *Popularidade* 🇯🇵 : ${ano.popularity}\n`
				teksnya += `🇯🇵 *Ranking* 🇯🇵 : *${ano.ranking}*\n`
				teksnya += `🇯🇵 *Studio* 🇯🇵 : ${anu.studios}\n\n`
				teksnya += `━┅━┅┅━┅━┅━┅┅┅┅━┅┅┅┄┄⟞⟦⟧⟝┄┄┉━┅┅━┅┅━┅━┅┅┅━┅┅┉━`
				client.sendMessage(from, teksnya, text, {quoted: mek, caption: teksnya})
				await limitAdd(sender)
				break
			case 'letra':
				if (isBanned) return reply(ind.benned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isRegistered) return reply(ind.noregis())
                teks = body.slice(7)
		    anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
		    reply('✒️ *Letra da musica* ✒️ '+teks+' 🎼🎤 :\n\n'+anu.result.lirik)
		await limitAdd(sender)
                break
			case 'info':
				     if (!isRegistered) return reply(ind.noregis())
				     if (isLimit(sender)) return reply(ind.limitend(pusname))
			         if (isBanned) return reply(ind.benned())
					me = client.user
					uptime = process.uptime()
					teks = `*Nome bot* : ${me.name}\n*DONO* : *Nando*\n*AUTOR* : Nando\n*NUMERO* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*TOTAL CONTATOS BLOQUEADOS* : ${blocked.length}\n\n*BOT ESTA ATIVADO* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					await limitAdd(sender)	
			        break
				case 'admin':
         	   case 'owner':
         	   case 'creator':
			      if (isBanned) return reply(ind.benned())
                  client.sendMessage(from, {displayname: "Nan", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, '*Esse é o numero do meu dono, cuidado quando for mandar mensagem para ele, voce pode ser bloqueado*',MessageType.text, { quoted: mek} )
					break  
				case 'adms':
				    if (isBanned) return reply(ind.benned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					teks = `🔰 *Lista de admins do grupo* 🔰 *${groupMetadata.subject}*\n🔓 *Total* 🔒 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break
case 'ddd':
if (!isRegistered) return reply(ind.noregis())
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(5)
anu = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
ccg =
`*🐼 Resultado Da Pesquisa Do DDD Pedido 🐼*

‣ 🕋 *Estado*: ${anu.state}
  
‣ 🕋 *Cidades*: 
    ${anu.cities}\n`
client.sendMessage(from, ccg, text, {quoted:mek})
break
case 'fake':
if (!isRegistered) return reply(ind.noregis())
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`🚧 *Dados Gerados* 🚧

‣ 🕋 *Nome* : ${anu.name}  
‣ 🕋 *Sexo* : ${anu.gender}
‣ 🕋 *Idade* : ${anu.age}
   
‣ 🕋 *Telefone* : ${anu.phone}
‣ 🕋 *Tipo sanguíneo* : ${anu.blood_type}
   
‣ 🕋 *E-mail* : ${anu.email}
‣ 🕋 *Senha* : ${anu.password}
   
‣ 🕋 *CEP* : ${anu.zip_code}`
client.sendMessage(from, dadosf, text, {quoted: mek})
break
 case 'cpf': 
if (!isRegistered) return reply(ind.noregis())
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
client.sendMessage(from, `🐤 *CPF gerado: ${cpf} 🐤*`, text, {quoted: mek})
break
/*
]===============> MENU TEXTOS EDITS <================================================================================================================================[
*/
                case 'donasi':
				case 'donate':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
				await limitAdd(sender)
					break
				case 'aventurar':
				case 'aventuras':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, aventurar(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'brincadeiras':
				case 'brincadeira':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, brincadeiras(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'jogos':
				case 'jogar':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, jogos(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'velha':
				case 'jogarvelha':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, velha(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'figurinhas':
				case 'figurinha':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, figurinhas(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'picture':
				case 'pictures':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, picture(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'transferencia':
				case 'negocio':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, transferencia(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'download':
				case 'donwload':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, download(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'comandos':
				case 'comando':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, comandos(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'administração':
				case 'adimins':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, administração(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'donobot':
				case 'donodobot':
				if (isBanned) return reply(ind.benned())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				client.sendMessage(from, donobot(pushname, prefix, sender, client, process), text)
			    await limitAdd(sender)
				break
				case 'help': 
				case 'menu':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					const pepolu = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client, process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord), text, tescuk, cr)
                    await limitAdd(sender)
					break
/*
]===============> MENU IMAGENS, IMAGE TEXT <================================================================================================================================[
*/
			case 'nome':
		    if (isBanned) return reply(ind.benned())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply(ind.wrongf())
		    aruga = body.slice(5)
		    reply(ind.wait())
		    aruga = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${aruga}`)
		    client.sendMessage(from, aruga, image, {caption: '*ok*', quoted: mek})
		    await limitAdd(sender)
				break
				case 'neon1':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break  
       case 'text3d':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break                   
       case 'galaxy':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break
      case 'gaming':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break
      case 'colors':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break
       case 'kling':  
                   if (!isRegistered) return reply(ind.noregis())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Exemplo :\n\n*${prefix}${command} bot whatsapp*`)
                   reply(ind.wait())
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `Universo Otaku\n\n Nando `, quoted: mek})
                   break
				case 'comentar': 			
                   if (isBanned) return reply(ind.benned())
		           if (!isRegistered) return reply(ind.noregis())
		           if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (args.length < 1) return reply(`[❗] Exemplo :\n*${prefix}comentar nome&texto*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(ind.wait())
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=Alphabott&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   client.sendMessage(from, anu, image, {caption: `*Veridico*`, quoted: mek})
				   await limitAdd(sender)
                   break
				case 'edite':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var ghh = body.slice(6)
		    var quote = ghh.split("/")[0];
		    var wm = ghh.split("/")[1];
		    var bg = ghh.split("/")[2];
		    const pref = `🖋️ *Como Usar* 🖋️: \n${prefix}imgmaker texto/nome/tema\n\n🖋️ *Exemplo* 🖋️ \n\n${prefix}imgmaker Meu Bot É Muito Top/Nando/random`
		    if (args.length < 1) return reply(pref)
		    reply(ind.wait())
		    anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
		    buffealr = await getBuffer(anu.result)
		    client.sendMessage(from, buffealr, image, {caption: '✒️', quoted: mek})
		    await limitAdd(sender)
			    break			
        case 'ytouro': 
                   if (isBanned) return reply(ind.benned())		
                   if (!isRegistered) return reply(ind.noregis)
	               if (isLimit(sender)) return reply(ind.limitend(pusname))	
                   if (args.length < 1) return reply(`[❗] *Errado*`)
                   F = body.slice(8)
                   reply(ind.wait())
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=Alphabott`)
                   client.sendMessage(from, anu, image, {caption: `*Parabens*`, quoted: mek})
		   await limitAdd(sender)
                   break
       case 'ytprata':  
	               if (isBanned) return reply(ind.benned())
                   if (!isRegistered) return reply(ind.noregis)
	               if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (args.length < 1) return reply(`[❗] *Errado*`)
                   F = body.slice(8)
                   reply(ind.wait())
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=Alphabott`)
                   client.sendMessage(from, anu, image, {caption: `*Parabens*`, quoted: mek})
		   await limitAdd(sender)
                   break
				case 'wallpaper':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					truteh = await getBuffer(`https://dapuhy-api.herokuapp.com/api/sfw/sfwwallpaper?&apikey=OmniVERSO`)
					client.sendMessage(from, truteh, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'nekochan':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					truteh = await getBuffer(`https://dapuhy-api.herokuapp.com/api/sfw/sfwneko?&apikey=OmniVERSO`)
					client.sendMessage(from, truteh, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'nome':
		    if (isBanned) return reply(ind.benned())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply(ind.wrongf())
		    aruga = body.slice(5)
		    reply(ind.wait())
		    aruga = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${aruga}`)
		    client.sendMessage(from, aruga, image, {caption: '*ok*', quoted: mek})
		    await limitAdd(sender)
				break
				case 'nulis':
				    if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`🚧 *Não Esta Funcionando* 🚧`)
					nul = body.slice(7)
					reply('「❗」 *Espere Um Instante* 🚧')
					tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=Alphabott`)
					client.sendMessage(from, tak, image, {quoted: mek, caption: '*Acho melhor você mesmo escrever* ❗'})
					await limitAdd(sender)				
				break
		        case 'love':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
			    quory = args.join(" ")
				anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy1/lovemessage?text=${quory}&apikey=OmniVERSO`)
				client.sendMessage(from, anu, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'fogo':
					if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					quory = args.join(" ")
					anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy1/flaming?text=${quory}&apikey=OmniVERSO`)
					client.sendMessage(from, anu, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'hpotter':
					if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					quory = args.join(" ")
					anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy1/harrypotter?text=${quory}&apikey=OmniVERSO`)
					client.sendMessage(from, anu, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'google':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
			    quory = args.join(" ")
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=${quory}&apikey=OmniVERSO`)
				dpuhyy = await getBuffer(dapgz.image)
				client.sendMessage(from, dpuhyy, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'aleatorio':
				    if (isBanned) return reply(ind.benned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					ime = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=Alphabott&q=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					lok = ime.data
					n = JSON.parse(JSON.stringify(lok));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*Eu Acho Qualquer Imagem*`})
					await limitAdd(sender)
			break
				case 'loli':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=Tobzzz17` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
				break
				case 'gatinho':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://nekos.life/api/v2/img/meow` , {method: 'get'})
                buf = await getBuffer(anu.url)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
				break
				case 'cachorrinho':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://nekos.life/api/v2/img/woof` , {method: 'get'})
                buf = await getBuffer(anu.url)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
				break
			    case 'kpop':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=Tobzzz17` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'fofo':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=Tobzzz17` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
                case 'anime':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
	        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=Tobzzz17` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
	        await limitAdd(sender)
		    break
			case 'neko':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=Tobzzz17` , {method: 'get'})
                buf = await getBuffer(anu.result)
                client.sendMessage(from, buf, image, { quoted: mek, caption: '⚓ *Nice* ⚓' })
			    await limitAdd(sender)
				break
                case 'waifu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=Tobzzz17`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
			    break
				case 'animeh':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=Tobzzz17`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Universo Otaku*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
				break
                case 'animem':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=Tobzzz17`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)	
				break 
                case 'animes':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=Tobzzz17`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
/*
]===============> MENU REGISTRAR <===============================================================================================================[
*/
				case 'registrar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('/')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('/') - 0)
                const umurUser = q.substring(q.lastIndexOf('/') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('⚠️ *A idade tem que ser um numero* ⚠️')
                if (namaUser.length >= 30) return reply(`️⚠️ *Seu nome é longo demais* ⚠️`)
                if (umurUser > 40) return reply(`⚠️ *Você é muito velho* ⚠️`)
                if (umurUser < 12) return reply(`⚠️ *Você é muito novo* ⚠️ `)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
/*
]===============> MENU CONTADOR <==================================================================================================================[
*/
				 case 'resetcontador':
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(mess.only.ownerB)
				  obj = body.slice(10)
			      contador.splice(obj)
				   fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador))
				  await reply(`Contador resetado`)
				  break
                case 'contador':
				case 'contando':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				contador.sort((a, b) => (a.contador < b.contador) ? 1 : -1)
                  let leaderboardcontador = '🧧 *🕋 Contador Evento 🕋* 🧧\n\n_Evento Acumulador de Mensagens_\n*Voce Da Conta De Assumir A Liderança Ne Algum Quadro De Rank? Fique Ligado Nos Eventos*\n\n'
                let nom2 = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom2++                        
                        leaderboardcontador += `🔥🔝 *[${nom2}]* wa.me/${contador[i].id.replace('@s.whatsapp.net', '')}\n┣⊱🌟 *Pontos*: ${contador[i].contador}\n`
                    }
                    await reply(leaderboardcontador)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await limitAdd(sender)											
				break
/*
]===============> MENU DE RANK PONTOS <===================================================================================================================[
*/
                case 'rank+':
				if (isBanned) return reply(ind.baned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destino0 = q.substring(0, q.indexOf('/') - 1)
                const tudo00 = q.substring(q.lastIndexOf('/') + 1)
                if (checkATMuser(sender) < tudo00) return reply(`🐡 *tem certeza?* 🐡`)
                const destino00tf = `${destino0.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudo00
                hasiltf = tudo00 - fee
                addPontUser(destino00tf, hasiltf)
                confirmATM(sender, tudo00)
                addPontUser('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n⚠️ *de* : +${sender.split("@")[0]}\n\n⚠️ *para* : +${destino0}\n\n⚠️ *Valor dado* : ${tudo00}`)
				break
				case 'rank':
				case 'tabela':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				if (isBanned) return reply(ind.benned())
				rank.sort((a, b) => (a.rank < b.rank) ? 1 : -1)
                  let leaderboardrank = '🧧 *🕋 [я̲̅α̲̅и̲̅k̲̅i̲̅и̲̅g̲̅ ̲̅є̲̅v̲̅є̲̅и̲̅т̲̅σ̲̅s̲̲̅̅] 🕋* 🧧\n\n_Participe de eventos para ganhar pontos para cada evento voce ganha de 1 a 3 pontos aleatoriamente_\n\n*Final do Ranking O Primeiro Coloca Ganhará um premio*\n\n _Possiveis Premios_ : *Dinheiro, Previlegios, Cargos ETC...*\n\n'
                let nom1 = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom1++                        
                        leaderboardrank += `🔥🔝 *[${nom1}]* wa.me/${rank[i].id.replace('@s.whatsapp.net', '')}\n┣⊱🌟 *Pontos*: ${rank[i].rank}\n`
                    }
                    await reply(leaderboardrank)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await limitAdd(sender)
					break
/*
]===============> MENU DE RANKING DOS CRIMES  <===================================================================================================================[
*/
                case 'crime+':
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destinoa0 = q.substring(0, q.indexOf('/') - 1)
                const tudoa00 = q.substring(q.lastIndexOf('/') + 1)
                if (checkATMuser(sender) < tudoa00) return reply(`🐡 *tem certeza?* 🐡`)
                const destinoa00tf = `${destinoa0.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudoa00
                hasiltf = tudoa00 - fee
                addKillUser(destinoa00tf, hasiltf)
                confirmATM(sender, tudoa00)
                addKillUser('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n⚠️ *de* : +${sender.split("@")[0]}\n\n⚠️ *para* : +${destinoa0}\n\n⚠️ *Valor dado* : ${tudoa00}`)
				break
				case 'crimes':
				case 'crime':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				if (isBanned) return reply(ind.benned())
				crime.sort((a, b) => (a.crime < b.crime) ? 1 : -1)
                  let leaderboardcrime = '🩸 *⚔️ 𝒪𝓈 𝐵𝒶𝓃𝒹𝒾𝒹𝑜𝓈 𝑀𝒶𝒾𝓈 𝐼𝓃𝓈𝒶𝓃𝑜𝓈 ⚔️* 🩸\n\n🪓 _O RANK DOS BANDIDOS MAIS INSANOS_ 🪓\n\n⛓️ *Roubos Bem Sucedidos Fazem Voce Subir Na Tabela De Crimes* ⛓️\n\n _Possiveis Premios_ : *Dinheiro, Previlegios, Cargos ETC...*\n\n'
                let nom4 = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom4++                        
                        leaderboardcrime += `⛓️🔫 *[${nom4}]* wa.me/${crime[i].id.replace('@s.whatsapp.net', '')}\n┣⊱💣 *Pontos*: ${crime[i].crime}\n`
                    }
                    await reply(leaderboardcrime)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await limitAdd(sender)
					break
/*
]===============> MENU DO EXILAR MEMBRO DOS COMANDOS DO BOT  <=========================================================================================================================================[
*/					
                    case 'assassinar':
                    case 'matar':
		     	if (isBanned) return reply(ind.benned())
			    if (!isNsfw) return reply(ind.nsfwoff())
				if (isL100imit(sender)) return reply(ind.limitend(puhname))
		        if (!isRegistered) return reply(ind.noregis())		
                const pnom10 = `${args[0].replace('@','')}@s.whatsapp.net`				
				const mortoa = args[0].replace('@','')
                const cadavera = mortoa + '@s.whatsapp.net'
                const ptscrimea = ('20')
                if (checkHITuser(sender) < ptscrimea) return reply(`🍄 *Seus Pontos De Crimes Não São Suficientes Para Voce Matar Alguem* 🍄`)		
				ppw = Math.floor(Math.random() * 20)
                confirmHIT(sender, ppw)		
                const tiroaaa = ["pow","vazio","vazio","pow","vazio","pow"]
const figraaa = ["roleta1","roleta2","roleta3"]
tpa = tiroaaa[Math.floor(Math.random() * (tiroaaa.length))]	
tpb = figraaa[Math.floor(Math.random() * (figraaa.length))]
figb = ('🥷 _Sua Vitima Escapou_ 🥷')
if (tpa == "vazio") {
var morte = "🪵 _Suas Habilidades Estão Insanas_ 🪵️"
setTimeout( () => {
 ban.push(pnom10)
 fs.writeFileSync('./database/user/ban.json',JSON.stringify(ban))
 ppg = Math.floor(Math.random() * 15000)
 ppa = Math.floor(Math.random() * 200)
 tpo = Math.floor(Math.random() * 40)
 addKoinUser(sender, ppg)
 addKillUser(sender, tpo)
 confirmATM(cadavera, ppg)
 bayarLimit(sender, ppa)
reply(ind.banadd(args[0]))
reply(`☠️💀 _Você Conseguiu Matar o seu alvo e ainda conseguiu_ *R$${ppg}* _da sua vitima, Ganhou_ *${tpo}* Pontos De Crimes & ${ppa} Creditos_ ☠️💀`)
}, 2300)
} else if (tpa == "pow") {
var morte = "🔪 _Sua vitima te superou_ 🔫"
setTimeout( () => {
reply(`🍥 _Sua Vitima Dessa Vez Conseguiu Escapar_ 🍥`)
}, 2300)
}
await l100imitAdd(sender)
            break 
					case 'tiraravida':
					if (isBanned) return reply(ind.benned())
					if (isL500imit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    const pnom3 = `${args[0].replace('@','')}@s.whatsapp.net`
				    ban.push(pnom3)
				    fs.writeFileSync('./database/user/ban.json',JSON.stringify(ban))
				    reply(ind.banadd(args[0]))
					await l500imitAdd(sender)
					break
				
				    case 'ressuscitar':
					case 'reviver':
					if (isL100imit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
				    const hnom3 = `${args[0].replace('@','')}@s.whatsapp.net`
				    var arr = ban
 			        for( var i = 0; i < arr.length; i++){ 
 		            if ( arr[i] === hnom3) { 
    		      	  arr.splice(i, 1); 
      		   	    i--; 
      				fs.writeFileSync('./database/user/ban.json',JSON.stringify(arr))
       			      }
 			        }
				    reply(ind.dellban(args[0]))
					await l100imitAdd(sender)
					break
					case 'mortos':
                    if (isBanned) return reply(ind.benned())				
				    if (!isRegistered) return reply( ind.noregis()) 
					if (isLimit(sender)) return reply(ind.limitend(pusname))	
				    const krem3 = JSON.parse(fs.readFileSync('./database/user/ban.json'))
				    teks = '*==[ 🇧🇷🇯🇵 ⚔️ Mortos ⚔️ 🇧🇷🇯🇵 ]==*\n'
				    for (let premau3 of krem3){
					teks += `┣➢🛡️ @${premau3.replace('@s.whatsapp.net','')}\n`
				    }
				    teks += `┣➢⌛ *Total De Membros Mortos* : ${krem3.length}`
				    client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})	
					await limitAdd(sender)
					break
/*
]===============> MENU BAIXAR DONWLOAD... <=============================================================================================================[
*/
                              case 'yta':
					if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply('🐤 *Cade a URL?* 🐤')
		    if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
		    lend = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?apikey=Alphabott&url=${args[0]}`, {method: 'get'})
		    anu = lend.result
		    if (anu.error) return reply(anu.error)
		    teks = `*Titulo* : ${anu.title}\n*tamanho* : ${anu.size}`
		    thumb = await getBuffer(anu.thumb)
		    client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
		    buffer = await getBuffer(anu.link)
		    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		    await limitAdd(sender)
                break		
                case 'ytv':
		if (isBanned) return reply(ind.benned())
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		    if (args.length < 1) return reply('🐦 *Cade a URL mano* 🐦')
		    if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
		    lend = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?apikey=Alphabott&url=${args[0]}`, {method: 'get'})
            anu = lend.result
		    if (anu.error) return reply(anu.error)
		    teks = `*Titulo* : ${anu.title}\n*tamanho* : ${anu.size}`
		    thumb = await getBuffer(anu.thumb)
		    client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
		    buffer = await getBuffer(anu.link)
		    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
		    await limitAdd(sender)
				break
				case 'play':  
		            if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
                    if (isL100imit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`🎧 Ex: 🎧 ${prefix}play DJ 30 seconds`)	
					reply(ind.wait()) 	
                    queryy = args.join(" ")				
					anu4 = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Alphabott&q=${queryy}`)
					anu = anu4.result
					anu1 = `*🎻 Procurando Musica 🎻*\n\n`
                    anu1 += `➸ *🥁 Titulo 🥁* : ${anu.title}\n\n`
                    anu1 += `➸ *🥁 Tamanho 🥁* : ${anu.size}\n\n`
                    anu1 += `➸ *🥁 Link Do Video 🥁* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumb)
					anu3 = await getBuffer(anu.link)
				    client.sendMessage(from, anu2, image, { quoted: mek, caption: anu1 })
					client.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: mek })
					await l100imitAdd(sender)
					break
					case 'playv':  
		            if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
                    if (isL100imit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`🎧 Ex: 🎧 ${prefix}play DJ 30 seconds`)	
					reply(ind.wait()) 	
                    queryy = args.join(" ")				
					anu4 = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=Alphabott&q=${queryy}`)
					anu = anu4.result
					anu1 = `*🎻 Procurando Video 🎻*\n\n`
                    anu1 += `➸ *🥁 Titulo 🥁* : ${anu.title}\n\n`
                    anu1 += `➸ *🥁 Tamanho 🥁* : ${anu.size}\n\n`
                    anu1 += `➸ *🥁 Link Do Video 🥁* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumb)
					anu3 = await getBuffer(anu.link)
				    client.sendMessage(from, anu2, image, { quoted: mek, caption: anu1 })
					client.sendMessage(from, anu3, video, { mimetype: 'audio/mp4', quoted: mek })
					await l100imitAdd(sender)
					break
				case 'musica':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=Tobzzz17`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*🇧🇷🇯🇵 Canção encontrada 🇧🇷🇯🇵*\n*🎧 Titulo 🎧* : ${data.result.judul}\n*🎧 Album 🎧* : ${data.result.album}\n*🎧 Publicados 🎧*: ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
				break			
                case 'mod':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=Tobzzz17`)
			hepi = data.result[0] 
			teks = `↬ 🕋 *Nome*: ${data.result[0].title}\n↬ 🕋 *Publicado*: ${hepi.publisher}\n↬ 🕋 *Informação:* ${hepi.mod_info}\n↬ 🕋 *Arquivo*: ${hepi.size}\n↬ 🕋 *Versão Mais Recente*: ${hepi.latest_version}\n↬ 🕋 *Genero*: ${hepi.genre}\n↬ 🕋 *link:* ${hepi.link}\n↬ 🕋 *download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
                   break
				case 'wait':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				reply(ind.wait())
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				media = await client.downloadMediaMessage(encmedia)
				await wait(media).then(res => {
				client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
				}).catch(err => {
				reply(err)
				})
				} else {
				reply(ind.ocron())
				}
				await limitAdd(sender)
			    break
			case 'storyanime':
                if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isL50imit(sender)) return reply(ind.limitend(pusname))
                reply(ind.wait())
                woeee = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=OmniVERSO`)
                client.sendMessage(from, woeee, video, {quoted: mek})
                await l50imitAdd(sender)
                break
/*
]===============> MENU BLOCKEADOS BOT <======================================================================================================================[
*/
				case 'blocklist': 
				if (isBanned) return reply(ind.benned())
					teks = '⚠️ *Lista De Pessoas Bloqueadas* ⚠️ :\n'
					for (let block of blocked) {
						teks += `┣➢ 🇯🇵🇧🇷 @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'bloquear':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `bloqueado wa.me${body.slice(8)}@c.us`, text)
				break
				case 'desbloquear':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `desbloqueado wa.me/${body.slice(10)}`, text)
				break 
/*
]===============> MENU RANKING TOP <====================================================================================================================[
*/					
				case 'ranking':
				case 'top':
				 if (isBanned) return reply(ind.benned())
				 if (!isRegistered) return reply(ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '*┏━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━┓*\n       ℝ𝔸ℕ𝕂 𝔻𝕆𝕊 𝕄𝔼𝕃ℍ𝕆ℝ𝔼𝕊\n*┗━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━┛*\n\n\n👑 _𝙽𝚘 𝚃𝚘𝚙𝚘 𝙳𝚎𝚜𝚜𝚎 𝚁𝚊𝚗𝚔, 𝙽𝚎𝚖 𝙾𝚜 𝙲𝚎́𝚞𝚜 𝙾𝚞𝚜𝚊 𝙾𝚕𝚑𝚊𝚛 𝙿𝚊𝚛𝚊 𝚅𝚘𝚌𝚎̂ 𝙳𝚎 𝙲𝚒𝚖𝚊._ 👑\n\n🚧 *Fala Galera Fica Ligado Nos Eventos Que Tem No Grupo* 🚧\n\n'
                let leaderboarduang = '*╔─━━━━━━░★░━━━━━━─╗*\n            ℝ𝔸ℕ𝕂 𝔻𝕆𝕊 𝕄𝕀𝕃𝕀𝕆ℕ𝔸ℝ𝕀𝕆𝕊\n*╚─━━━━━━░★░━━━━━━─╝*\n\n\n💎 𝔒𝔰 ℜ𝔦𝔠𝔬𝔰, ℭ𝔬𝔫𝔰𝔢𝔤𝔲𝔦𝔫𝔡𝔬 𝔗𝔲𝔡𝔬 ℭ𝔬𝔪 𝔇𝔦𝔫𝔥𝔢𝔦𝔯𝔬, 𝔇𝔢𝔰𝔡𝔢𝔪 𝔇𝔞𝔰 𝔐𝔞𝔦𝔬𝔯𝔢𝔰 𝔏𝔲𝔵𝔲𝔯𝔦𝔞𝔰 𝔇𝔬 𝔐𝔲𝔫𝔡𝔬 💎\n\n🚧 *Os Membros Que Estão No Top 10 São Os Mais Queridos e Legais Do Grupo* 🚧\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `🪨🌹 *[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ ❄️ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `💵💸 *[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ 💰 *Dinheiro*: ${uang[i].uang}_\n┗⊱ 💳 *Credito*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 Ainda Não Criei O Top 10 Aguarde 🏆*`)
                }
				await limitAdd(sender)
				break
/*
]===============> MENU CREDITO, CONTA, LEVEL <================================================================================================================[
*/
                case 'creditos':
				case 'credito':
				   if (isBanned) return reply(ind.benned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'conta':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
			    const point = checkNONuser(sender)
				const rankss = checkNANuser(sender)
				const crimi = checkHITuser(sender)
				const aventure = checkAVEuser(sender)
				reply(ind.uangkau(pushname, sender, kantong, senti, role, aliansa, getLevelingLevel, emotion, point, rankss, crimi, aventure))
				break
				case 'level':
				if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 250 * (Math.pow(2, userLevel) - 1)
                resul = `*╔═══❖•ೋ° °ೋ•❖═══╗*\n               𝚂𝚝𝚊𝚝𝚞𝚜 𝙳𝚎 𝙻𝚎𝚟𝚎𝚕\n*╚═══❖•ೋ° °ೋ•❖═══╝*\n\n┣⊱ 🌟 *Nome* : ${pushname}\n┣⊱ 🌹 *Numero* : wa.me/${sender.split("@")[0]}\n┣⊱ 🔥 XP :  *${userXp}/${requiredXp}* 🎮\n┣⊱ 🍄 *Level* : ${userLevel}\n\n 🚧 _Fique Ativo No Grupo & Suba De Level Para Chegar Ao Topo_ 🚧`
                costum(resul, text, tescuk, per)
				break
/*
]===============> MENU PRESENTEAR <===============================================================================================================[
*/
				case 'presentear': 
				if (!isOwner) return reply(ind.ownero())
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`🚧 _O limite minimo de presentes é 1_ 🚧`)
                if (isNaN(jmla)) return reply(`🚧 _O presente deve ser um numero_ 🚧`)
                if (!nomerr) return reply(`🚧 *Você Usou O Comando de Forma Incorreta* 🚧\n\n🕋 Exemplo : ${prefix}presente @556290304536 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `🎁 _Limite De Cota De Presente_ 🎁\n\n ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 🎁 Limite De Cota De Presente 🎁 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`⛅ _O Numero ${nomerr} Ainda Não Se Cadastrou_ 🌨️`)
                        }
                break
/*
]===============> MENU DE TRANSFERENCIA DE CREDITO <===============================================================================================================[
*/
                case 'doarcredito':
				if (isBanned) return reply(ind.baned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destino = q.substring(0, q.indexOf('/') - 1)
                const tudo = q.substring(q.lastIndexOf('/') + 1)
				if(isNaN(tudo)) return await reply('🚧 _O Valor Tem Que Ser Um Número_ 🚧 ')
                if (checkATMuser(sender) < tudo) return reply(`🐡 *tem certeza?* 🐡`)
                const destinotf = `${destino.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudo
                hasiltf = tudo - fee
                bayarLimit(destinotf, hasiltf)
                confirmATM(sender, tudo)
                bayarLimit('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${destino}\n\n🧧 *Valor dado* : ${tudo}\n\n🧧 *Metade vai pro bolso do patrão* : ${fee}\n\n*🇯🇵🇧🇷 Universo Otaku 🇯🇵🇧🇷*`)	
                break
				case 'creditando':
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan1 = ('1')
                const tujuan11 = args[0].replace('@','')
				const tujuan11tf = tujuan11 + '@s.whatsapp.net'
                fee = 0 *  tujuan1
                hasiltf = tujuan1 - fee
                bayarLimit(tujuan11tf, hasiltf)
                bayarLimit('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Creditos 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan11}\n\n🧧 *Valor da transferência* : ${tujuan1} \n\n🧧 *Imposto* : ${fee}`)      
                await limitAdd(sender)
			break
				case 'creditando50':
				if (isBanned) return reply(ind.benned())
				if (isL50imit(sender)) return reply(ind.limitend(pusname))	
				if (!isRegistered) return reply(ind.noregis())
                const tujuan4 = ('50')
                const tujuan44 = args[0].replace('@','')
				const tujuan44tf = tujuan44 + '@s.whatsapp.net'
                fee = 0 *  tujuan4
                hasiltf = tujuan4 - fee
                bayarLimit(tujuan44tf, hasiltf)
                bayarLimit('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Creditos 🇯🇵🇧🇷 」*\n\n🧧 *de* : +${sender.split("@")[0]}\n\n🧧 *para* : +${tujuan44}\n\n🧧 *Valor da transferência* : ${tujuan4} \n\n🧧 *Imposto* : ${fee}`)      
                await l50imitAdd(sender)	
			break
/*
]===============> MENU TRANSFERENCIAS DINHEIRO <====================================================================================================[
*/
				case 'dinheiro':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuan00 = args[0].replace('@','')
                const jumblah0 = ('1000')
				if(isNaN(jumblah0)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblah0) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuan0tf = tujuan00 + '@s.whatsapp.net'
                fee = 0.30 *  jumblah0
                hasiltf = jumblah0 - fee
                addKoinUser(tujuan0tf, hasiltf)
                confirmATM(sender, jumblah0)
                addKoinUser('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuan00}\n\n💰 *Valor da transferência* : ${jumblah0}\n\n💰 *Imposto* : ${fee}`)
                break
			    case 'dinheiro+':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
			    const tujuan000 = args[0].replace('@','')
                const jumblah00 = ('10000')
				if(isNaN(jumblah00)) return await reply('*Tem que ser numeros*')	
                if (checkATMuser(sender) < jumblah00) return reply(`🐡 *Você nem tem esse dinheiro como quer transferi-lo* 🐡`)
                const tujuan00tf = tujuan000 + '@s.whatsapp.net'
                fee = 0.30 *  jumblah00
                hasiltf = jumblah00 - fee
                addKoinUser(tujuan00tf, hasiltf)
                confirmATM(sender, jumblah00)
                addKoinUser('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Transferencia Dinheiro 🇯🇵🇧🇷 」*\n\n💰 *de* : +${sender.split("@")[0]}\n\n💰 *para* : +${tujuan000}\n\n💰 *Valor da transferência* : ${jumblah00}\n\n💰 *Imposto* : ${fee}`)
                break
				case 'transferir':
				if (isBanned) return reply(ind.benned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('/') - 1)
                const jumblah = q.substring(q.lastIndexOf('/') + 1)
                if(isNaN(jumblah)) return await reply('🚧 *O valor deve ser um numero* 🚧')
                if (jumblah < 100 ) return reply(`🚧 O valor minimo para transferir é 100 🚧`)
                if (checkATMuser(sender) < jumblah) return reply(`🚧 Voce não tem dinheiro suficiente para fazer a transferencia 🚧`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.1 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('5562996831370@s.whatsapp.net', fee)
                reply(`*「 🌟 SUCESSO 🌟 」*\n\n🔥 *Transferencia de dinheiro foi bem sucedida* 🔥\n☀️ *De* ☀️ : +${sender.split("@")[0]}\n☀️ *Para* ☀️ : +${tujuan}\n☂️ *Valor* ☂️ : ${jumblah}\n☂️ *Imposto* ☂️ : ${fee}`)
                break
/*
]===============> MENU ADVENTURE POÇOES CURA  <===============================================================================================================[
*/
                 case 'comprarpoçao':
				 case 'comprarpoção':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.benned())
				payout1 = ('10')
				const koinpotionPerpotion = 1500
				const totalpotion = koinpotionPerpotion * payout1
				if ( checkATMuser(sender) <= totalpotion ) return reply(`🚧 _Você não tem Dinheiro Suficiente Para Comprar As Poçoes_ 🚧`)
				if ( checkATMuser(sender) >= totalpotion ) {
		        confirmATM(sender, totalpotion)
		        addPotioUser(sender, payout1)
			    await reply(`╔════════════════════\n║╭───────────────────\n║│➫ 🚧 *PAGAMENTO SUCEDIDO* 🚧\n║╰───────────────────\n╠═════════════════════\n║╭─────────────────\n║│➫ 🕋 *DE* : *Senhorita*\n║│➫ 🕋 *Para* : *${pushname}*\n║│➫ 🕋 *Quantidade* : *${payout1}*\n║│➫ 🕋 *Preço* : *${koinpotionPerpotion}/🚧 Poçoes *\n║│➫ 🕋 *Seu Dinheiro* : *${checkATMuser(sender)}*\n║│➫ 🕋 *Processo bem-sucedido*\n║│➫ *${createSerial(20)}*\n║╰───────────────────\n╚════════════════════\n`)
				} 
				break
				case 'poções':
				case 'poçoes':                     
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply(ind.benned())
				    checkPotion(sender)
					break
					case 'cura':   					
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply(ind.benned())
				    checkHeal(sender)
					break
				case 'usarpoção':
				case 'usarpoçao':
				    if (isBanned) return reply( ind.banned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
		            if (!isRegistered) return reply( ind.noregis())
		            const healperpotion = 1
		            const pot = healperpotion * 1
		            if (isPotion(sender)) return reply(`🚨 _Voce não tem mais poçoes compre mais ou consiga_ 🚨`)
		            potionAdd(sender, pot)
		            addHealUser(sender, 25)
		            await reply(`*「 🕋 Voce Usou Uma Poção 🕋 」*\n\n🐼 *Preço* : ${healperpotion}/🐤 25 Cura 🐤\n\n🚧 _O processo foi bem sucedido com o número do pagamento_ 🚧\n\n${createSerial(15)}`) 
                    await limitAdd(sender)
		            break
                    case 'aventura':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply( ind.banned())
					const limitrlfnz = getLimit(sender, daoly)						
                    if (!isGroup) {
		            (ind.groupo())
	                } else if (limitrlfnz !== undefined && ahoo - (Date.now() - limitrlfnz) > 0) {
                    reply('🚨 _Você Ja Se Aventurou Espere Um Pouco Para Se Aventurar Novamente_ 🚨')
                    } else {
					const tiroa = ["vive","morreu","vive","morreu","vive","morreu","vive","morreu","morreu","morreu","vive","vive","vive","vive","vive"]
const figra = ["roleta1","roleta2","roleta3"]
tpa = tiroa[Math.floor(Math.random() * (tiroa.length))]	
tpb = figra[Math.floor(Math.random() * (figra.length))]
                    papax = ['determinado em ficar mais forte','com medo de morrer','sem preparo nenhum','de pau duro','com fogo no rabo','excitado','com piscologico abalado','por que cançou de ficar em casa assistindo hentai','por que a webnamorada colocou chifres nele','depois de saber que podia usar chakra','depois de aprender a usar o KI','depois de saber que tinha um lugar secreto que podia viajar entre os mundos','depois de saber que sua familia foi sequestrada','para salvar o grupo','para encontrar o calice de sangue que dava a imortalidade','depois de se dar conta que era muito feio','para se tornar forte','depois que foi humilhado pela garota que gostava','para se divertir','para conhecer lugares','por que queria ar puro']
					const papaxx = papax[Math.floor(Math.random() * papax.length)]
				    ngab = ['Ja fazia 1 semana desde que ele saiu para sua aventura e derrepente no caminho avistou um ser que fez ele engolir a propria saliva, não seria outro se não UCHIHA MADARA, ele ficou sem saber o que fazer vendo aquele ser absoluta indo em direção a ele e.... ','Ja fazia 5 meses que nosso aventureiro estava viajando e ne uma noite encontrou assassinos a espreita lutou, defendeu, atacou e.....','Ja fazia 1 ano que nosso aventureiro partiu ele estava desidratado com fome nao tinha o que fazer e ele ......','derrepente chuvas de meteoros cai no lugar que nosso aventureiro esta e ......','FICOU FRIO MAIS TÃO FRIO QUE O DESERTO PODERIA CONGELAR EM SEGUNDOS','encontrou o ADM TA FUDIDO']
				    const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
					const dungeon =['no Covil Do Dragão Da Escuridão','no Portal Para Um Isekai','no Castelo Do Imperador Do Fogo','no Dungeon Temida Por Todos Conhecida Como Inferno','no Coliseu','no Olimpio Dos Deuses','no Cofre Onde A Riqueza É Infinita','dentro do Coração De Hades','Submerso no Castelo De Poseidon','na Onde O Destruidor De Mundos Descansa','Onde Deus Vive','no Lar Dos Herois','Onde Os Guerreiros Descansam','na Dungeon Dos Prazeres Mundanos','Onde se Esconde O Raio De Zeus','na Dungeon Da Medusa','para o Kraken O Temido','no Portal Dos Animes','na Dungeon Do Conhecimento','na Ilha Do Reino Encantado','no Refugio Dos Anjos','no Lar Da Inexistencia','Aonde Esconde O Poder Negro','Em Busca Do Poder Da Luz','Aonde Vive Athena','no Mundo Perigoso','no Mundo De Magia']
			        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
                    if (tpa == "morreu") {
				    await reply(`_🕋 ${pushname} saiu em uma aventura ${papaxx} 🕋_`)
				    await reply(`_🐤 ${sesuatu} 🐤_`)
				    await reply(`🚨 *Nãaaaao O que Sera Que Aconteceu Com Nosso Aventureiro Aaaaah* !! 🚨`)
				    anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasil = await getBuffer(randKey.result)
				    const adven = 0 - Math.ceil(Math.random() * 1500)
                    addLevelingXp(sender, adven)
				    const money = Math.ceil(Math.random() * 15000)
				    confirmATM(sender, money)
					const venturidadee = Math.ceil(Math.random() * 10)
					confirmAVE(sender, venturidadee)
				    client.sendMessage(from, hasil, image, { quoted: mek, caption: `◪ *「 💀 Morte Voce Perdeu 💀 」\n\n├─ ❏ ☠️ *A Que Pena Nosso Aventureiro Morreu ${ad}* ☠️\n├─ ❏ 💎 *Dinheiro : R$.${money}* 💎\n├─ ❏ 🎟️ *Pontos : ${venturidadee}* 🎟️\n├─ ❏ 🆙 *EXP : ${adven}Xp* 🆙` })
					} else if (tpa == "vive") {
	                await reply(`_🕋 ${pushname} saiu em uma aventura ${papaxx} 🕋_`)
					await reply(`_🐤 ${sesuatu} 🐤_`)
					await reply(`🚨 *Nãaaaao O que Sera Que Aconteceu Com Nosso Aventureiro Aaaaah* !! 🚨`)
					anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasils = await getBuffer(randKey.result)
					const poti = Math.ceil(Math.random() * 5)
				    addPotioUser(sender, poti)
					const advena = Math.ceil(Math.random() * 1500)
                    addLevelingXp(sender, advena)
				    const moneay = Math.ceil(Math.random() * 15000)
				    addKoinUser(sender, moneay)
					const venturidade = Math.ceil(Math.random() * 15)
					addViveUser(sender, venturidade)
					client.sendMessage(from, hasils, image, { quoted: mek, caption: `◪ *「 ✅ Voce Sobreviveu A Aventura ✅ 」\n\n├─ ❏ 🇧🇷 *Nosso Aventureiro Evolui Ele Sobreviveu ${ad}* 🇧🇷\n├─ ❏ 💎 *Dinheiro : R$.${moneay}* 💎\n├─ ❏ 🆙 *EXP : ${advena}Xp* 🆙\n├─ ❏ 🎟️ *Pontos : ${venturidade}* 🎟️\n└─ ❏ 🥤 *Potion : ${poti}* 🥤` })
					}
					}
					await addLimit(sender, daoly)
					await healAdd(sender)
					await limitAdd(sender)
				    break
					case 'aventura+':
				if (isBanned) return reply(ind.baned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('/')) return  reply(ind.wrongf())
                const destinoaa0 = q.substring(0, q.indexOf('/') - 1)
                const tudoaa00 = q.substring(q.lastIndexOf('/') + 1)
                if (checkATMuser(sender) < tudoaa00) return reply(`🐡 *tem certeza?* 🐡`)
                const destinoaa00tf = `${destinoaa0.replace("@", '')}@s.whatsapp.net`
                fee = 0 *  tudoaa00
                hasiltf = tudoaa00 - fee
                addViveUser(destinoaa00tf, hasiltf)
                confirmATM(sender, tudoaa00)
                addPontUser('556296831370@s.whatsapp.net', fee)
                reply(`*「 🇧🇷🇯🇵 Parabens 🇯🇵🇧🇷 」*\n\n⚠️ *de* : +${sender.split("@")[0]}\n\n⚠️ *para* : +${destinoaa0}\n\n⚠️ *Valor dado* : ${tudoaa00}`)
					break
				case 'exploradores':
				case 'aventureiros':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))	
			    if (!isBotGroupAdmins) return reply(ind.badmin())
				if (isBanned) return reply(ind.benned())
				ventura.sort((a, b) => (a.ventura < b.ventura) ? 1 : -1)
                  let leaderboardventura = '🧧 *🍄 𝕋𝕠𝕡 𝔻𝕠𝕤 𝔸𝕧𝕖𝕟𝕥𝕦𝕣𝕖𝕚𝕣𝕠𝕤 🍄* 🧧\n\n_Top 10 Dos Aventureiros Mais Fodas Do Grupo Insanidade Total Hunters Clase SSS_\n\n*Final do Ranking O Primeiro Coloca Ganhará um premio*\n\n _Possiveis Premios_ : *Dinheiro, Previlegios, Cargos ETC...*\n\n'
                let nom99 = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom99++                        
                        leaderboardventura += `🍂🍁 *[${nom99}]* wa.me/${ventura[i].id.replace('@s.whatsapp.net', '')}\n┣⊱🕋 *Pontos*: ${ventura[i].ventura}\n`
                    }
                    await reply(leaderboardventura)
                } catch (err) {
                    console.error(err)
                    await reply(`*🏆 10 participantes para criar o Top10 🏆*`)
                }
				    await limitAdd(sender)
					break

/*
]===============> MENU DE COMPRA DE TICKETS <===============================================================================================================[
*/				
				case 'comprar':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
			    payout = ('10')
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= total ){ 
				    confirmATM(sender, total)
			        bayarLimit(sender, payout)
					await reply(`*「 🇯🇵🇧🇷 Compre Creditos Aqui 🇯🇵🇧🇷 」*\n\n*Vendedor* : *Bot*\n*Comprador* : *${pushname}*\n\n*Quantidades De Creditos Comprado* : ${payout} \n\n*Preço do ticket* : ${koinPerlimit} / *🐼 Cada Credito 🐼*\n\n*Seu dinheiro final* : ${checkATMuser(sender)}\n\n${createSerial(15)}`)
					}
				break
				case 'comprarvip':
				if (isBanned) return reply(ind.benned())
				if (!isOwner) return reply(ind.ownerb())
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('*Seus creditos não são suficientes*')
				const koinPerlimit1 = 100
				const total1 = koinPerlimit1 * payout
				if ( checkATMuser(sender) <= total1) return reply(`*Seu dinheiro é insuficiente*`)
				if ( checkATMuser(sender) >= total1 ) {
					confirmATM(sender, total1)
					bayarLimit(sender, payout)
					await reply(`*「 PARABENS VOCE REALIZOU UMA COMPRA 」*\n\n*Vendedor* : Universo Otaku\n*Comprador* : ${pushname}\n*Compra* : ${payout} \n*Preço dos creditos* : ${koinPerlimit1}/credito\n*O resto dos seu dinheiro* : ${checkATMuser(sender)}\n\n🚧 *Numero de pagamento* 🚧\n${createSerial(15)}`)
				} 
				break	
/*
]===============> MENU OCR <=============================================================================================================================[
*/
				case 'ocr': 
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('marque uma foto ${prefix}ocr')
					}
					await limitAdd(sender)
				break
/*
]===============> MENU JOGO DA VELHA <============================================================================================================================[
*/ 
				case 'jogodavelha':
				if (!isRegistered) return reply(ind.noregis())
		    	if (isL50imit(sender)) return reply(ind.limitend(pusname))
				await l50imitAdd(sender)
const limitrly = getLimit(sender, dily)
if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "on") {
reply(`⚠️ *Ja tem uma pessoa jogando, espere sua vez.* ⚠️.`)
} else if (tttset.waitingTime == "on") {
reply(`⏳ *Estou Processando A Partida Anterior Espere Um Pouco* ⏳`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`🚧 *Bem Vindo Ao Jogo Da Velha Para Jogar Escolhe A Dificuldade* 🚧\n\n🕋 _Dificuldade Facil_ : ${prefix}jogodavelha easy\n🕋 _Dificuldade Normal_ : ${prefix}jogodavelha normal\n🕋 _Dificuldade Dificil_ : ${prefix}jogodavelha hard \n🕋 _Dificuldade Impossivel_ : ${prefix}jogodavelha impossible \n\n 🚨 *Boa Sorte* 🚨`)
} else if (limitrly !== undefined && upy - (Date.now() - limitrly) > 0) {
reply('⚠️ *Você ja jogou, espere 15 minutos para poder jogar novamente* ⚠️')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`🔱 *A batalha Iniciou* 🔱\n\n🆙 _Nivel Do Jogo_: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`⚠️ _Se Você Estiver Confuso sobre como jogar digite_ ${prefix}ajuda`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, dily)
}
break

case 'ajuda':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
client.sendMessage(from, ttthelp(prefix), text)
break

case 'perfil':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'melhores':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
//if (tictactoe.length < 3) return reply(`🥇 *Preciso de 3 Participantes Para Criar O Rank* 🥇`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 🌟 *𝒥𝒪𝒢𝒪 𝒟𝒜 𝒱𝐸𝐿𝐻𝒜 𝑅𝒜𝒩𝒦𝐼𝒩𝒢* 🌟 】\n\n 🕋 _Os De QI Mais Altos Estão Aqui_ 🕋\n\n_Possiveis Premios_ : *Dinheiro, Previlegios, Cargos ETC...*\n\n  '
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🦁 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ 🔥 Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ 🍂 Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ 💫 Empates: ${tictactoe[i].ties} 🌀\n│ ➣ 🚦 Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🍄 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ 🔥 Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ 🍂 Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ 💫 Empates: ${tictactoe[i].ties} 🌀\n│ ➣ 🚦 Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🐯 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ 🔥 Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ 🍂 Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ 💫 Empates: ${tictactoe[i].ties} 🌀\n│ ➣ 🚦 Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `🥇 *Preciso de 3 Participantes Para Criar O Rank* 🥇`, text, {quoted: mek})
}
break

case 'jogar':
if (!isRegistered) return reply(ind.noregis())
tttset.playertest = sender
if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "off") {
reply(`🎪 *Você não iniciou o jogo* 🎪`)
} else if (tttset.player != tttset.playertest) {
reply(`🚨 *Alguem Ja Esta Jogando, Espere* 🚨`)
} else if (tttset.tttantibug == "on") {
reply(`🚜 *Me Espere* 🚜`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`🚨 *Digite o comando* 🚨\n\nExemplo: ${prefix}jogar a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('_O espaço já foi ocupado\nTente outra coordenada_')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 50) 
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 150)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) 
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🆙 *Parabens Voce Ganhou* 🆙\n\n➣ ✅ _Sua Recompensa_: +${randomTTTXP} Pontos ✅`, text)
} else {
client.sendMessage(from, `💠 _DERROTOU A SENHORITA_ 💠`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - Math.floor(Math.random() * 25) 
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - Math.floor(Math.random() * 50)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - Math.floor(Math.random() * 200) 
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0 - Math.floor(Math.random() * 1500)
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `❌ *Voce Perdeu* ❌\n\n➣ ⚠️ _Voce Perde_: ${randomTTTXP} Pontos ⚠️`, text)
} else {
client.sendMessage(from, `✅ _Vitoria Da Senhorita_ ✅`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `⛱️ *Empatou* ⛱️\n\n➣ ⛲ _Tente Denovo_ ⛲`, text)
} else {
client.sendMessage(from, `🕋 _Ninguem Ganhou_ 🕋`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA
/*
]===============> MENU BRINCADEIRAS <============================================================================================================================[
*/ 
				case 'posso':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					posso = body.slice(1)
					const pos =['🇯🇵🇧🇷 Pode 🇯🇵🇧🇷','🇯🇵🇧🇷 Não pode 🇯🇵🇧🇷','🇯🇵🇧🇷 Irei pensar 🇯🇵🇧🇷','🇯🇵🇧🇷 Talvez 🇯🇵🇧🇷','🇯🇵🇧🇷 Voce decide dessa vez 🇯🇵🇧🇷','🇯🇵🇧🇷 Que pergunta sem noção 🇯🇵🇧🇷']
					const so = pos[Math.floor(Math.random() * pos.length)]
					client.sendMessage(from, 'Questão : *'+posso+'*\n\nResposta : '+ so, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'dado': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					   if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
                    const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
                    dadu = dadus[Math.floor(Math.random() * dadus.length)]
                    dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
                    client.sendMessage(from, dador, sticker, {quoted: mek})
					await limitAdd(sender)
                       break
					   case 'caraoucoroa': 
					   if (isLimit(sender)) return reply(ind.limitend(pusname))
					   if (isBanned) return reply(ind.benned())
                       if (!isRegistered) return reply(ind.noregis())
                       const cara = fs.readFileSync('./database/cara/cara.webp');
                       const coroa = fs.readFileSync('./database/cara/coroa.webp');
                       cararo = ["cara", "coroa"]
                       fej = cararo[Math.floor(Math.random() * cararo.length)]
                       gg = fej
                       reply(`*🚨 Você conseguiu 🚨* : ${fej}`)
                       cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
                       client.sendMessage(from, cararoa, sticker, {quoted: mek})
					   await limitAdd(sender)
                    break 
				case 'porcentagem':
				case 'quao':
				case 'sorte':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					sorte = body.slice(1)
					const sor =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','*Perdeu 🐣*','*Ganhou 🦁*']
					const te = sor[Math.floor(Math.random() * sor.length)]
					client.sendMessage(from, 'Questão : *'+sorte+'*\n\nResposta : '+ te+'%', text, { quoted: mek })
					break
				case 'quando':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					quando = body.slice(1)
					const qua =['*daqui 1*','*daqui 2*','*daqui 3*','*daqui 4*','*daqui 5*','*daqui 6*','*daqui 7*','*daqui 8*','*daqui 9*','*daqui 10*','*daqui 11*','*daqui 12*','*daqui 13*','*daqui 14*','*daqui 15*','*daqui 16*','*daqui 17*','*daqui 18*','*daqui 19*','*daqui 20*','*daqui 21*','*daqui 22*','*daqui 23*','*daqui 24*','*daqui 25*','*daqui 26*','*daqui 27*','*daqui 28*','*daqui 29*','*daqui 30*','*daqui 31*','*daqui 32*','*daqui 33*','*daqui 34*','*daqui 35*','*daqui 36*','*daqui 37*','*daqui 38*','*daqui 39*','*daqui 40*','*daqui 41*','*daqui 42*','*daqui 43*','*daqui 44*','*daqui 45*','*daqui 46*','*daqui 47*','*daqui 48*','*daqui 49*','*daqui 50*','*daqui 51*','*daqui 52*','*daqui 53*','*daqui 54*','*daqui 55*','*daqui 56*','*daqui 57*','*daqui 58*','*daqui 59*','*daqui 60*','*daqui 61*','*daqui 62*','*daqui 63*','*daqui 64*','*daqui 65*','*daqui 66*','*daqui 67*','*daqui 68*','*daqui 69*','*daqui 70*','*daqui 71*','*daqui 72*','*daqui 73*','*daqui 74*','*daqui 75*','*daqui 76*','*daqui 77*','*daqui 78*','*daqui 79*','*daqui 80*','*daqui 81*','*daqui 82*','*daqui 83*','*daqui 84*','*daqui 85*','*daqui 86*','*daqui 87*','*daqui 88*','*daqui 89*','*daqui 90*','*daqui 91*','*daqui 94*','*daqui 95*','*daqui 96*','*daqui 97*','*daqui 98*','*daqui 99*','*daqui 100*','*Iludido por mais de*']
					const ndo = qua[Math.floor(Math.random() * qua.length)]
					client.sendMessage(from, 'Questão : *'+quando+'*\n\nResposta : '+ ndo+' anos', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'casal':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				jds = []
			    const srot =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const jdii = groupMembers
				const koss = groupMembers
				const dopw = srot[Math.floor(Math.random() * srot.length)]
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `🍥 *Boa Sorte Para Esse Casal* 🍥\n\n*@${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]}*\n😻 _Tem uma chance de ficarem juntos de_\n\n♥️ *${dopw}* ♥️`
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
			case 'sexo':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				jds = []
			    nogio = body.slice(1)
			    const srotio =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const jdiiio = groupMembers
				const dopwio = srotio[Math.floor(Math.random() * srotio.length)]
				const akuuio = jdiiio[Math.floor(Math.random() * jdiiio.length)]
				teks = `🐼 *Suas chances de fazer ${nogio} com :*\n\n😈 *@${akuuio.jid.split('@')[0]}* 😈\n\n*São de 😳 ${dopwio} 😳*\n`
				jds.push(akuuio.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
				case 'puxar':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				jds = []
			    nogioq = body.slice(1)
			    const srotioq =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const jdiiioq = groupMembers
				const dopwioq = srotioq[Math.floor(Math.random() * srotioq.length)]
				const akuuioq = jdiiioq[Math.floor(Math.random() * jdiiioq.length)]
				teks = `🏮 *Olá @${akuuioq.jid.split('@')[0]}, ${pushname} Esta Querendo ${nogioq} Com Você* 🏮\n\n🚨 _Minha previsão de voces terem uma boa conversa é de_ 🚨\n\n*🔮 ${dopwioq} 🔮*\n`
				jds.push(akuuioq.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
                 break
				case 'antighost':
				if (!isGroupAdmins) return reply(ind.admin())
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				jds = []
				var ponte;
			    ponte = setInterval( () => {
				client.updatePresence(Presence.composing)
			const emojii =['🥂','🍷','🍩','🍙','🍥','🍟','🍱','🥤','🥢','🥡','🧉','🍰','🍜','🎻','🎯','🎮','🎪','🎧','🚧','🕋','🎑','🕋','🩸','🏮']
			const srotioqae =['te pegaria gostoso >:)','O que voce faria se ganha-se na megasena?','Voce sabia que esse grupo ja tem 6 anos','Voce é novo no grupo?','Meu nome é senhorita e estou aqui para te ajudar','Goku black é gay?','Somos decendente de primatas? eu não kkk e vc?','O que uma pessoa tinha que fazer para despertar seu interesse nela?','gosta de pipoca?','Qual sua fruta favorita?','Voce é sociavel?','O que vc gosta de fazer no seu dia a dia?','Voce é gentil ou frio?','Por que tem pessoas que matam as outras?','Qual o animal que voce tem mais medo?','Quantos anos voce tem?','Voce é virgem?','Qual sua comida favorita','Voce acredita no sobrenatural?','Voce tem chulé?','Me fala um anime shounen','Me fala um anime de romance','Me fale um anime de superpoderes','Qual melhor anime que voce ja assistiu','Um macaco pode ser mais inteligente que a gente?','Por que precisamos de ar para respirar?','Qual sua fruta favorita?','quanto é 7x7-2?','Por que ficamos com fome?','Estou doando um pc gamer tem interesse?','Gatinha no grupo','Gatinho no grupo','Voce sabe qual foi o primeiro país a reenvindicar a antartida?','Por que não conseguimos lavar totalmente o nossas costas?','qual é a capital do brasil?','qual é a capital dos estados unidos?','Como é chamado a modelo mais bonita do mundo?','voce é inteligente? me fala 5 girias de paulistano','O la em casa','nada que uma surra de piroca resolva','ontem tava vendo um anime brabo demais','bom dia','boa tarde','boa noite','como voce esta?','eu peguei sua irmã','fui na sua casa esses duas','acorda','ta na hora de conversar no grupo','vem pro grupo ta fazendo nada mesmo','pintinho pequeno','Voce ta muito ghost','Que tal conversar um pouco no grupo','Oi','tudo bem','como esta','Tempo que não vejo voce no grupo','Então Você é um ghost','Hmmm ghost que tal ser ativo?','Mano tu é?','Ja tomou banho hoje?','Ta comido hoje?','A vida é curta então fale no grupo enquanto á tempo','Não seja tão frio','Não seja tao quente','Fiquei sabendo que voce quase pegou a rabudinha 😳']
			const jdiiioqae = groupMembers
			const dopwioqae = srotioqae[Math.floor(Math.random() * srotioqae.length)]
			const emojo = emojii[Math.floor(Math.random() * emojii.length)]
			const akuuioqae = jdiiioqae[Math.floor(Math.random() * jdiiioqae.length)]
			teks = `${emojo} ${dopwioqae} *${akuuioqae.jid.split('@')[0]}*\n`
			jds.push(akuuioqae.jid)
			mentions(teks, jds, true)
			}, 500)
		    setTimeout( () => {
			clearInterval(ponte);
			teks = '🎃 *Antighost Desativado* 🎃'
			mentions(teks, jds, true)
			}, 10000)
				break
				case '👑':
				if (!isOwner) return reply(ind.ownerb())
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				jds = []
				var ponte;
			    ponte = setInterval( () => {
				client.updatePresence(Presence.composing)
			const emojiii =['🥂','🍷','🍩','🍙','🍥','🍟','🍱','🥤','🥢','🥡','🧉','🍰','🍜','🎻','🎯','🎮','🎪','🎧','🚧','🕋','🎑','🕋','🩸','🏮']
			const srotioqaei =['Parabens é seu dia de sorte você ganhou *(5 Pontos Tabela De Rank)*','Que demais voce ganhou *(50 Creditos)*','Ahahaha Sortudo Ganhou *(10 Pontos De Aventura)*','UUUUUOOOUUU Esse foi abençoado ganhou *(500 Creditos)*','Esta com sorte ganhou *(10.000 Em Dinheiro)*','Ahahaha Que Azar voce não ganhou nada kkk','Nossa voce é algo a mais em ganhou *(50.000 Em Dinheiro)*','Turururu detectei um sortudo ou uma sortuda ganhou *(100 Creditos)*','Voce esta muito ninja ganhou *(3 Pontos Na Tabela De Rank)*','Medo Medo Medo Sem Controle Um Ser Altamente Sortudo A Vista Ganhou *(100 Creditos, 4 Pontos De Rank, 8 Pontos De Aventura, 20.000 Em Dinheiro)*']
			const jdiiioqaei = groupMembers
			const dopwioqaei = srotioqaei[Math.floor(Math.random() * srotioqaei.length)]
			const emojoi = emojiii[Math.floor(Math.random() * emojiii.length)]
			const akuuioqaei = jdiiioqaei[Math.floor(Math.random() * jdiiioqaei.length)]
			teks = `🌟 *Dia De Sorte* 🌟\n\n${emojoi} *${akuuioqaei.jid.split('@')[0]}* ${dopwioqaei}\n\n⚠️ _Atenção : Voce tem que ir no pv do dono no prazo de 10 minutos depois que voce tiver sido sorteado para reinvindicar o premio, se passar de 10 minutos não ganhara o PREMIO._\n\n PV DO DONO SO CLICAR AQUI *wa.me/5562996831370*`
			jds.push(akuuioqaei.jid)
			mentions(teks, jds, true)
			}, 90000)
		    setTimeout( () => {
			clearInterval(ponte);
			teks = '✅ _Jogo Dia De Sorte Acabado_ ✅\n\n *(Quem Foi Sorteado Vai No Pv Do Dono Reinvindicar Seu Premio Antes Dos 10 Minutos)* 🚧\n\nPara ir no PV do Dono Pegar O Premio Clique Aqui *wa.me/5562996831370*'
			mentions(teks, jds, true)
			}, 315000)
				break
				case '👀':
				if (!isOwner) return reply(ind.ownerb())
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				jds = []
				var ponte;
			    ponte = setInterval( () => {
				client.updatePresence(Presence.composing)
			const emojiiio =['🥂','🍷','🍩','🍙','🍥','🍟','🍱','🥤','🥢','🥡','🧉','🍰','🍜','🎻','🎯','🎮','🎪','🎧','🚧','🕋','🎑','🕋','🩸','🏮']
			const srotioqaeio =['Eai Mano Tudo beleza?','*Como foi o seu dia conta para nos ai*','A velho podia contar uma historia a primeira que vem a sua mente','Qual a sua musica favorita conta ai','Opa iae Voce ainda não esta registrado no Bot? se registra ai procura um amigo para saber como se registra','Cara voce é ghost? se ta no grupo conversa pow ou sai fica empacando a vida de quem quer entrar','Detectei Um viadinho PiPiPiPi kkkkkkkkkk','Fala mano blz? cara eu comecei a ler uns manga mas sao mangas coreanos e chineses sao chamados manhwas ou manhua muito bom eu recomendo para voce um desses manhwas chama Solo leveling Pesquisa ai e começa ler vai adorar','Medo Medo Detectei Um Feião kk k k k','Eai mano fiz uma analise aqui e voce e um dos membros que o BIBIU mais pequeno do grupo','Opa eai turu bom?','Eu adoro membros ativos que tal ser um?','Pon Pon Pon Pon Detectei um membro comediante hahahah','Ei cara toma cuidado qualquer dia desses voce pode querer sair do armario','Voce esta bem brow?','Hoje é que dia?','Eu so queria uma rabudinha para me aliviar e vc?','Oi mano qual o seu nome?','Cara uma menina veio perguntar por voce no meu PV disse que era sua ex...','Voce tem cara nerd kakaka','Puts Brow Quanto Tempo?']
			const jdiiioqaeio = groupMembers
			const dopwioqaeio = srotioqaeio[Math.floor(Math.random() * srotioqaeio.length)]
			const emojoio = emojiiio[Math.floor(Math.random() * emojiiio.length)]
			const akuuioqaeio = jdiiioqaeio[Math.floor(Math.random() * jdiiioqaeio.length)]
			teks = `🍄 *Puxando Assunto Com Os Membros* 🍄\n\n${emojoio} *${akuuioqaeio.jid.split('@')[0]}* ${dopwioqaeio}\n\n🍂 _Ahahaha Chamando Os Membros_ 🍃`
			jds.push(akuuioqaeio.jid)
			mentions(teks, jds, true)
			}, 300000)
		    setTimeout( () => {
			clearInterval(ponte);
			teks = '✅ _Acabou o tempo_ ✅\n\n_PV DO DONO_ *wa.me/5562996831370*'
			mentions(teks, jds, true)
			}, 3600000)
				break
				case '👻':
				if (!isOwner) return reply(ind.ownerb())
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				jds = []
				var ponte;
			    ponte = setInterval( () => {
				client.updatePresence(Presence.composing)
			const emojiiio =['🥂','🍷','🍩','🍙','🍥','🍟','🍱','🥤','🥢','🥡','🧉','🍰','🍜','🎻','🎯','🎮','🎪','🎧','🚧','🕋','🎑','🕋','🩸','🏮']
			const srotioqaeio =['Eai Familia,\n\nQuem quiser adicionar algum amigo seu no grupo é so pedir algum adm pode ser no pv ou pedir no grupo mesmo marcando algum adm.','O grupo ja tem mais de 5 anos, nesse tempo trocamos varias vezes de grupo, nosso grupo ja teve 3 donos sendo o terceiro o atual :D','Oi turma tudo bom com voces? so queria dizer que qualquer problema avisar um de nossos adms, se alguem tiver adicionadno nossos membros ne outros grupos, ou alguem divulgando rpg no seu pv, ou tambem algum doido invadindo seu pv do nada :D','Fala tropa, se algum ADM agir desrespeitosamente com algum membro por favor contatar outro adm ou o dono do grupo vamos tomar as providencias necessarias.','Familia, se voces notarem um membro estranho no grupo com nome de trava zap que voces nao confia avisar um de nossos adms, não vamos deixar travarem o grupo 😎','No nosso humilde grupo, temos rankings, Rank do mais rico, Rank do level mais alto, Rank dos criminosos, Rank dos aventureiros, Rank de eventos e quizes, e Rank dos que manda mais mensagem no grupo :D','O dono gosta de recomendar Manhwas ( Manga coreano e chineses) quem gostar de ler, fale com ele, ele vai te recomendar varias obras-primas dahora que voce vai viciar.']
			const jdiiioqaeio = groupMembers
			const dopwioqaeio = srotioqaeio[Math.floor(Math.random() * srotioqaeio.length)]
			const emojoio = emojiiio[Math.floor(Math.random() * emojiiio.length)]
			const akuuioqaeio = jdiiioqaeio[Math.floor(Math.random() * jdiiioqaeio.length)]
			const akuuioqaeioe = jdiiioqaeio[Math.floor(Math.random() * jdiiioqaeio.length)]
			teks = `👑 *${akuuioqaeio.jid.split('@')[0]}* 👑\n\n${emojoio} ${dopwioqaeio}\n\n🍟 *${akuuioqaeio.jid.split('@')[0]}* 🍟`
			jds.push(akuuioqaeio.jid)
			jds.push(akuuioqaeioe.jid)
			mentions(teks, jds, true)
			}, 1200000)
				break
			case 'membros':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				jds = []
			    nogi = body.slice(1)
			    const sroti =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const srotii =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const srotiii =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const srotiiii =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const srotiiiii =['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','13%','14%','15%','16%','17%','18%','19%','20%','21%','22%','23%','24%','25%','26%','27%','28%','29%','30%','31%','32%','33%','34%','35%','36%','37%','38%','39%','40%','41%','42%','43%','44%','45%','46%','47%','48%','49%','50%','51%','52%','53%','54%','55%','56%','57%','58%','59%','60%','61%','62%','63%','64%','65%','66%','67%','68%','69%','70%','71%','72%','73%','74%','75%','76%','77%','78%','79%','80%','81%','82%','83%','84%','85%','86%','87%','88%','89%','90%','91%','92%','93%','94%','95%','96%','97%','98%','99%','100%']
				const jdiii = groupMembers
				const kossi = groupMembers
				const nego = groupMembers
				const nega = groupMembers
				const noga = groupMembers
				const dopwi = sroti[Math.floor(Math.random() * sroti.length)]
				const dopwii = srotii[Math.floor(Math.random() * srotii.length)]
				const dopwiii = srotiii[Math.floor(Math.random() * srotiii.length)]
				const dopwiiii = srotiiii[Math.floor(Math.random() * srotiiii.length)]
				const dopwiiiii = srotiiiii[Math.floor(Math.random() * srotiiii.length)]
				const akuui = jdiii[Math.floor(Math.random() * jdiii.length)]
				const diaai = kossi[Math.floor(Math.random() * kossi.length)]
				const branco = nego[Math.floor(Math.random() * nego.length)]
				const branca = nega[Math.floor(Math.random() * nega.length)]
				const bronca = noga[Math.floor(Math.random() * noga.length)]
				teks = `🔎 *Procurando por ${nogi}* 🔍\n\n _📝 Lista de membros achados e suas porcentagem 📝_\n\n1️⃣ *@${akuui.jid.split('@')[0]} ${dopwi}*\n2️⃣ *@${diaai.jid.split('@')[0]} ${dopwii}*\n3️⃣ *@${branco.jid.split('@')[0]} ${dopwiii}*\n4️⃣ *@${branca.jid.split('@')[0]} ${dopwiiii}*\n5️⃣ *@${bronca.jid.split('@')[0]} ${dopwiiiii}*\n`
				jds.push(akuui.jid)
				jds.push(diaai.jid)
				jds.push(branco.jid)
				jds.push(branca.jid)
				jds.push(bronca.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
/*
]===============> MENU ROUBAR, ESPANCAR <============================================================================================================================[
*/ 
	        case 'roubar':
			case 'estorqui':
		    case 'filar':
		     	if (isBanned) return reply(ind.benned())
			    if (!isNsfw) return reply(ind.nsfwoff())
		        if (!isRegistered) return reply(ind.noregis())
                const limitrlf = getLimit(sender, doily)						
                if (!isGroup) {
		        (ind.groupo())
	            } else if (limitrlf !== undefined && apy - (Date.now() - limitrlf) > 0) {
                reply('🚨 _Você Esta Preso Espere 10 MIN_ 🚨')
                } else {				
				const vitima = args[0].replace('@','')
                const alvo = vitima + '@s.whatsapp.net'	
                const dindin = ('2000')
                if (checkATMuser(sender) < dindin) return reply(`🍄 *Você não tem dinheiro suficiente para começar a vida no crime* 🍄`)				 
                const tiroa = ["vazio","vazio","vazio","poi","vazio","vazio","pow","pow"]
const figra = ["roleta1","roleta2","roleta3"]
tpa = tiroa[Math.floor(Math.random() * (tiroa.length))]	
tpb = figra[Math.floor(Math.random() * (figra.length))]
figb = ('🥷 _Você foi roubar e se deu mal kk_ 🥷')
if (tpa == "vazio") {
var morte = "🪵 _Suas Habilidades Estão Insanas_ 🪵️"
setTimeout( () => {
 ppg = Math.floor(Math.random() * 1500)
 tpo = Math.floor(Math.random() * 10)
 addKoinUser(sender, ppg)
 addKillUser(sender, tpo)
 confirmHIT(alvo, tpo)
 confirmATM(alvo, ppg)
reply(`🥋 _Você Conseguiu Roubar_ *R$${ppg}* _da sua vitima, Ganhou_ *${tpo}* _Pontos De Crimes_ 🥋️`)
}, 2300)
} else if (tpa == "pow") {
var morte = "🔪 _Sua vitima te superou_ 🔫"
setTimeout( () => {
ppg2 = Math.floor(Math.random() * 3000)
tpo =  Math.floor(Math.random() * 7)
confirmATM(sender, ppg2) 
addKillUser(alvo, tpo)
confirmHIT(sender, tpo)
addKoinUser(alvo, ppg2)
reply(`💣 _Você foi roubado pela sua propria vitima que vergonha perdeu_ *R$${ppg2}* _e sua vitima ganhou_ *${tpo}* _Pontos De Crimes_ 💣`)
}, 2300)
} else if (tpa == "poi") {
var morte = "⛓️ _A policia te encontrou_ ⛓️"
setTimeout ( () => {
ppg3 = Math.floor(Math.random() * 5000)
tph = Math.floor(Math.random() * 8)
confirmATM(sender, ppg3) 
confirmHIT(sender, tph)
addLimit(sender, doily)
reply(`🚔 _A Policia Te Pegou E Você Foi Preso E Ela Confiscou_ *R$${ppg3}* _De Você, Você Perdeu_ *${tph}* _Pontos De Crimes_ 🚔`)
}, 2300)
}
}

            break   
            case 'esfaquear':			
			case 'balear':
			case 'espancar':
			case 'arrombar':
			case 'atirar':
		     	if (isBanned) return reply(ind.benned())
			    if (!isNsfw) return reply(ind.nsfwoff())
				if (isL50imit(sender)) return reply(ind.limitend(pusname))
		        if (!isRegistered) return reply(ind.noregis())
				const ixio = getLimit(sender, deely)						
                if (!isGroup) {
		        (ind.groupo())
	            } else if (ixio !== undefined && cdd - (Date.now() - ixio) > 0) {
                reply('🚨 _Você Esta Agredindo Muito Rapido Espere 1 MIN_ 🚨\n\n_Se Voce Foi Agredido Espere 30 MIN Para Seus Ferimentos Curarem_')
                } else {
				const morto = args[0].replace('@','')
                const cadaver = morto + '@s.whatsapp.net'	
                const limitrlffy = getLimit(cadaver, deely)						
                if (!isGroup) {
		        (ind.groupo())
	            } else if (limitrlffy !== undefined && opy - (Date.now() - limitrlffy) > 0) {
                reply('🚨 _Seu Alvo Ja Foi Agredido Espere 30 MIN Para Agredi-lo Novamente_ 🚨')
                } else {		
                const morto = args[0].replace('@','')
                const cadaver = morto + '@s.whatsapp.net'				
                const ptscrime = ('10')
                if (checkHITuser(sender) < ptscrime) return reply(`🍄 *Seus Pontos De Crimes Não São Suficientes Para Voce Ferir Alguem* 🍄`)		
				ppw = Math.floor(Math.random() * 10)
                confirmHIT(sender, ppw)		
                const tiroaa = ["pow","vazio","vazio","pow","vazio","pow"]
const figraa = ["roleta1","roleta2","roleta3"]
tpa = tiroaa[Math.floor(Math.random() * (tiroaa.length))]	
tpb = figraa[Math.floor(Math.random() * (figraa.length))]
figb = ('🥷 _Sua Vitima Escapou_ 🥷')
if (tpa == "vazio") {
var morte = "🪵 _Suas Habilidades Estão Insanas_ 🪵️"
setTimeout( () => {
 ppg = Math.floor(Math.random() * 15000)
 ppa = Math.floor(Math.random() * 100)
 tpo = Math.floor(Math.random() * 20)
 addKoinUser(sender, ppg)
 addKillUser(sender, tpo)
 confirmATM(cadaver, ppg)
 bayarLimit(sender, ppa)
 addLimit(cadaver, deely)
reply(`☠️💀 _Você Conseguiu ${command} o seu alvo e ainda conseguiu_ *R$${ppg}* _da sua vitima, Ganhou_ *${tpo}* Pontos De Crimes & ${ppa} Creditos_ ☠️💀`)
}, 2300)
} else if (tpa == "pow") {
var morte = "🔪 _Sua vitima te superou_ 🔫"
setTimeout( () => {
addLimit(sender, deely)
reply(`🍥 _Sua Vitima Dessa Vez Conseguiu Escapar_ 🍥`)
}, 2300)
}
}
}
await l50imitAdd(sender)
            break 
            case 'detectando':
		     	if (isBanned) return reply(ind.benned())
                if (!isRegistered) return reply( ind.noregis())
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('🪵 *Procurando a pessoa com a melhor porcentagem* 🪵')
                await reply(`☁️ _Essa foi a pessoa que encontrei que se adequada ao que voce pediu_ ☁️ wa.me/${anug}`)
                await reply( `🍄 *Pessoa Detectada* 🍄`)
            break
/*
]===============> MENU APOSTAS <=====================================================================================================================[
*/			
			case 'apostar':
					if (isL50imit(sender)) return reply(ind.limitend(pusname))
		            if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.benned())
					const limitrla = getLimit(sender, daily)
	                if (!isGroup) {
	             	(ind.groupo())
	                } else if (limitrla !== undefined && cdd - (Date.now() - limitrla) > 0) {
                    reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
                    } else {
					reply(`🕋 Aposta Creditos 🕋\n\n🚧 *Voce Apostou 50 Creditos* 🚧\n\n🚧 _Você ganhou_ *${nayla3} Creditos* 🚧`)
                    bayarLimit(sender, nayla3) 
					await addLimit(sender, daily)
		            }
					await l50imitAdd(sender)
                    break
			case 'apostar$':
			case 'aposta$':
		      if (isBanned) return reply(ind.benned())
		      if (!isRegistered) return reply(ind.noregis())
              if (isL10imit(sender)) return reply(ind.limitend(pusname))
			  const limitrlaxx = getLimit(sender, daily)
	          if (!isGroup) {
		      (ind.groupo())
	          } else if (limitrlaxx !== undefined && cdd - (Date.now() - limitrlaxx) > 0) {
              reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
              } else {
                      const maii =[Math.ceil(Math.random() * 13000),5000,Math.ceil(Math.random() * 9000)]
                      const mining2 = maii[Math.floor(Math.random())]
                      addKoinUser(sender, mining2)
                      await reply(`*Ha ha ha, ${pushname} voce esta com sorte? ${mining2} R$*`)
			  await addLimit(sender, daily)
			  }
		      await l10imitAdd(sender)
		      break
			  case 'apostar$$':
			  case 'aposta$$':
		      if (isBanned) return reply(ind.benned())
		      if (!isRegistered) return reply(ind.noregis())
              if (isL50imit(sender)) return reply(ind.limitend(pusname))
			  const limitrlaxxx = getLimit(sender, daily)
	          if (!isGroup) {
		      (ind.groupo())
	          } else if (limitrlaxxx !== undefined && cdd - (Date.now() - limitrlaxxx) > 0) {
              reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
              } else {
                      const maiii =[Math.ceil(Math.random() * 45000),25500,Math.ceil(Math.random() * 30000)]
                      const mining2i = maiii[Math.floor(Math.random())]
                      addKoinUser(sender, mining2i)
                      await reply(`*Ha ha ha, ${pushname} voce esta com sorte? ${mining2i} R$*`)
			  await addLimit(sender, daily)
			  }
		      await l50imitAdd(sender)
		      break
			case 'jogodafruta':  
                    if (isL100imit(sender)) return reply(ind.limitend(pusname))
		            if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.benned())
					const limitrlb = getLimit(sender, daily)
	                if (!isGroup) {
	             	(ind.groupo())
	                } else if (limitrlb !== undefined && cdd - (Date.now() - limitrlb) > 0) {
                    reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
                    } else {
					client.updatePresence(from, Presence.composing)
                     reply('🎒 _Jogo Da fruta Caçanique_ 🎒')
					 setTimeout( () => {
                   client.updatePresence(from, Presence.composing)
                   slot	= `🕋 *Bem Vindo Ao Mundo Das Apostas* 🕋\n\n`					
				   slot += `*======================*\n` 
				   slot += `*| ${slot11} | ${slot22} | ${slot33} |* _Ganha: *100*  Creditos_\n`
				   slot += `*| ${slot44} | ${slot55} | ${slot66} |* _Ganha: *1000* Creditos_\n`
				   slot += `*| ${slot77} | ${slot88} | ${slot99} |* _Ganha: *500* Creditos_\n`				   
				   slot += `*======================*\n`
				   slot += `✅ *Voce so ganha no HORIZONTAL* ✅\n\n`
				   slot += `*🚧 Como Jogar : Você precisa tirar 3 frutas iguais da mesma fileira*\n\n`
				   slot += `*⚠️ Se Você Ganhar, Marque O Dono Para Ele Te Dar O Premio. ⚠️*\n`
				   client.sendMessage(from, slot, text, {quoted: mek})
				   }, 20000)
				   setTimeout ( () => {
		           client.updatePresence(from, Presence.composing)
		           reply('🕋 _Processando sua entrada_ 🕋')
		           }, 10000)
				   await addLimit(sender, daily)
		            }
				   await l100imitAdd(sender)
				   break
		     case 'roletadasorte':
		if (isBanned) return reply(ind.benned())	
		if (isL50imit(sender)) return reply(ind.limitend(pusname))
		if (!isRegistered) return reply(ind.noregis())
		const limitrl = getLimit(sender, daily)
	    if (!isGroup) {
		(ind.groupo())
	    } else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
        reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
        } else {
		client.updatePresence(from, Presence.composing)
                reply('🎒 _Bem Vindo A Roleta Da Sorte_ 🎒')
                setTimeout( () => {
                client.updatePresence(from, Presence.composing)					
	        floop =['25','25','25','25','25','0','25','0','500','0','400','0','0','300','0','0','0','10','50','100','200','5','0','50','0','5','10','0','0']
	        const papati9 = floop[Math.floor(Math.random() * floop.length)]
	            bayarLimit(sender, papati9)
		    reply(`🌟 *RESULTADO* 🌟\n\n 🔥 _Valor Apostado_ 🔥: 50\n🔥 _Valor Ganhou_ 🔥: ${papati9}`)
		}, 20000)
		setTimeout ( () => {
		client.updatePresence(from, Presence.composing)
		reply('🕋 _Girando A Roleta : Voce tem uma chances de ganhar ate 500 creditos ne uma só aposta_ 🕋')
		}, 10000)
                await addLimit(sender, daily)
		}
                await l50imitAdd(sender)
                break
			case 'creditosduplo':
				if (isBanned) return reply(ind.benned())	
				if (isL50imit(sender)) return reply(ind.limitend(pushname))
				if (!isRegistered) return reply(ind.noregis())
				const limitrlc = getLimit(sender, daily)
	            if (!isGroup) {
		        (ind.groupo())
	            } else if (limitrlc !== undefined && cdd - (Date.now() - limitrlc) > 0) {
                reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
                } else {
				client.updatePresence(from, Presence.composing)
                reply('🎒 _Analisando Sua Sorte_ 🎒')
                setTimeout( () => {
                client.updatePresence(from, Presence.composing)					
			    floop =['0','100','25','0']
			    const papati = floop[Math.floor(Math.random() * floop.length)]
				const totall10 = papati
				if ( checkATMuser(sender) <= totall10) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= totall10 ){ 
				    confirmATM(sender, totall10)
			        bayarLimit(sender, papati)
					reply(`🌟 *RESULTADO* 🌟\n\n 🔥 _Valor Apostado_ 🔥: 50\n🔥 _Valor Ganhou_ 🔥: ${papati}`)
				}
				}, 20000)
				setTimeout ( () => {
				client.updatePresence(from, Presence.composing)
				reply('🕋 _Processando A Quantidade_ 🕋')
				}, 10000)	
				await addLimit(sender, daily)
	         	}
                await l50imitAdd(sender)				
				break
				case 'caçanique':
if (isBanned) return reply(ind.benned())	
if (isDeely) return reply(ind.matador())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const limitrln = getLimit(sender, daily)
if (!isGroup) {
(ind.groupo())
} else if (limitrln !== undefined && cdd - (Date.now() - limitrln) > 0) {
reply('🚧 *Voce ja apostou espera 1 minutos para apostar novamente* 🚧')
} else {
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 1000)
ppg3 = Math.floor(Math.random() * 600)
ppg2 = 0 - Math.floor(Math.random() * 200)
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "🎪 *Parabens Esta Com Sorte Voce Ganhou* 🎪" 
} else {
var vitr = "🥁 *A Que Pena Voce Perdeu Tente Denovo Daqui 1 Minuto* 🥁"
}
const slott = 
`⛲ *Bem Vindo Meu Caro Apostador* ⛲\n\n😈 _Aqui Voce Aposta Para Ganhar XP Ou Tbm Perder hehe_ 😈 \n\n🎮 _Para Voce Ganhar Precisa Tirar 3 Frutas Iguais_ 🎮\n\n🎮 _As Apostas consomem 1 Credito seu_ 🎮\n\n
🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰
🎰      *[🎪 Caçanique 🎪 | ANIMES ]*        
🎰                                            
🎰                                            
🎰        *| ${somtoy} |  ◄━━┛*
🎰            
🎰                                           
🎰      *[🎪 Caçanique 🎪 | ANIMES ]*        
🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰
                     
*╚═══❖•ೋ° °ೋ•❖═══╝*

${vitr}`
if (vitr == "🎪 *Parabens Esta Com Sorte Voce Ganhou* 🎪") {
setTimeout( () => {
addLevelingXp(sender, ppg)
bayarLimit(sender, ppg3)
reply(`🕋 *Você ganhou ${ppg} em XP e ${ppg3} em Credito* 🕋`)
}, 1100)
} if (vitr == "🥁 *A Que Pena Voce Perdeu Tente Denovo Daqui 1 Minuto* 🥁") {
setTimeout( () => {
addLevelingXp(sender, ppg2)
addLimit(sender, daily)
reply(`🕋 *Você perdeu ${ppg2} em XP* 🕋`)
}, 1100)
}
client.sendMessage(from, slott, text, {quoted: mek})
}
await limitAdd(sender)
break
				case 'creditogratis':
				case 'creditosgratis':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
				const limitrld = getLimit(sender, deily)
	            if (!isGroup) {
		        (ind.groupo())
	            } else if (limitrld !== undefined && opy - (Date.now() - limitrld) > 0) {
                reply('🚧 *Voce ja resgatou seus creditos gratis espera 30 minutos para resgatar novamente* 🚧')
                } else {
				client.updatePresence(from, Presence.composing)
                reply('🎒 _Analisando Sua Sorte_ 🎒')
                setTimeout( () => {
                client.updatePresence(from, Presence.composing)					
			    floopx =['0','100','25','0','50','0','1','0','10','0','0','50','10','1','5','0','5','10','0','0','0','0','500','0','0','0','20','0','0','0','30']
         	    const papatix = floopx[Math.floor(Math.random() * floopx.length)]
				const totall10x = papatix
				if ( checkATMuser(sender) <= totall10x) return reply(`💰 *Seu dinheiro não é suficiente* 💰`)
				if ( checkATMuser(sender) >= totall10x ){ 
				    confirmATM(sender, totall10x)
			        bayarLimit(sender, papatix)
					reply(`🌟 *Creditos Gratis* 🌟\n\n🌟 _Valor Ganhou_ 🌟: ${papatix}`)
				}
				}, 20000)
				setTimeout ( () => {
				client.updatePresence(from, Presence.composing)
				reply('🕋 _Processando A Quantidade_ 🕋')
				}, 10000)	
				await addLimit(sender, deily)
	         	}				
				break
				case 'jogando':
if (isBanned) return reply(ind.benned())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply('*Escreve: pedra, papel ou tesoura na frente do comando*')
const limitrlv = getLimit(sender, daily)
if (!isGroup) {
(ind.groupo())
} else if (limitrlv !== undefined && cdd - (Date.now() - limitrlv) > 0) {
reply('🚧 *Perdeu espera 1 minutos para jogar novamente* 🚧')
} else {
ppt = ["pedra","papel","tesoura","tesoura","pedra","papel","tesoura","tesoura","pedra","papel","tesoura","tesoura","pedra","papel","papel","papel","tesoura","tesoura","pedra","pedra","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 200)
ppp = Math.floor(Math.random() * 5)
ppgb = Math.floor(Math.random() * 1000)
ppgc = 0 - Math.floor(Math.random() * 1000)
ppgo = 0 - Math.floor(Math.random() * 80)
pptb = ppy
pph = `⚾ _Boa Voce Ganhou ${ppg} em XP e R$${ppgb} e ${ppp} de credito Sua Reação E Reflexo São Excelentes_ ⚾`
ppha = `🎾 _Hahahaha Voce Perdeu ${ppgo} em XP e R$ ${ppgc} Treine Mais Depois Venha Tentar DNV_ 🎾`
pphb = `🤿 _Empate HAHAHAHA Empatou Cmg Muito Bom Voce_ 🤿`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {

var tes = "Vitória do jogador"

}
if (vit == "derrota" ) {
var tes = "A vitória é da Senhorita"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`🎮 *Jogo Consome 1 De Credito Seu* 🎮\n\n*🕹️ Senhorita jogou: ${pptb} 🕹️*\n\n*🕹️ O jogador jogou: ${args} 🕹️*\n\n🎊 ${tes} 🎊`)
if (tes == "Vitória do jogador") {
addLevelingXp(sender, ppg)
addKoinUser(sender, ppgb)
bayarLimit(sender, ppp)
reply(pph)
}
if (tes == "A vitória é da Senhorita") {
addLimit(sender, daily)
confirmATM(sender,ppgc)
addLevelingXp(sender, ppgo)
reply(ppha)
}
if ( tes == "O jogo terminou em empate") {
reply(pphb)
}
}
await limitAdd(sender)
break
/*
]===============> MENU FIGURINHAS <=====================================================================================================================[
*/
				case '🐯': 
				case '🦁':
				case 's': 
				if (isBanned) return reply(ind.benned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			        await limitAdd(sender)		 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(ind.stikga)
					})
					.on('end', function () {
					console.log('MELHOR GRUPO DE ANIME UNIVERSO OTAKU :D')
					client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(ind.stikga)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`⚠️ *Falha, ao converter imagem ${tipe} em figurinha* ⚠️`)
					})
					.on('end', function () {
					console.log('MELHOR GRUPO DE ANIME UNIVERSO OTAKU :D')
					client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`🚧 _Envie A Imagem Com O Comando ${prefix}🦁_ 🚧`)
					}
					break
			case 'gift':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`E o texto? Ù.ú\n*exemplo ${prefix}gift rgb*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				break 
			case 'anime😢':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=Tobzzz17', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'anime+18':
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=Tobzzz17', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animekiss':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=Tobzzz17', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animegif':
				if (isBanned) return reply(ind.benned())	
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=Tobzzz17', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
/*
]===============> MENU VOZ EDIT <===========================================================================================================================[
*/
				case 'voz':
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isL100imit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, '⚜️ *Codigo idioma necessario* ⚜️', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '🇧🇷 *qual texto voce esta criando? minha? voz?* 🇯🇵', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('*bem falhe, repeti dnv* 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(':(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await l100imitAdd(sender)
				break
/*
]===============> MENU SIMI <============================================================================================================================[
*/
                  case 'senhorita':
                if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
client.updatePresence(from, Presence.composing)
texto = args.join(' ')
sim = await fetchJson(`https://api.simsimi.net/v1/?text=${texto}&lang=pt`)
smuu = (`*🐼 ${sim.success} 🐼*`)
client.sendMessage(from, smuu, MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
},
"title": `[̲̅υ̲̅и̲̅i̲̅v̲̅є̲̅я̲̅ร̲̅σ̲̅ ̲̅σ̲̅т̲̅α̲̅k̲̅υ̲̅] ❣️`,
"description": `${texto}`,
"currencyCode": '',
"priceAmount1000": "999999999999999999999",
"retailerId": 'TOM',
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
})
await limitAdd(sender)
break
/*
]===============> MENU TOIMG & TOGIF <=============================================================================================================================[
*/
				case 'toimg':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('*Marca uma figurinha* !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮?? 𝗷𝗮𝗱𝗶 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break
				case 'togif': 
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply(ind.benned())
if (!isRegistered) return reply(ind.noregis())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(ind.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
await limitAdd(sender)
break
/*
]===============> MENU ADICIONAR PROMOVER DEMITIR  <======================================================================================================================[
*/ 
				case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque Alguem*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Rebaixado com sucesso :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*O* @${mentioned[0].split('@')[0]}  *Acabou de perder o ADM*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'contratar':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque Alguem*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Contratado com sucesso* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Agora* @${mentioned[0].split('@')[0]} foi contratado como ADM* 🐼`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'ban':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque Alguem*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Desculpe mas você será banido :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`😨😨😨 @${mentioned[0].split('@')[0]} *foi banido 🦊* `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
/*
]===============> MENU UP <==============================================================================================================================[
*/
				case 'up':
				      if (isBanned) return reply(ind.benned())
                      if (!isRegistered) return reply(ind.noregis())
                      if (isL50imit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`⚠️ *Desculpe o evento não foi ativado pelo dono* ⚠️`)
                      if (isOwner) {
                      const one = 80
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 0)
                      reply(`*Nivel desconhecido, mais ${one}XP para você* ⚜️`)
                      }else{
                      const mining = Math.ceil(Math.random() * 80)
                      addLevelingXp(sender, mining)
                      await reply(`🆙 *Parabens* 🆙 *${pushname}* *🆙 voce pega xp 🆙* *${mining}Xp*`)
                      }
                    await l50imitAdd(sender)
					break
/*
]===============> MENU ABRIR E FECHAR GRUPO <===============================================================================================================================[
*/
				case 'grupo':
				case 'gp':
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'abrir') {
					    reply(`🦊 *Grupo aberto* 🦊`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`🐶 *Grupo fechado* 🐶`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break
/*
]===============> MENU RECURSOS <=========================================================================================================================================[
*/				
				case 'join':
				if (!isOwner) return reply(ind.ownerb())
				const joen = await client.acceptInvite (body.slice(32))
				reply("SUCCESSO JUNTOU-SE : *" + joen.gid + "*" )
				break
				case 'consulte':
				case 'more':
				    if (isBanned) return reply(ind.benned())
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('/')) return  reply(`*USAR* / *PARA LIMITADORES*`)
                    const text1 = q.substring(0, q.indexOf('/') - 0)
                    const text2 = q.substring(q.lastIndexOf('/') + 1)
                    reply( text1 + readmore + text2)
					await limitAdd(sender)
                    break
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '*Mudou com sucesso o nome do grupo*', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '*Mudou com sucesso a descrição do grupo*', text, {quoted: mek})
					break
/*
]===============> MENU BEMVINDOS <=============================================================================================================================[
*/
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('🚧 _Ja Esta Ativo_ 🚧')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*❬ 🌟 SUCESSO 🌟 ❭* 🕋 _Comando De Boas Vindas Esta Ativo Nesse Grupo_ 🕋 ')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*❬ 🍱 SUCESSO 🍱 ❭*  🌹 _Comando De Boas Vindas Esta Desativado Nesse Grupo_ 🌹 ')
					} else {
						reply(ind.satukos())
					}
					break 
/*
]===============> MENU NSFW <==================================================================================================================================[
*/
				case 'criminal':
				    if (!isOwner) return reply(ind.ownerb())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('🔑 *Coloca 1 ou 0 na frente com espaço* 🔑')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ *Sucesso* ❭ *🔥 O Crime Esta Liberado Nesse Grupo 🔥*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ *Sucesso* ❭ 🥶 *O Crime Voltou A Ser Proibido Nesse Grupo* 🥶')
					} else {
						reply(ind.satukos())
					}
				break
/*
]===============> MENU AFK <==================================================================================================================================[
*/
				case 'afk':
	                if (!isRegistered) return reply(ind.noregis())
	                if (!isGroup) return reply(ind.groupo())
	                if (isAfkOn) return reply(ind.afkOnAlready())
	                if (isLimit(sender)) return reply(ind.limitend(pushname))
	                limitAdd(sender)
	                reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(ind.afkOn(pushname, reason))
	            break
/*
]===============> MENU LEVELING <=================================================================================================================================[
*/
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'ativar') {
                if (isLevelingOn) return reply('🚧 *Use o comando ativar ou desativar na frente com espaço* 🚧')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'desativar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
/*
]===============> MENU ANTIPALAVROES <=========================================================================================================================================[
*/
				case 'antipalavroes':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'ativar') {
                if (isBadWord) return reply('*🚧 Anti Palavroes Ja Esta Ativo 🚧*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`🔥 _Anti Palavroes Esta Ativado_ 🔥`)
              	  } else if (args[0] === 'desativar') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`🕋 _Anti Palavroes Esta Desativado_ 🕋`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
/*
]===============> MENU RECURSOS <=============================================================================================================================[
*/
				case 'linkgp':
				    if (isBanned) return reply(ind.benned())
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink do Grupo *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'marcar': 
				    if (isBanned) return reply(ind.benned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ 🌟 🌹 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'delete':
				case 'del':
				case 'd':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
                await limitAdd(sender)
				break 
/*
]===============> MENU ANTIPALAVROES <=============================================================================================================================[
*/
				case 'addpalavra':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `🚧 _Como Adicionar As Palavras ${prefix}addpalavra idiota_ 🚧`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('🌟 *Palavra Adicionada Com Sucesso* 🌟')
                    break
                case 'delpalavra':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `🚧 _Como Remover As Palavras ${prefix}delpalavra idiota_ 🚧`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('🌟 *Palavra Removida Com Sucesso* 🌟')
                    break 
                case 'palavroes':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.benned())
				    if (!isRegistered) return reply(ind.noregis())
					teks = '🕋 ℙ𝕒𝕝𝕧𝕣𝕒𝕤 ℚ𝕦𝕖 ℕ𝕒̃𝕠 ℙ𝕠𝕕𝕖 𝕊𝕖𝕣 𝔻𝕚𝕥𝕒 🕋\n\n'
					for (let awokwkwk of bad) {
						teks += `➸ 🔥 ${awokwkwk}\n`
					}
					teks += `\n🌹 𝚃𝚘𝚝𝚊𝚕 🌹 : *${bad.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": bad } })
					await limitAdd(sender)
                    break 
                
                	
				//admin feature 
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
/*
]===============> MENU MUDAR RESPOSTAS <=======================================================================================================================[
*/
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`mensagem mudada com sucesso : ${cr}`)
					await limitAdd(sender)
					break
/*
]===============> MENU UPADOR DE LEVEL <==========================================================================================================================[
*/
			  	case 'upador':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('🦄 *Up Esta Ativo No Grupo* 🦄')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨cesso ❭ 🐮 Upador esta ativado nesse grupo')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦ucesso ❭ 🐮 Upador esta desativado nesse grupo*')
					} else {
						reply(ind.satukos())
					}
					break
/*
]===============> MENU ANTILINK <================================================================================================================================================[
*/
					case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.ownerg())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*🚧 Anti Link Ja Esta Ativado 🚧*')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 🔥 Ativado 🔥 ❭ ANTI LINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 🔥 Desativado 🔥 ❭ ANTI LINK*')
					} else {
						reply(ind.satukos())
					}
					break
/*
]===============> MENU RECURSOS <=========================================================================================================================================[
*/
				case 'perfilbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`envie a imagem escrevendo ${prefix}setbotpp`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Mudado com sucesso')
					break 
				case 'perfilgp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('Perfil do grupo alterado com sucesso')
					break				
				case 'sair': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(from))
					break 
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`prefix mudado ${prefix} SUCCESSO!`)
					break 
				case 'mudarcredito':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('creditos deve ser um numero')
                    memberlimit = args[0]
                    reply(`creditos mudado ${memberlimit} SUCCESSO!`)
				break 
				case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
/*
]===============> MENU ONLINE <====================================================================================================================================[
*/
        		case 'online': 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
        		if (isBanned) return reply(ind.benned())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, '*🕋 Lista De Pessoas Online No Grupo 🕋*\n\n' + online.map(v => '*-* 🔛 @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				await limitAdd(sender)
				break 
				case '=>':
				if (!isOwner) return reply(ind.ownerb())
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
				break
/*
]===============> MENU AUDIOS IMAGENS E VIDEOS <============================================================================================================[
*/
				case 'audio':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.benned())
				client.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('⚠️ *Você tem que marcar um video* ⚠️')
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('🚧 *ERROR* 🚧:(')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break 
				case 'audiolento':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break

				case 'audiofast':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break
				case 'audiogordo':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break
				case 'audiobaixo':   			
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.benned())				
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break
				case 'adaud':
				if (isL100imit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('🚧 _Marque Um Audio_ 🚧')
					svst = body.slice(7)
					if (!svst) return reply('🚧 _De Um Nome Para O Audio_ 🚧')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `🌳 *Audio Adicionado com Sucesso digite ${prefix}audios* 🌳`, MessageType.text, { quoted: mek })
                    await l100imitAdd(sender)
					break
				case 'exaud':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await limitAdd(sender)
					break
				case 'audios':
				case 'listaad':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '*🎧 Lista De Audios 🎧*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- 🎼 ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					await limitAdd(sender)
					break
				case 'addimage':
				if (isL100imit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('🚧 _Marque Uma Imagem_ 🚧')
					svst = body.slice(10)
					if (!svst) return reply('🚧 _De um nome para a imagem_ 🚧')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `🌳 *Imagem Adicionado com Sucesso digite ${prefix}imagem`, MessageType.text, { quoted: mek })
					await l100imitAdd(sender)
					break
				case 'eximagem':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					await limitAdd(sender)
					break
				case 'imagem':
				case 'listimage':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '*🏖️ Lista De Imagens 🏜️*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- 🏝️ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					await limitAdd(sender)
					break
				case 'addvideo':
				if (isL100imit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('🚧 _Marque Algum Video_ 🚧')
					svst = body.slice(10)
					if (!svst) return reply('🚧 _De Um Nome Para O Video_ 🚧')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `*Video Adicionado Com Sucesso Digite ${prefix}videos Para Ver A Lista*`, MessageType.text, { quoted: mek })
                    await l100imitAdd(sender)
					break
				case 'exvideos':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					await limitAdd(sender)
					break
				case 'videos':
				case 'videolist':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.benned())
				if (!isRegistered) return reply(ind.noregis())
					teks = '*🎥 Lista De Videos 🎥*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- 📽️ ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					await limitAdd(sender)
					break	
/*
]===============> MENU RECURSOS <==================================================================================================================[
*/					
				case 'triggered':
				case 'ger':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				 if (isBanned) return reply(ind.benned())
				 if (!isRegistered) return reply(ind.noregis())
				           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				           reply(ind.wait())
						var imgbb = require('imgbb-uploader')
				         owgi = await client.downloadAndSaveMediaMessage(ger)
				           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				        teks = `${anu.display_url}`
				         ranp = getRandom('.gif')
				        rano = getRandom('.webp')
				        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
				       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(imd.stikga())
                        nobg = fs.readFileSync(rano)
                        client.sendMessage(from, nobg, sticker, {quoted: mek})
                        fs.unlinkSync(rano)
                })
            
                     } else {
                         reply('*Uma Foto* !')
                  }
				  await limitAdd(sender)
                     break
				case 'tourl':
				 if (isBanned) return reply(ind.benned())
				 if (!isRegistered) return reply(ind.noregis())
		           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		           reply(ind.wait())
				var imgbb = require('imgbb-uploader')
		         owgi = await client.downloadAndSaveMediaMessage(ger)
		           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
		        teks = `${anu.display_url}`
				reply(teks)
				}
				break
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`🕋 _Esse Comando Não Existe Ou Esta Em Manutenção_ 🕋`)
                  }
            if (/^>/.test(pes)) {
            	if (!isOwner) return
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}




