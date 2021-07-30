const a = '```'

exports.wait = () => {
	return`*「 🍱 Aguarde 🍱 」* _⌛ ESTA EM PROCESSO ⌛_`
}

exports.ocron = () => {
	return`*「 🍱 Falha 🍱 」* _Marque uma imagem_`
}

exports.succes = () => {
	return`*「 🌹 Deu Certo 🌹 」*`
}

exports.lvlon = () => {
	return`*「 🔥 ATIVADO 🔥 」* _LEVELING_`
}

exports.lvloff = () => {
	return`*「 😞 DESATIVADO 😞 」* _LEVELING_`
}

exports.lvlnul = () => {
	return`🐤 _Voce ainda não possui Level_ 🐤`
}

exports.lvlnoon = () => {
	return`💂🏻‍♀️ _Leveling Esta Desativado_ 💂🏻‍♀️`
}

exports.noregis = () => {
	return`*「 🧐 Voce não esta Registrado 🧐 」*\n\n _🌟 Se registre para participar de eventos e subir ate o topo 🌟_ \n\n *💂🏻‍♀️ Para se Registrar é so Digitar 💂🏻‍♀️*\n\n ${prefix}registrar nome / idade`
}

exports.rediregis = () => {
	return`*「 🚨 Usuario Ja Registrado 🚨 」*`
}

exports.stikga = () => {
	return`*🕋 Falhou, Tente repetir depois. 🕋*`
}

exports.linkga = () => {
	return`*❌ Link Invalido ❌*`
}

exports.groupo = () => {
	return`*「⚠️ So Pode Usar Esse Comando Nos Grupos ⚠️」*`
}

exports.ownerb = () => {
	return`*「⚠️ Esse Comando So Pode Ser Usado Pelo Dono Do Bot ⚠️」*`
}

exports.ownerg = () => {
	return`*「⚠️ Esse Comando So Pode Ser Usado Pelo Dono Do Bot ⚠️」*`
}

exports.admin = () => {
	return`*「⚠️ So Administradores Podem Usar Esse Comando ⚠️」*`
}

exports.badmin = () => {
	return`*「🎪 Para Esse Comando Funcionar Eu Tenho Que Ser Administrador 🎪」*`
}

exports.nsfwoff = () => {
	return`*「Vida No Crime」* _🍷 O Crime Esta Proibido, Esperem Liberarem 🍷_`
}

exports.bug = () => {
	return`*🍯 Sua Mensagem Ja Foi Enviado Para O Meu Dono, Mensagens Atoa e Falsas Não Serão Respondidas 🍯*`
}

exports.wrongf = () => {
	return`_📝 Você Esta Escrevendo Errado Ou Esta Deixando Algo Em Branco 📝_ Exemplo: #registrar nome / idade`
}

exports.clears = () => {
	return`*🗞️ Limpando Tudo 🗞️*`
}

exports.pc = () => {
	return`*「 📚 Se Cadastrando 📚 」*\n\n_Para saber se você se cadastrou, verifique a mensagem que enviei_ \n\n*📜 Se Voce Não Achou A Mensagem É Por Que Voce Não Se Cadastrou 📜*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 📥 Membro Cadastrado 📤 」*\n\n_📝 Parabens Voce Se Cadastrou 📝_ \n\n┏━⊱🏰 *「Nome」* 🏰\n┗⊱${namaUser}\n┏━⊱🏰 *「Numero」* 🏰\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱🏰 *「Idade」* 🏰\n┗⊱${umurUser}\n┏━⊱🏰 *Horario Do Registro* 🏰\n┗⊱${time}\n\n┏━❉ *🕋 Serial 🕋* ❉━\n┣⊱${serialUser}\n\n 🚧 _Salva esse codigo ai, talvez voce vai precisar dele_ 🚧`
}

exports.cmdnf = (prefix, command) => {
	return`⚠️ _Comando_ *${prefix}${command}* _não encontrado teste escrever_ *${prefix}menu* ⚠️`
}

exports.owneresce = (pushname) => {
	return`*🚧 ${pushname} Script do dono não encontrado 🚧*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${aha}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${ahb}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${ahc}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${ahd}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${ahe}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*${pushname} _🌟 Seu Level Não É Suficiente 🌟_\n\n*┏⊱ 🔥 *「Seu Level」 : ${getLevelingLevel(sender)}*\n*┣⊱ ⛅ *「Comando」  : ${command}*\n*┗⊱ 🌧️ *「Requisito de Level」 : ${ahf}*\n\n_🚧 Atenção 🚧_\n 🕋 *Sempre falar no grupo para ganhar XP* 🕋`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client, process, pepolu) => { 
	return `
*:.｡. .｡.:*･゜ﾟ･*– ✩ೃ

- ̗̀ ๑❪ ❛ *[̲̅B̲̅є̲̅м̲̅ ̲̅V̲̅i̲̅и̲̅d̲̅σ̲̅] ${pushname}* ❜ ❫๑ ˚̩̥̩̥.
	
♡ 

░▒▓█▓▒░░▒▓██▓▒░
ノ— 彡 ❪ *𝙲𝚊𝚝𝚊𝚕𝚊𝚐𝚘 𝙳𝚎 𝙼𝚎𝚗𝚞𝚜* ❫ ☂.
░▒▓█▓▒░░▒▓██▓▒░

回回回回回回回回回回回回回回回回回

•╰─► 🌟 ${prefix}aventurar
*⊰❉⊱⊰❉⊱*
•╰─► ⚓ ${prefix}brincadeiras
*⊰❉⊱⊰❉⊱*
•╰─► 🎻 ${prefix}jogos
*⊰❉⊱⊰❉⊱*
•╰─► 🌹 ${prefix}velha
*⊰❉⊱⊰❉⊱*
•╰─► 🍥 ${prefix}figurinhas
*⊰❉⊱⊰❉⊱*
•╰─► 🎯 ${prefix}picture
*⊰❉⊱⊰❉⊱*
•╰─► 🍱 ${prefix}transferencia
*⊰❉⊱⊰❉⊱*
•╰─► 🍷 ${prefix}download
*⊰❉⊱⊰❉⊱*
•╰─► 🥧 ${prefix}comandos+
*⊰❉⊱⊰❉⊱*
•╰─► 🍣 ${prefix}administração
*⊰❉⊱⊰❉⊱*
•╰─► ⛈ ${prefix}donobot
*⊰❉⊱⊰❉⊱*

回回回回回回回回回回回回回回回回回

◦۪۪̥◦۪ │ ೃ |. . ° • . .. . ° • . .

, *𝐵𝓎 𝒩𝒶𝓃𝒹𝑜* 

❀ 🖤𝘜𝘯𝘪𝘷𝘦𝘳𝘴𝘰🖤𝘖𝘵𝘢𝘬𝘶🖤

`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 🆙 Voce Upou Parabens 🆙 」*


┏⊱ 🍱 *「Nome」* : ${pushname}
┃
┣⊱ 🎪 *「Numero」* : wa.me/${sender.split("@")[0]}
┃
┣⊱ 🤿 *「Seu XP」* : ${getLevelingXp(sender)}
┃
┣⊱ 🌟 *「Creditos」* : +50
┃
┣⊱ ☃️ *「Titulo」*: ${role}
┃
┗⊱ 🕋 *「Level」* : ${getLevel} ⊱🆙 ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} ⚓ Seus creditos são insuficientes ⚓*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 🆙 Seus Creditos 🆙 」*

*🌟 Quantidade de Creditos 🌟* : 
🧧🧧🧧🧧🧧🧧 ${limitCounts}

*⚠️ Consiga creditos comprando, subindo de level ou com o criador ⚠️*`
}

exports.satukos = () => {
	return`*🍯 Use o comando junto do 1 / ativar ou 0 / desativar 🍯*`
}

exports.uangkau = (pushname, sender, uangkau, senti, role, aliansa, getLevelingLevel, emotion, point, rankss, crimi, aventure) => {
	return`*┏◚◚◚◚◚◚◚◚◚◚◚◚┓*\n      🕋 𝚂𝚞𝚊 𝙲𝚘𝚗𝚝𝚊🕋      *${senti}*\n*┗◛◛◛◛◛◛◛◛◛◛◛◛┛*\n\n┣⊱ 👑 *Pontos De Evento* : ${rankss}\n┣⊱ 🔫 *Pontos De Crimes* : ${crimi}\n┣⊱ 🪵 *Pontos De Aventuras* : ${aventure}\n\n┣⊱ 🛡️ *Clã* : ${aliansa}\n┣⊱ 🏆 *Titulo* : ${role}\n┣⊱ 🔖 *Emoji* : ${emotion}\n\n┣⊱ 📨 *Contador De MSG* : ${point}\n\n┣⊱ 🌹 *Nome* : ${pushname}\n┣⊱ 💸 *Dinheiro* : *${uangkau}*\n┣⊱ ⚓ *Level* : ${getLevelingLevel(sender)} 🎮\n\n 🍥 𝓕𝓲𝓺𝓾𝓮 𝓝𝓸 𝓣𝓸𝓹𝓸 𝓓𝓸𝓼 𝓡𝓪𝓷𝓴𝓼, 𝓢𝓮𝓷𝓭𝓸 𝓐𝓽𝓲𝓿𝓸 𝓝𝓸 𝓖𝓻𝓾𝓹𝓸 🍥`
}

exports.afkOn = (pushname, reason) => {
    return `Recurso AFK Bem Sucedido!\n\n➸ *Nome*: ${pushname}\n➸ *Razão*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O Recurso afk foi ativado de antemão.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! A pessoa esta AFK não se preocupe\n➸ *Razão*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Voltou afk bem vindo de volta`
}

exports.left = (num) => {
	return`*Aah Que Pena  @${num.split('@')[0]} *Saiu do Grupo*`
}

exports.welcome = ( mdata , num ) => {
	return`*Olá @${num.split('@')[0]}*\n\n*Bem vindo ao grupo*\n\n*${mdata.subject}*\n\n🇧🇷╬ sᴇᴊᴀ ʙᴇᴍ ᴠɪɴᴅᴏ (ᴀ)╬🇯🇵\n🏮 sᴇ ɑᴘʀᴇsᴇɴᴛᴇ ᴄᴏᴍ: (obrigɑtório)\n➦Nome(real):\n➠Idɑde: \n\n➦ *Só fique no grupo se for ser ativo*\n\n➠Foto (opcionɑl)\n\n🧧 Regras na descrição\n`
}

exports.banadd = (pnom3) => {
	return`*「🐺 Voce Morreu 🐺」*

*Nome* : ${pnom3}`
}

exports.dellban = (hnom3) => {
	return`*「🆙 Voce Ressuscitou🆙」*

*Nome* : ${hnom3}
*Expiração* : 🇯🇵🇧🇷\n\n*⚔️ Voltou ⚔️*`
}

exports.benned = () => {
	return`*「Voce esta morto, Se Ressuscita Ou Pede Para Alguem te Ressuscitar」*`
}

exports.matador = () => {
	return`*「Voce esta morto espere ser ressuscitado」*`
}