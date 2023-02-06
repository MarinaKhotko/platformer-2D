import { wasp } from './enemies';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d')!;

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }
  public tick() {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(0, 0, 30, 30);
    wasp.update();
  }
}

export const game = new Game();
