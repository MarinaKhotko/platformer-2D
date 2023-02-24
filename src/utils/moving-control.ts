import type Game from '../components/game-canvas';
import type { Level } from '../components/Levels/class-level';
import { keys } from './sprites/moving/characters/player/player';

export const stopRight = window.innerWidth * 0.4;
export const stopLeft = window.innerWidth * 0.3;

export const movingControl = (game: Game, level: Level): void => {
  if (keys.right.pressed && game.player.position.x <= stopRight) {
    game.player.velocity.x = game.gameSpeed;
    level.distance += game.gameSpeed;
  } else if (keys.left.pressed && level.distance === 0) {
    game.player.velocity.x = 0;
    keys.speed = 0;
  } else if (keys.left.pressed && game.player.position.x > stopLeft) {
    game.player.velocity.x = -game.gameSpeed;
    level.distance -= game.gameSpeed;
  } else {
    game.player.velocity.x = 0;

    if (keys.right.pressed) {
      level.platforms.forEach((el) => {
        el.position.x -= game.gameSpeed;
      });
      level.allShining.forEach((el) => {
        el.position.x -= game.gameSpeed;
      });
      level.scrollOffset += game.gameSpeed;
      level.distance += game.gameSpeed;
      keys.speed = game.gameSpeed;
    } else if (keys.left.pressed) {
      if (level.distance === 0) {
        keys.speed = 0;
      } else {
        level.platforms.forEach((el) => {
          el.position.x += game.gameSpeed;
        });
        level.allShining.forEach((el) => {
          el.position.x += game.gameSpeed;
        });
        level.scrollOffset -= game.gameSpeed;
        level.distance -= game.gameSpeed;
        keys.speed = -game.gameSpeed;
      }
    }
  }
  level.platforms.forEach((el) => {
    if (
      game.player.position.y + game.player.height <= el.position.y &&
      game.player.position.y + game.player.height + game.player.velocity.y >=
        el.position.y &&
      game.player.position.x + game.player.width >= el.position.x &&
      game.player.position.x <= el.position.x + el.sizeFinal.x
    )
      game.player.velocity.y = 0;
  });
  level.allShining.forEach((el) => {
    if (
      game.player.position.y + game.player.height <= el.position.y &&
      game.player.position.y + game.player.height + game.player.velocity.y >=
        el.position.y &&
      game.player.position.x + game.player.width >= el.position.x &&
      game.player.position.x <= el.position.x + el.sizeFinal.x
    )
      game.player.velocity.y = 0;
  });
};
