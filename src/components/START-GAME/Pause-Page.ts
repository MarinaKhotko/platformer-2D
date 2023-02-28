
import type { MillingCutter } from "../../utils/sprites/moving/rotating/milling-cutter";
import { Sprite } from "../../utils/sprites/Sprite";
import { Platform } from "../../utils/sprites/static/static-sprite";
import type Game from "../game-canvas";
import { millingCuttersSTART } from "./millingCuttersSTART";
import { styleNameGame } from "./styleNameGame";

export class PausaPage {
    backgroundStart: Sprite;
    platform1: Platform;
    millingCutters: MillingCutter[];
  
    constructor(game: Game) {
      this.backgroundStart = new Sprite(
        game,
        { x: 0, y: 0 },
        { x: window.innerWidth, y: window.innerHeight },
        { x: 2540, y: 1440 },
        './../assets/background_start.png',
      );

      this.platform1 = new Platform(
        game,
        { x: 200, y: -500 },
        { x: 578, y: 111 },
        48,
      );
  
      this.millingCutters = millingCuttersSTART(game);
    }
  
    addListener(game: Game): void {
      game.canvas.addEventListener('keydown', (KeyboardEvent) => {
        if (KeyboardEvent.code === 'Pause') {
            game.ctx.restore()
        }
      });
    }
  
    update(game: Game): void {
      this.backgroundStart.draw();
      this.millingCutters.forEach((el: MillingCutter) => {
        el.update();
        el.render();
      });
      this.platform1.render(game);
      styleNameGame(game);
    }
  }