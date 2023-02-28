import { game } from '../components/game-canvas';

export const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  speed: 0,
  activeKey: '',
  previousKey: '',
};

window.addEventListener('keydown', (KeyboardEvent) => {
  switch (KeyboardEvent.code) {
    case 'KeyA' || 'ArrowLeft':
      keys.left.pressed = true;
      keys.activeKey = 'left';
      break;
    case 'KeyS' || 'ArrowDown':
      game.player.velocityY = 30;
      keys.activeKey = 'down';
      break;
    case 'KeyD' || 'ArrowRight':
      keys.right.pressed = true;
      keys.activeKey = 'right';
      break;
    case 'KeyW' || 'ArrowUp':
      game.player.velocityY = -30;
      keys.activeKey = 'up';
      break;

    case 'Pause':
      game.pause === false ? (game.pause = true) : (game.pause = false);
      break;
  }
});

window.addEventListener('keyup', (KeyboardEvent) => {
  switch (KeyboardEvent.code) {
    case 'KeyA' || 'ArrowLeft':
      keys.left.pressed = false;
      keys.speed = 0;
      keys.previousKey = 'left';
      break;
    case 'KeyS' || 'ArrowDown':
      game.player.velocityY = 0;
      keys.previousKey = 'down';
      break;
    case 'KeyD' || 'ArrowRight':
      keys.right.pressed = false;
      keys.previousKey = 'right';
      keys.speed = 0;
      break;
    case 'KeyW' || 'ArrowUp':
      game.player.velocityY = 0;
      keys.previousKey = 'up';
      break;
  }
});
