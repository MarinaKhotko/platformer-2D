
import { movingControl } from '../utils/moving-control';
import { PlayerStandart } from '../utils/sprites/moving/characters/player/player';

import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { AllLevels } from './Levels/class-AllLevels';

import { Finish } from './START-GAME/FINISH';
import { GameOver } from './START-GAME/GameOver';
import { PausaPage } from './START-GAME/Pause-Page';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  startPage = new StartPage(this);
  logo = new Logo(this);
  gitHubs = new GitHubs(this);
  gameSpeed = 5;
  allLevels: AllLevels;  
  startPageOpened = true;
  pause = false;
  finish = false;
  gameOver = false;
  player: PlayerStandart;
  pausePage = new PausaPage(this);
  finishPage = new Finish(this);
  gameOverPage = new GameOver(this)
  currentLevel = '0';

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
    if (!this.pause && !this.finish && !this.gameOver) {
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
    if (this.pause) {
      game.ctx.save();
      game.pausePage.update(this);
    }
    if (this.finish) {
      game.ctx.save();
      this.allLevels.levels.forEach((el) => {
        if (el.opened) game.finishPage.update(this, el);
      });
    }
  }
}

export const game = new Game();

// export const Scores = {
//   '1': {
//     score: 0,
//     time: '00:00'
//   },
//   '2': {
//     score: 0,
//   },
//   '3': {
//     score: 0,
//   },
// };
