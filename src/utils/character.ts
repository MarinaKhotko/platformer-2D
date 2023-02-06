import { game } from '../components/game-canvas';
import { Vector } from './interfaces';

export class PrototypeCharacters {
  protected position: Vector;
  protected sizeFinal: Vector;
  protected sizeToGetOnePosition: Vector;
  protected velocity: Vector;
  protected characterImg = new Image();
  protected ImgPath: string;
  protected frames: number = 0;

  public constructor(
    position: Vector,
    sizeFinal: Vector,
    sizeToGetOnePosition: Vector,
    velocity: Vector,
    path: string,
  ) {
    this.position = position;
    this.sizeFinal = sizeFinal;
    this.sizeToGetOnePosition = sizeToGetOnePosition;
    this.velocity = velocity;
    this.ImgPath = path;
  }
  draw() {
    this.characterImg.src = this.ImgPath;
    game.ctx.drawImage(
      this.characterImg,
      this.sizeToGetOnePosition.x * this.frames,
      0,
      this.sizeToGetOnePosition.x,
      this.sizeToGetOnePosition.y,
      this.position.x,
      this.position.y,
      this.sizeFinal.x,
      this.sizeFinal.y,
    );
  }
}

export class Enemy extends PrototypeCharacters {
  constructor(
    position: Vector,
    sizeFinal: Vector,
    sizeToGetOnePosition: Vector,
    velocity: Vector,
    path: string,
  ) {
    super(position, sizeFinal, sizeToGetOnePosition, velocity, path);
  }
  update() {
    this.frames++;
    if (this.frames > 3) {
      this.frames = 0;
    }
    this.draw();
    this.position.x += this.velocity.x;
    if (this.position.y < 130) {
      this.position.y += this.velocity.y;
    }
    if (this.position.y > 130) {
      this.position.y -= this.velocity.y;
    }
  }
}
