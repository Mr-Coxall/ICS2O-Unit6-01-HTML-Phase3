//* Game scene */
var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  //set background color
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};
var game = new Phaser.Game(config);