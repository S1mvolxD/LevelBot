const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "XXX-XXX-XXX",
  prefix: "c!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences", "GuildMembers"],
  events: ["onMessage","onInteractionCreate",],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

client.loadCommands("./commands/", true);
require("./handler/variables.js")(client);
