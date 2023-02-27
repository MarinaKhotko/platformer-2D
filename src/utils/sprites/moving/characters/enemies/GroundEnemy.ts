import type Game from '../../../../../components/game-canvas';
import type { Level } from '../../../../../components/Levels/class-level';
import { Enemy } from './Enemy';

export class GroundEnemy extends Enemy {
  update(deltaTime: number): void {
    super.update(deltaTime);
    this.position.x += this.velocityX;
    this.position.y += this.velocityY;
    this.draw();
  }
}

export class Worm extends GroundEnemy {
  constructor(
    game: Game,
    level: Level,
    sizeFinal = { x: 261 * 0.5, y: 171 * 0.5 },
    position = {
      x: game.canvas.width,
      y: game.canvas.height - sizeFinal.y -80, //  доработать
    },
    spriteSize = { x: 229, y: 171 },
    path = '../../../../../../assets/enemy-worm.png',
    frames = { x: 0, y: 0 },
    maxFrame = 5,
    velocityX = -(Math.random() * 2 + 2),
    velocityY = 0,
  ) {
    super(
      game,
      level,
      position,
      sizeFinal,
      spriteSize,
      path,
      frames,
      maxFrame,
      velocityX,
      velocityY,
    );
  }
}

export class Spider extends GroundEnemy {
  distanceMoving: number;

  constructor(
    game: Game,
    level: Level,
    distanceMoving: number,
    position = {
      x: Math.random() * game.canvas.width,
      y: 0,
    },
    sizeFinal = { x: 310 * 0.4, y: 175 * 0.4 },
    spriteSize = { x: 310, y: 175 },
    path = '../../../../../../assets/enemy_spider.png',
    frames = { x: 0, y: 0 },
    maxFrame = 5,
    velocityX = 0,
    velocityY = Math.random() * 2 + 2,
  ) {
    super(
      game,
      level,
      position,
      sizeFinal,
      spriteSize,
      path,
      frames,
      maxFrame,
      velocityX,
      velocityY,
    );
    this.distanceMoving = distanceMoving;
  }

  draw(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.x + this.sizeFinal.x / 2, 0);
    this.ctx.lineTo(this.position.x + this.sizeFinal.x / 2, this.position.y);
    this.ctx.stroke();
    super.draw();
  }

  update(deltaTime: number): void {
    super.update(deltaTime);

    if (this.position.y > this.distanceMoving) this.velocityY *= -1;
    this.draw();
  }
}
