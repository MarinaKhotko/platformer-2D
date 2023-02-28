
import { t, time } from '../../utils/timer';
import type Game from '../game-canvas';
import type { Level } from '../Levels/class-level';

export class Finish {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  addListener(game: Game, level: Level): void {
    window.addEventListener('keydown', (KeyboardEvent) => {
      if (KeyboardEvent.code === 'KeyX') {
        game.finish = false
        game.allLevels.level1.opened = false
        if (game.currentLevel === '1') {
            game.allLevels.level2.opened = true
            game.currentLevel = '2';
        }
        else if (game.currentLevel === '2') {
            game.allLevels.level2.opened = false
            game.allLevels.level3.opened = true
            game.currentLevel = '3';
        }

      }
    });
  }

  update(game: Game, level: Level): void {
    styleFinish(this.game, level);
  }
}

export function styleFinish(game: Game, level: Level): void {
  game.ctx.fillStyle = 'white';
  game.ctx.font = '60px Luckiest Guy';
  game.ctx.fillText(
    `Level  ${game.currentLevel}  Complited`,
    game.canvas.width / 2,
    game.canvas.height * 0.15,
  );
  game.ctx.textAlign = 'center';
  const timeResullt = time.time
  game.ctx.fillText(`Score = ${level.score}`, game.canvas.width / 2,  game.canvas.height*0.35);
  game.ctx.fillText(`Time = ${timeResullt}`, game.canvas.width / 2,  game.canvas.height*0.55);
  game.ctx.fillText(`Press X to Continue`, game.canvas.width / 2,  game.canvas.height*0.75);
  clearTimeout(t);
}
