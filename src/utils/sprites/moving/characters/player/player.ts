import type Game from '../../../../../components/game-canvas';
import type { Vector } from '../../../../interfaces';
import { MovingSprite } from '../MovingSprite';

const gravity = 0.5;

export class Player extends MovingSprite {
  protected fps = 40;
  protected frameTimer = 0;
  protected frameInterval = 1000 / this.fps;
  maxFrame: number

  constructor(
    game: Game,
    sizeFinal : Vector,
    spriteSize : Vector,
    frames : Vector,
    path : string,
    maxFrame: number,
    position = {
      x: 100,
      y: game.canvas.height * 0.7,
    },
    velocityX = 10,
    velocityY = 10,
  ) {
    super(
      game,
      position,
      sizeFinal,
      spriteSize,
      path,
      frames,
      velocityX,
      velocityY,
    )
    this.maxFrame = maxFrame;
  }

  
  update(deltaTime: number): void {

    this.position.x += this.velocityX;
    this.position.y += this.velocityY;

    this.position.y + this.sizeFinal.y + this.velocityY <=
    this.game.canvas.height - 80
      ? (this.velocityY += gravity)
      : (this.velocityY = 0);

        if (this.frameTimer > this.frameInterval) {
          this.frameTimer = 0;
          this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);
        } else {
          this.frameTimer += deltaTime;
}
this.draw()
}
}




export class PlayerStandart extends Player {
  constructor(
    game: Game,
    sizeFinal = { x: 228*0.6, y: 185 *0.6},
    spriteSize = { x: 226, y: 189 },
    frames = { x: 0, y: 0 },
    path = './../../../../../../assets/hero.png',
    maxFrame = 14,
    position = {
      x: 100,
      y: game.canvas.height * 0.7,
    },
    velocityX = 10,
    velocityY = 10,
  ) {
    super(
      game,
      sizeFinal,
      spriteSize,
      frames,
      path,
      maxFrame,
      position,
      velocityX,
      velocityY,
    );

  }
}

export class PlayerDog extends Player {
  constructor(
    game: Game,
    sizeFinal = { x: 200*0.7, y: 200 *0.7},
    spriteSize = { x: 200, y: 200 },
    frames = { x: 0, y: 0 },
    path = './../../../../../../assets/player.png',
    maxFrame = 8,
    position = {
      x: 100,
      y: game.canvas.height * 0.7,
    },
    velocityX = 10,
    velocityY = 10,
  ) {
    super(
      game,
      sizeFinal,
      spriteSize,
      frames,
      path,
      maxFrame,
      position,
      velocityX,
      velocityY,
    );

  }
}