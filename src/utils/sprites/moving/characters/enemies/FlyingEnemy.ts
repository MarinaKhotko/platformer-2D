import type Game from '../../../../../components/game-canvas';
import type { Level } from '../../../../../components/Levels/class-level';
import { Enemy } from './Enemy';

export class FlyingEnemy extends Enemy {
  update(deltaTime: number): void {
    super.update(deltaTime);
    this.position.x += this.velocityX;
    this.draw();
  }
}

export class Raven extends FlyingEnemy {
  constructor(
    game: Game,
    level: Level,
    position = {
      x: game.canvas.width,
      y: Math.random() * game.canvas.height * 0.4,
    },
    sizeFinal = { x: 270.5 * 0.6, y: 194 * 0.6 },
    spriteSize = { x: 270.5, y: 194 },
    path = '../../../../../../assets/raven.png',
    frames = { x: 0, y: 0 },
    maxFrame = 5,
    velocityX = -(Math.random() * 2 + 3),
    velocityY = -(Math.random() + 1),
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

export class Ghost extends FlyingEnemy {
  angle: number;
  curve: number;

  constructor(
    game: Game,
    level: Level,
    position = {
      x: game.canvas.width,
      y: Math.random() * game.canvas.height * 0.4,
    },
    sizeFinal = { x: 261 * 0.6, y: 209 * 0.6 },
    spriteSize = { x: 261, y: 209 },
    path = '../../../../../../assets/enemy_ghost.png',
    frames = { x: 0, y: 0 },
    maxFrame = 5,
    velocityX = -(Math.random() * 2 + 3),
    velocityY = -(Math.random() + 1),
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
    this.angle = 0;
    this.curve = Math.random() * 2;
  }

  draw(): void {
    this.ctx.save();
    this.ctx.globalAlpha = 0.3;
    super.draw();
    this.ctx.restore();
  }

  update(deltaTime: number): void {
    super.update(deltaTime);
    this.position.y += Math.sin(this.angle) * this.curve;
    this.angle += 0.04;
  }
}
