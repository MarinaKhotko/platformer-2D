import './style.sass';
import Game from './components/game-canvas';

const game = new Game();

const loop = (): void => {
  requestAnimationFrame(loop);
  game.update(30);
};

requestAnimationFrame(loop);
