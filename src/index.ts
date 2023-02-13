import './style.sass';
import Game from './components/game-canvas';
import { animate } from './components/layer';

const game = new Game();

const loop = (): void => {
  requestAnimationFrame(loop);
  game.tick();
  animate();
};
requestAnimationFrame(loop);
