import { Player, PrototypeCharacters } from '../utils/character';
import type { Vector } from '../utils/interfaces';

export class Enemy extends PrototypeCharacters {
  protected fps = 30;
  protected frameTimer = 0;
  protected frameInterval = 1000 / this.fps;
  protected currantFrame: number = 1;
  protected maxFrame: number;
  protected distanceMovingMin: number;
  protected distanceMovingMax: number;

  constructor(
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
  ) {
    super(position, sizeFinal, spriteSize, path, frames, velocityX, velocityY);
    this.maxFrame = maxFrame;
    this.distanceMovingMin = distanceMovingMin;
    this.distanceMovingMax = distanceMovingMax;
  }

  update(deltaTime: number): void {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);
    } else this.frameTimer += deltaTime;
  }
}

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

// export class FlyingEnemy extends Enemy {
//   update(deltaTime: number): void {
//     super.update(deltaTime);
//     this.position.x += this.velocityX;
//     this.draw();
//   }
// }

// export class Crow extends FlyingEnemy {
//   constructor(
//     position = {
//       x: window.innerWidth,
//       y: Math.random() * game.canvas.height * 0.4,
//     },
//     sizeFinal = { x: 160, y: 200 },
//     spriteSize = { x: 160, y: 200 },
//     path = '../../assets/crow.png',
//     maxFrame = 15,
//     velocityX = Math.random() + 3,
//     velocityY = 0,
//   ) {
//     super(
//       position,
//       sizeFinal,
//       spriteSize,
//       path,
//       maxFrame,
//       velocityX,
//       velocityY,
//     );
//   }
// }

export const player = new Player(
  { x: 0, y: 500 },
  { x: 210.5, y: 200 },
  { x: 150, y: 200 },
  '../../assets/player.png',
  { x: 0, y: 0 },
  5,
  0,
);
