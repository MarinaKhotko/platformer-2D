import type Game from '../game-canvas';
import { GenetationEnemies } from '../../utils/common-classes/GenetationEnemies';
import { BackgroundParallax } from '../backgrounds-LEVELS/background';
import { Platform } from '../../utils/sprites/static/static-sprite';

export class Level1 {
  generationEnemies: GenetationEnemies;
  game: Game;
  background: BackgroundParallax;
  platforms: Platform[];

  constructor(proto: Game) {
    this.game = proto;
    this.generationEnemies = new GenetationEnemies();
    this.background = new BackgroundParallax(this.game);

    this.platforms = [
      new Platform(this.game, { x: 500, y: 500 }, { x: 300, y: 60 }, 90),
      new Platform(this.game, { x: 2800, y: 700 }, { x: 300, y: 60 }, 90),
    ];
  }

  draw(): void {
    this.generationEnemies.draw(this.game);
  }

  update(deltaTime: number): void {
    this.background.animateParallax();
    this.generationEnemies.update(this.game, 10);

    this.platforms.forEach((el) => {
      el.render(this.game);
    });
  }
}

// this.game.ctx.save();
// this.game.ctx.fillStyle = 'black';
// this.game.ctx.fillRect(
//   0,
//   this.game.canvas.height * 0.8,
//   this.game.canvas.width,
//   this.game.canvas.height * 0.2,
// );
// this.game.ctx.restore();
