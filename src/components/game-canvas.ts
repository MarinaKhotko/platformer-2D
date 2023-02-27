import { movingControl } from '../utils/moving-control';
import { Player, PlayerDog, PlayerStandart } from '../utils/sprites/moving/characters/player/player';
import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { AllLevels } from './Levels/class-AllLevels';
import { PausaPage } from './START-GAME/Pause-Page';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  startPage = new StartPage(this);
  startPageOpened = true;
  logo = new Logo(this);
  gitHubs = new GitHubs(this);
  gameSpeed = 5;
  allLevels: AllLevels;
  pause = false
  player: PlayerStandart | PlayerDog;
  pausePage = new PausaPage(this);

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.startPage.addListener(this);
    this.allLevels = new AllLevels(this);
    this.player = new PlayerStandart(this);
  }

    public update(): void {
      if (!this.pause){
    if (this.startPageOpened) this.startPage.update(this);
    this.allLevels.levels.forEach((el) => {
      if (el.opened) {
        el.update(3000);
        movingControl(this, el);
        this.player.update(2);
      }
    });
    this.logo.draw();
    this.gitHubs.draw();
  }
  else{
    game.ctx.save()
    game.pausePage.update(this)
    console.log(5)
  }

}
}



export const game = new Game();


