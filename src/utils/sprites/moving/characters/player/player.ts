import type Game from '../../../../../components/game-canvas';
import { game } from '../../../../../components/game-canvas';

const gravity = 0.5;

export class Player {
  position: { x: number; y: number };
  width: number;
  height: number;
  game: Game;
  velocity: { x: number; y: number };

  constructor(game: Game) {
    this.position = {
      x: 100,
      y: game.canvas.height * 0.7,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.game = game;
    this.width = 100;
    this.height = 100;
  }

  draw(): void {
    this.game.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update(): void {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    this.position.y + this.height + this.velocity.y <= this.game.canvas.height
      ? (this.velocity.y += gravity)
      : (this.velocity.y = 0);
  }
}

export const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  speed: 0
};

window.addEventListener('keydown', (KeyboardEvent) => {
  switch (KeyboardEvent.code) {
    case 'KeyA':
      keys.left.pressed = true;
      break;
    case 'KeyS':
      game.player.velocity.y = 30;
      break;
    case 'KeyD':
      keys.right.pressed = true;
      break;
    case 'KeyW':
      game.player.velocity.y = -30;
      break;
  }
});

window.addEventListener('keyup', (KeyboardEvent) => {
  switch (KeyboardEvent.code) {
    case 'KeyA':
      keys.left.pressed = false;
      keys.speed = 0
      break;
    case 'KeyS':
      game.player.velocity.y = 0;
      break;
    case 'KeyD':
      keys.right.pressed = false;
      keys.speed = 0
      break;
    case 'KeyW':
      game.player.velocity.y = 0;
      break;
  }
});

