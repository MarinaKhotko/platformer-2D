import { movingControl } from '../utils/moving-control';
import { Player } from '../utils/sprites/moving/characters/player/player';
import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { AllLevels } from './Levels/class-AllLevels';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  public player = new Player(this);
  startPage = new StartPage(this);
  startPageOpened = true;
  logo = new Logo(this);
  gitHubs = new GitHubs(this);
  gameSpeed = 5;
  allLevels: AllLevels;

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.startPage.addListener(this);
    this.allLevels = new AllLevels(this);
    this.player = new Player(this);
  }

  public update(): void {
    if (this.startPageOpened) this.startPage.update(this);
    this.allLevels.levels.forEach((el) => {
      if (el.opened) {
        el.update(3000);
        movingControl(this, el);
        this.player.update();
      }
    });
    this.logo.draw();
    this.gitHubs.draw();
  }
}

export const game = new Game();
