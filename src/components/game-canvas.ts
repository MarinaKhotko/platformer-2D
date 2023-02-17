import { keys, Player } from '../utils/sprites/moving/characters/player/player';
import { GitHubs, Logo } from '../utils/sprites/static/static-sprite';
import { Level1 } from './Level-1/level-1';
import { StartPage } from './START-GAME/START-page';

export default class Game {
  public canvas = document.querySelector('canvas') as HTMLCanvasElement;
  public ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  public player = new Player(this);

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

    this.player = new Player(this);
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

    if (!this.startPageOpened) this.player.update();

    if (
      keys.right.pressed &&
      this.player.position.x < window.innerWidth * 0.6
    ) {
      this.player.velocity.x = 5;
    } else if (keys.left.pressed && this.player.position.x > 100) {
      this.player.velocity.x = -5;
    } else {
      this.player.velocity.x = 0;

      if (keys.right.pressed)
        this.level1.platforms.forEach((el) => {
          el.position.x -= 5;
        });
      else if (keys.left.pressed)
        this.level1.platforms.forEach((el) => {
          el.position.x += 5;
        });
    }

    this.level1.platforms.forEach((el) => {
    if (
      this.player.position.y + this.player.height <=
        el.position.y &&
      this.player.position.y + this.player.height + this.player.velocity.y >=
        el.position.y &&
      this.player.position.x + this.player.width >=
        el.position.x &&
      this.player.position.x <=
        el.position.x + el.sizeFinal.x
    )
      this.player.velocity.y = 0;
  
})
}}

export const game = new Game();
