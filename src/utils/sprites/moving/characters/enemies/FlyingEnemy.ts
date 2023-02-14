import { game } from '../../../../../components/game-canvas';
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
    position= {
        x: window.innerWidth,
        y: Math.random() * game.canvas.height * 0.4,
      },
    sizeFinal = { x: 273, y: 194 },
    spriteSize= { x: 273, y: 194 },
    path = '../../../../../../assets/raven.png',
    frames= { x: 0, y: 0 },
    maxFrame = 5,
    velocityX = Math.random() + 3,
    velocityY = 0,
  ) {
    super( position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY)
  }
}