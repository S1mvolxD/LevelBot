module.exports = [{
    name: "enable-level", 
    code: `
  $setGuildVar[rank;true] 
  $setGuildVar[rsystem;1]

  $author[Успешно;https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif]

  $addField[1;Description;Successfully enabled level system. Now the experience/level will be given to the participants.;true]
  $addField[1;Moderator;<@$authorID>;true]

  $color[Purple]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp

  $onlyIf[$getGuildVar[rank]==false;{newEmbed:{title:Error}{description:The rank system is already enabled!}{color:Red}{footer:Error ~ $username[$authorID]:$authorAvatar}}]
  $onlyPerms[administrator;{newEmbed:{title:Permissonos User}{description:Sorry, but you don't have permission to \`Administrator\`}{color:Red}{footer:Error ~ $username[$authorID]:$authorAvatar}}]
  $suppressErrors[{newEmbed:{title:Error}{description:Something went wrong!}{color:Red}{footer:Error ~ $username[$authorID]:$authorAvatar}}]
  `
  }]