import type Game from '../game-canvas';
import { gameSpeed } from './background';

export class Layer {
  protected x: number;
  protected x2: number;
  protected y: number;
  protected image: HTMLImageElement;
  protected speed: number;
  protected speedModifier: number;
  game: Game;
  height: number;
  width: number;

  public constructor(
    game: Game,
    image: HTMLImageElement,
    speedModifier: number,
  ) {
    this.game = game;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
    this.width = game.canvas.width;
    this.height = game.canvas.height;
    this.x = 0;
    this.x2 = this.width;
    this.y = 0;
  }

  public update(): void {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
    this.scroll();
  }

  public scroll(): void {
    this.game.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
    );
    this.game.ctx.drawImage(
      this.image,
      this.x2,
      this.y,
      this.width,
      this.height,
    );
  }
}
