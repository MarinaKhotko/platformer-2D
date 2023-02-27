import type Game from '../components/game-canvas';
import type { Level } from '../components/Levels/class-level';
import { keys } from './EventListeners';

export const stopRight = window.innerWidth * 0.4;
export const stopLeft = window.innerWidth * 0.3;

export const movingControl = (game: Game, level: Level): void => {
  level.allShining.forEach((el) => {
    if (
      el.position.x <= game.player.position.x + game.player.sizeFinal.x &&
      el.position.x + el.sizeFinal.x >= game.player.position.x &&
      el.position.y <= game.player.position.y + game.player.sizeFinal.y &&
      el.position.y + el.sizeFinal.y > game.player.position.y
    ) {
     el.markedToDeletion = true
     level.score +=1
     level.allShining = level.allShining.filter((el) => !el.markedToDeletion);
    }
  });

  level.generationEnemies.enemies.forEach((el) => {
    if (
      el.position.x <= game.player.position.x + game.player.sizeFinal.x &&
      el.position.x + el.sizeFinal.x >= game.player.position.x &&
      el.position.y <= game.player.position.y + game.player.sizeFinal.y &&
      el.position.y + el.sizeFinal.y > game.player.position.y
    ) {
      alert('Game Over')
    }
  });

  if (keys.right.pressed && game.player.position.x <= stopRight) {
    game.player.velocityX = game.gameSpeed;
    level.distance += game.gameSpeed;
  } else if (keys.left.pressed && level.distance === 0) {
    game.player.velocityX = 0;
    keys.speed = 0;
  } else if (keys.left.pressed && game.player.position.x > stopLeft) {
    game.player.velocityX = -game.gameSpeed;
    level.distance -= game.gameSpeed;
  } else {
    game.player.velocityX = 0;

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
      game.player.position.y + game.player.sizeFinal.y <= el.position.y &&
      game.player.position.y +
        game.player.sizeFinal.y +
        game.player.velocityY >=
        el.position.y &&
      game.player.position.x + game.player.sizeFinal.x >= el.position.x &&
      game.player.position.x <= el.position.x + el.sizeFinal.x
    )
      game.player.velocityY = 0;
  });
  level.allShining.forEach((el) => {
  });

  switch (keys.activeKey) {
    case 'left':
      game.player.frames.y = 1;
      game.player.maxFrame = 14;
      break;
    case 'right':
      game.player.frames.y = 0;
      game.player.maxFrame = 14;
      break;
    case 'up':
      keys.previousKey === 'left'
        ? (game.player.frames.y = 1)
        : (game.player.frames.y = 0);
      game.player.maxFrame = 14;
      break;
    // case '':
    //   keys.previousKey === 'left'
    //   ? game.player.frames.y = 1
    //   :  game.player.frames.y = 0
    //   break
  }
};
