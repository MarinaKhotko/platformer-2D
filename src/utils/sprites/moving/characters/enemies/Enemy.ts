import { MovingSprite } from '../Character';
import type { Vector } from '../../../../interfaces';
import type Game from '../../../../../components/game-canvas';

export class Enemy extends MovingSprite {
  protected fps = 30;
  protected frameTimer = 0;
  protected frameInterval = 1000 / this.fps;
  protected currantFrame: number = 1;
  protected maxFrame: number;
  protected distanceMovingMin: number | undefined;
  protected distanceMovingMax: number | undefined;
  public markedToDeletion: boolean;

  constructor(
    game: Game,
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
  }

  update(deltaTime: number): void {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);
    } else this.frameTimer += deltaTime;

    if (this.position.x < 0 - this.sizeFinal.x) this.markedToDeletion = true;
  }
}
