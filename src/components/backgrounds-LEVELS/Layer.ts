import { keys } from '../../utils/EventListeners';
import type Game from '../game-canvas';

export class Layer {
  protected x: number;
  protected y: number;
  protected image: HTMLImageElement;
  protected speedModifier: number;
  game: Game;
  height: number;
  width: number;
  x2: number;
  speed: number;
  gameSpeed: number;
  count: number;

  public constructor(
    game: Game,
    image: HTMLImageElement,
    speedModifier: number,
  ) {
    this.game = game;
    this.gameSpeed = keys.speed;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.x2 = this.width;
    this.speed = this.gameSpeed * this.speedModifier;
    this.count = 0;
  }

  public update(): void {
    this.gameSpeed = keys.speed;
    this.speed = this.gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
      this.count++;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
      this.count++;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }

  public draw(): void {
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
    for (let i = 0; i <= this.count + 1; i++) {
      this.x < this.x2
        ? this.game.ctx.drawImage(
            this.image,
            this.x - this.width * i,
            this.y,
            this.width,
            this.height,
          )
        : this.game.ctx.drawImage(
            this.image,
            this.x2 - this.width * i,
            this.y,
            this.width,
            this.height,
          );
    }
  }
}
