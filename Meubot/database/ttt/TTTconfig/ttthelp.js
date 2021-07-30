const ttthelp = (prefix) => {
    return `
「 🕌 *JOGO DA VELHA* 🕌 」

◪ EM FASE DE TESTES

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}jogodavelha [ DIFICULDADE ] 」
  └─ ❏ Apenas uma pessoa por vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Só azarado pra perder nessa)
  ├─ ❏ normal : 66% de chance 
  │     de bloqueio e vitória
  ├─ ❏ hard : 100% de chance 
  │     de bloqueio e vitória 
  └─ ❏ impossible : Só Kuuhaku
           pra vencer isso

◪ TEMPORIZADOR
  │
  ├─ ❏ Uma nova partida só poderá
  │     ser iniciada após um intervalo
  │     de 4 minutos apartir do início
  │     da partida anterior
  │
  └─ ❏ A partida terminará 
           automaticamente após 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}jogar [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${prefix}jogar a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

◪ SEU STATUS
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}perfil 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ XP
  │     └ 
  │
  ├─ ❏ NORMAL
  │     ├ XP
  │     └ 
  │
  ├─ ❏ HARD
  │     ├ XP
  │     └ 
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ XP
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NÃO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp