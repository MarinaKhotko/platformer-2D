import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { Level1 } from './Level-1/level-1';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

  startPage = new StartPage(this);
  level1 = new Level1(this);
  startPageOpened = true;
  level1Opened = false;
  logo = new Logo(this);
  gitHubs = new GitHubs(this);

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.startPage.addListener(this);
  }

  public update(): void {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.startPageOpened) this.startPage.update(this);
    if (this.level1Opened) {
      this.level1.draw();
      this.level1.update(3000);
    }

    this.logo.draw();
    this.gitHubs.draw();
  }
}

export const game = new Game();
