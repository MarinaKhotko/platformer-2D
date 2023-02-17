import { Ghost, Raven } from '../sprites/moving/characters/enemies/FlyingEnemy';
import { Spider, Worm } from '../sprites/moving/characters/enemies/GroundEnemy';
import type Game from '../../components/game-canvas';

export class GenetationEnemies {
  typeEnemies = ['Ghost', 'Spider', 'Worm', 'Raven'];
  enemies: Array<Ghost | Spider | Worm | Raven>;
  enemyInterval: number;
  enemyTimer: number;

  constructor() {
    this.enemies = [];
    this.enemyInterval = 2000;
    this.enemyTimer = 0;
  }

  draw(proto: Game): void {
    this.enemies.forEach((el) => {
      el.draw();
    });
  }

  update(proto: Game, deltaTime: number): void {
    this.enemies = this.enemies.filter((el) => !el.markedToDeletion);
    if (this.enemyTimer > this.enemyInterval) {
      this.#addEnemy(proto);
      this.enemyTimer = 0;
    } else this.enemyTimer += deltaTime;

    this.enemies.forEach((el) => {
      el.update(300);
    });
  }

  #addEnemy(proto: Game): void {
    const randomEnemy =
      this.typeEnemies[Math.floor(Math.random() * this.typeEnemies.length)];
    switch (randomEnemy) {
      case 'Ghost':
        this.enemies.push(new Ghost(proto));
        break;
      case 'Spider':
        this.enemies.push(new Spider(proto, 0.5 * proto.canvas.height));
        break;
      case 'Worm':
        this.enemies.push(new Worm(proto));
        break;
      case 'Raven':
        this.enemies.push(new Raven(proto));
        break;
    }
    this.enemies.sort((a, b) => a.position.y - b.position.y);
  }
}
