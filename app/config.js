module.exports = {
  px: "r!",
  playing: "Youtube: Sarced",
  messageColor: "#FF6347",

  opt: {
    DJ: {
      enabled: false,
      roleName: "DJ", //DJ rolünüzün ismi. 
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
      ], // 
    },
    maxVol: 250,
    loopMessage: false,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};