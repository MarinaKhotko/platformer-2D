
import { t} from '../../utils/timer';
import type Game from '../game-canvas';
import type { Level } from '../Levels/class-level';

export class GameOver {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  addListener(game: Game, level: Level): void {
    window.addEventListener('keydown', (KeyboardEvent) => {
      if (KeyboardEvent.code === 'KeyX') {
        game.startPageOpened = true
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
    `Game Over`,
    game.canvas.width / 2,
    game.canvas.height * 0.15,
  );
  game.ctx.textAlign = 'center';
  game.ctx.fillText(`Press X to Continue`, game.canvas.width / 2,  game.canvas.height*0.75);
  clearTimeout(t);
}