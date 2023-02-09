import { groundEnemy, player } from './enemies';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  public update(deltaTime: number): void {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    player.update();
    groundEnemy.update(5);
  }
}

export const game = new Game();
