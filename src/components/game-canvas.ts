export default class Game {
  private canvas = document.querySelector('canvas') as HTMLCanvasElement;
  private ctx = this.canvas.getContext('2d')!;

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

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 30, 30);
  }
}