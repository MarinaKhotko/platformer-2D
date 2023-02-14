import { MillingCutter } from '../../utils/sprites/rotating/milling-cutter';
import { Button } from '../../utils/common-classes/classButton';
import type Game from '../game-canvas';
import { backgroundStart } from '../game-canvas';
import { Platform } from '../../utils/sprites/static/static-sprite';

export function millingCuttersSTART(): MillingCutter[] {
  const millingCuttersARR = [];
  const sizeBig = { x: 1000, y: 1000 };
  const sizeSmall = { x: 300, y: 300 };

  const ARRpositions = [
    {
      sizeFinal: sizeBig,
      rotationAxis: {
        x: window.innerWidth * 0.7,
        y: window.innerHeight * 0.3,
      },
    },
    {
      sizeFinal: sizeBig,
      rotationAxis: {
        x: window.innerWidth * 0.1,
        y: window.innerHeight + 130,
      },
    },
    {
      sizeFinal: sizeSmall,
      rotationAxis: {
        x: window.innerWidth * 0.3,
        y: window.innerHeight - 20,
      },
    },
    {
      sizeFinal: sizeSmall,
      rotationAxis: {
        x: window.innerWidth - 20,
        y: window.innerHeight * 0.6,
      },
    },
  ];

  for (let i = 0; i < ARRpositions.length; i++) {
    millingCuttersARR[i] = new MillingCutter(
      ARRpositions[i].sizeFinal,
      ARRpositions[i].rotationAxis,
    );
  }
  return millingCuttersARR;
}

export function styleNameGame(ptotot: Game): void {
  ptotot.ctx.fillStyle = 'black';
  ptotot.ctx.font = '190px Luckiest Guy';
  ptotot.ctx.strokeStyle = 'White';
  ptotot.ctx.lineWidth = 5;
  ptotot.ctx.fillText('DARK MYSTERY', ptotot.canvas.width / 2, 250);
  ptotot.ctx.strokeText('DARK MYSTERY', ptotot.canvas.width / 2, 250);
  ptotot.ctx.textAlign = 'center';
}

export class StartPage {
  millingCutters = millingCuttersSTART();
  startGameButton = new Button(
    { x: window.innerWidth * 0.15, y: window.innerHeight * 0.4 },
    { x: 400, y: 120 },
    100,
    'PLAY',
    'white',
    'black',
  );

  platform1 = new Platform(
    { x: window.innerWidth * 0.15, y: -window.innerHeight * 0.5 },
    { x: 778, y: 111 },
    48,
  );

  addListener(game: Game): void {
    game.canvas.addEventListener('click', (event: MouseEvent) => {
      const mouseX =
        event.pageX - (game.canvas.clientLeft + game.canvas.offsetLeft);
      const mouseY =
        event.pageY - (game.canvas.clientTop + game.canvas.offsetTop);
      console.log(mouseX, mouseY);
      if (this.startGameButton.inBounds(mouseX, mouseY)) {
        game.startPageOpened = false;
      }
      console.log(game.startPageOpened);
      return game.startPageOpened;
    });
  }

  update(ptotot: Game): void {
    backgroundStart.draw();
    this.millingCutters.forEach((el: MillingCutter) => {
      el.update();
      el.render();
    });
    this.platform1.render();
    styleNameGame(ptotot);
    this.startGameButton.draw(ptotot);
  }
}
