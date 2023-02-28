import type Game from '../game-canvas';
import { GenetationEnemies } from '../../utils/GenetationEnemies';
import type { BackgroundParallax } from '../backgrounds-LEVELS/background';
import type { Platform } from '../../utils/sprites/static/static-sprite';
import { Shining } from '../../utils/sprites/static/static-sprite';

export class Level {
  generationEnemies: GenetationEnemies;
  game: Game;
  scrollOffset: number = 0;
  distance: number = 0;
  background: BackgroundParallax;
  platforms: Platform[];
  opened = false;
  allShining: Shining[];
  score: number;
  scoreShining: Shining;
  finish: number;
  finished = false

  constructor(
    game: Game,
    finish: number,
    background: BackgroundParallax,
    platforms: Platform[],
    allShining: Shining[],
  ) {
    this.game = game;
    this.finish = finish;
    this.generationEnemies = new GenetationEnemies(this);
    this.background = background;
    this.platforms = platforms;
    this.allShining = allShining;
    this.opened = false;
    this.score = 0;
    this.scoreShining = new Shining(
      this.game,
      { x: window.innerWidth - 200, y: 0 },
      { x: 182 * 0.7, y: 206 * 0.7 },
    );
  }
  
  update(deltaTime: number): void {
    this.background.animate();
    this.generationEnemies.update(this.game, 10);
    this.platforms.forEach((el) => {
      el.draw();
      el.render(this.game);
    });
    this.allShining.forEach((el) => {
      el.draw()
      el.update(1);
    });
    this.scoreShining.draw();
    this.scoreShining.update(1);
    styleScore(this.game, this.score);
  }
  
}

export function styleScore(game: Game, score: number): void {
  game.ctx.fillStyle = 'white';
  game.ctx.font = '80px Luckiest Guy';
  game.ctx.fillText(`${score}`, window.innerWidth - 55, 95);
}
