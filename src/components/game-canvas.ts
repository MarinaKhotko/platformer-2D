import { Sprite } from '../utils/sprites/Sprite';
import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  startPage = new StartPage();
  startPageOpened = true;
  logo = new Logo();
  gitHubs = new GitHubs();

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.startPage.addListener(this);
  }

  public update(deltaTime: number): void {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'gray';
    if (this.startPageOpened) this.startPage.update(this);
    this.logo.draw();
    this.gitHubs.draw();
  }
}
export const game = new Game();

export const backgroundStart = new Sprite(
  { x: 0, y: 0 },
  { x: window.innerWidth, y: window.innerHeight },
  { x: 2540, y: 1440 },
  '../../assets/background_start.png',
);
