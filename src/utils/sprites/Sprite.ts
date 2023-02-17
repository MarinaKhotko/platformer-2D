import type Game from '../../components/game-canvas';
import type { Vector } from '../interfaces';

export class Sprite {
  public position: Vector;
  public sizeFinal: Vector;
  protected spriteSize: Vector;
  protected image = new Image();
  protected ImgPath: string;
  protected frames: Vector;
  protected loaded: boolean;
  ctx: CanvasRenderingContext2D;
  game: Game;

  public constructor(
    game: Game,
    position: Vector,
    sizeFinal: Vector,
    spriteSize: Vector,
    path: string,
    frames: Vector = { x: 0, y: 0 },
    ctx: CanvasRenderingContext2D = game.ctx,
  ) {
    this.game = game;
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
    this.ctx = ctx;
  }

  draw(): void {
    if (!this.loaded) return;
    this.ctx.drawImage(
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
