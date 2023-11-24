module.exports = [{
    name: "$alwaysExecute",
    code: `
  https://agg-api.vercel.app/levelup?avatar=$authorAvatar&border=b00b69&level=$getUserVar[lvl]

  $setUserVar[exp;0]
  $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
  $setUserVar[rexp;$multi[$getUserVar[rexp];2]]
  $onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
  $onlyForGuilds[$guildID;]
  $suppressErrors
  `
  },{
   name: "$alwaysExecute",
   code: `
  $setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
  $onlyIf[$getGuildVar[rsystem]>=1;]
  $onlyForGuilds[$guildID;]
  $suppressErrors`
  }]