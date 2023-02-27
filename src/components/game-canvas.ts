import { movingControl } from '../utils/moving-control';
import { Player, PlayerDog, PlayerStandart } from '../utils/sprites/moving/characters/player/player';
import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { AllLevels } from './Levels/class-AllLevels';
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
  count = 0
  player: PlayerStandart | PlayerDog;

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
      // if (!this.pause){
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
  // if (this.count === 0) setInterval(myCallback, 10000)
}

// }

export const game = new Game();





// function myCallback(): void{
//   game.count = 1
//   game.ctx.save()
//   game.pause = true
//   game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
//   console.log(111)
//   setInterval(myCallback2, 5000)
// }

// // export function pause (game: Game): void{
// //   game.ctx.save()
// //   game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
 
// //   setInterval(myCallback, 5000)
// //  }

// //  pause(game)

// function myCallback2(): void{
//   game.pause = false
//   game.ctx.restore()

// }