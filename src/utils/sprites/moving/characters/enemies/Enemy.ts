import { MovingSprite } from '../Character';
import type { Vector } from '../../../../interfaces';
import type Game from '../../../../../components/game-canvas';
import { keys } from '../player/player';
import { stopLeft } from '../../../../moving-control';
import type { Level } from '../../../../../components/Levels/class-level';

export class Enemy extends MovingSprite {
  protected fps = 30;
  protected frameTimer = 0;
  protected frameInterval = 1000 / this.fps;
  protected currantFrame: number = 1;
  protected maxFrame: number;
  protected distanceMovingMin: number | undefined;
  protected distanceMovingMax: number | undefined;
  public markedToDeletion: boolean;
  maxVelosityX: number;
  minVelosityX: number;
  mainVelosityX: number;
  level: Level;

  constructor(
    game: Game,
    level: Level,
    position: Vector,
    sizeFinal: Vector,
    spriteSize: Vector,
    path: string,
    frames: Vector,
    maxFrame: number,
    velocityX: number,
    velocityY: number,
    distanceMovingMin?: number,
    distanceMovingMax?: number,
  ) {
    super(
      game,
      position,
      sizeFinal,
      spriteSize,
      path,
      frames,
      velocityX,
      velocityY,
    );
    this.maxFrame = maxFrame;
    this.distanceMovingMin = distanceMovingMin;
    this.distanceMovingMax = distanceMovingMax;
    this.markedToDeletion = false;
    this.maxVelosityX = this.velocityX - game.gameSpeed;
    this.minVelosityX = this.velocityX + game.gameSpeed;
    this.mainVelosityX = this.velocityX;
    this.level = level;
  }

  update(deltaTime: number): void {
    if (this.level.distance >= stopLeft) {
      if (keys.right.pressed) this.velocityX = this.maxVelosityX;
      else if (keys.left.pressed) this.velocityX = this.minVelosityX;
      else this.velocityX = this.mainVelosityX;
    } else this.velocityX = this.mainVelosityX;

    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);
    } else {
      this.frameTimer += deltaTime;
      if (this.position.x < 0 - this.sizeFinal.x) this.markedToDeletion = true;
    }
  }
}
