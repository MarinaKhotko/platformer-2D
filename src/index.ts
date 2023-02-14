import { game } from './components/game-canvas';
import './style.sass';

const loop = (): void => {
  requestAnimationFrame(loop);
  game.update(30);
};

requestAnimationFrame(loop);
