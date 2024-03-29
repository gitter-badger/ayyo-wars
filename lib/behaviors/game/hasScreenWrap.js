// hasScreenWrap
module.exports = {
  config: {
    stack: 0
  },
  create: function hasScreenWrapCreate (sprite, game) {},
  update: function hasScreenWrapUpdate (sprite, game) {

    let worldWidth = game.sys.game.canvas.width;
    let worldHeight = game.sys.game.canvas.height;
    if (!sprite) {
      return;
    }
    var cam = game.cameras.cameras[0];
    if (sprite.x < 0) {
      sprite.x = worldWidth;
      return;
    }
    else if (sprite.x > worldWidth) {
      sprite.x = 0;
      return;
    } if (sprite.y < 0) {
      sprite.y = worldHeight - sprite.height;
      return;
    }
    else if (sprite.y > worldHeight) {
      sprite.y = 0;
      return;
    }

  }
};