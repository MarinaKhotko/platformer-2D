import { game } from '../../components/game-canvas';
import type { Vector } from '../interfaces';

export class Sprite {
  protected position: Vector;
  protected sizeFinal: Vector;
  protected spriteSize: Vector;
  protected image = new Image();
  protected ImgPath: string;
  protected frames: Vector;
  protected loaded: boolean;

  public constructor(
    position: Vector,
    sizeFinal: Vector,
    spriteSize: Vector,
    path: string,
    frames: Vector = { x: 0, y: 0 },
  ) {
    this.position = position;
    this.sizeFinal = sizeFinal;
    this.spriteSize = spriteSize;
    this.ImgPath = path;
    this.image.src = this.ImgPath;
    this.image.onload = (): void => {
      this.loaded = true;
    };
    this.frames = frames;
    this.loaded = false;
  }

  draw(): void {
    if (!this.loaded) return;
    game.ctx.drawImage(
      this.image,
      this.spriteSize.x * this.frames.x,
      this.spriteSize.y * this.frames.y,
      this.spriteSize.x,
      this.spriteSize.y,
      this.position.x,
      this.position.y,
      this.sizeFinal.x,
      this.sizeFinal.y,
    );
  }
}
