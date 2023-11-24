module.exports = [{
    name: "rank",
    code: `
    $image[https://agg-api.vercel.app/rankcard?username=$username[$get[user]]&xp=$getUserVar[exp;$get[user]]&maxxp=$getUserVar[rexp;$get[user]]&level=$getUserVar[lvl;$get[user]]&avatar=$userAvatar[$get[user]]&background=https://cdn.discordapp.com/attachments/992681682249453639/1086894597218770994/mountains-at-night-vector.jpg]
    
    $color[Purple]
    $footer[Used the command ~ $username;$authorAvatar]
    $addTimestamp

    $let[user;$findUser[$message[1];true]]
    $onlyif[$getGuildVar[rank]==true;{newEmbed:{title:Error}{description:The level system is disabled, ask the administrator to run\`c!enable-level\`}{color:Red}}]`
}]