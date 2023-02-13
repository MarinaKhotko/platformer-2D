export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')!;

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  public tick (): void {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);  
  }
}
export const game = new Game();