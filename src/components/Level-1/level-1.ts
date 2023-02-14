import type Game from '../game-canvas';
import { GenetationEnemies } from '../../utils/common-classes/GenetationEnemies';

export class Level1 {
  generationEnemies: GenetationEnemies;
  game: Game;

  constructor(proto: Game) {
    this.game = proto;
    this.generationEnemies = new GenetationEnemies();
  }

  draw(): void {
    this.game.ctx.fillStyle = 'gray';

    this.generationEnemies.draw(this.game);
  }

  update(deltaTime: number): void {
    this.game.ctx.fillStyle = 'gray';

    this.game.ctx.save();
    this.game.ctx.fillStyle = 'black';
    this.game.ctx.fillRect(
      0,
      this.game.canvas.height * 0.8,
      this.game.canvas.width,
      this.game.canvas.height * 0.2,
    );
    this.game.ctx.restore();

    this.generationEnemies.update(this.game, 10);
  }
}
