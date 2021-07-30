const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 ⛲🕋 *Jogo Da Velha Perfil* 🕋⛲ 」

✅ *Nome* : ${pushname} 

    ➣ 🌟 _Vitórias: ${userWins} 🏆_
    ➣ 🌟 _Derrotas: ${userDefeats} 🏆_
    ➣ 🌟 _Empates : ${userTies} 🏆_
    ➣ 🌟 _Pontos  : ${userPoints} 🏆_
    `
}

exports.tttme = tttme