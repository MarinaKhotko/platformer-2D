import './style.sass';
import Game from './components/game-canvas';

const game = new Game();
const loop = () => {
  requestAnimationFrame(loop);
  game.tick();
};
requestAnimationFrame(loop);
