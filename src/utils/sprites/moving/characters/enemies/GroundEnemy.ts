import type { Vector } from '../../../../interfaces';
import { Enemy } from './Enemy';

export class GroundEnemy extends Enemy {
  update(deltaTime: number): void {
    super.update(deltaTime);
    if (this.position.x === this.distanceMovingMin) {
      this.velocityX = Math.abs(this.velocityX);
      this.frames.y = 1;
    }
    if (this.position.x === this.distanceMovingMax) {
      this.velocityX = -Math.abs(this.velocityX);
      this.frames.y = 2;
    }

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this.position.x += this.velocityX;
    this.draw();
  }
}

export const hedgehogArg: [
  position: Vector,
  sizeFinal: Vector,
  spriteSize: Vector,
  path: string,
  frames: Vector,
  maxFrame: number,
  velocityX: number,
  velocityY: number,
  distanceMovingMin: number,
  distanceMovingMax: number,
] = [
  { x: 1500, y: 60 },
  { x: 169, y: 122 },
  { x: 169, y: 122 },
  '../../assets/hedgehog.png',
  { x: 0, y: 1 },
  13,
  -5,
  0,
  300,
  1500,
];

export const groundEnemy = new GroundEnemy(...hedgehogArg);
