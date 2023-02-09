import { game } from '../components/game-canvas';
import type { Vector } from './interfaces';

export class PrototypeCharacters {
  protected position: Vector;
  protected sizeFinal: Vector;
  protected spriteSize: Vector;
  protected characterImg = new Image();
  protected ImgPath: string;
  protected frames: Vector = { x: 0, y: 0 };
  protected velocityX: number;
  protected velocityY: number;

  public constructor(
    position: Vector,
    sizeFinal: Vector,
    spriteSize: Vector,
    path: string,
    frames: Vector,
    velocityX: number,
    velocityY: number,
  ) {
    this.position = position;
    this.sizeFinal = sizeFinal;
    this.spriteSize = spriteSize;
    this.ImgPath = path;
    this.characterImg.src = this.ImgPath;
    this.frames = frames;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  draw(): void {
    game.ctx.drawImage(
      this.characterImg,
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

export class Player extends PrototypeCharacters {
  update(): void {
    this.position.x += this.velocityX;
    this.draw();
  }
}
