import type Game from '../game-canvas';
import { GenetationEnemies } from '../../utils/common-classes/GenetationEnemies';
import { BackgroundParallax } from '../backgrounds-LEVELS/background';
import { Platform } from '../../utils/sprites/static/static-sprite';
import {
  layersL1,
  speedModifiersL1,
} from '../backgrounds-LEVELS/data/img-background-1';

export class Level1 {
  generationEnemies: GenetationEnemies;
  game: Game;
  background: BackgroundParallax;
  platforms: Platform[];
  scrollOffset: number = 0;
  distance: number = 0;

  constructor(proto: Game) {
    this.game = proto;
    this.generationEnemies = new GenetationEnemies();
    this.background = new BackgroundParallax(
      this.game,
      layersL1,
      speedModifiersL1,
    );
    this.platforms = [
      new Platform(this.game, { x: 500, y: 500 }, { x: 300, y: 60 }, 90),
      new Platform(this.game, { x: 1600, y: 700 }, { x: 300, y: 60 }, 90),
    ];
  }

  draw(): void {
    this.generationEnemies.draw(this.game);
    this.background.animate();
  }

  update(deltaTime: number): void {
    this.background.animate();
    this.generationEnemies.update(this.game, 10);
    this.platforms.forEach((el) => {
      el.render(this.game);
    });
    if (this.scrollOffset > 1000) {
      // console.log('win');
    }
  }
}
