import { MillingCutter } from '../../utils/sprites/moving/rotating/milling-cutter';
import type Game from '../game-canvas';

export function millingCuttersSTART(game: Game): MillingCutter[] {
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
      game,
      ARRpositions[i].sizeFinal,
      ARRpositions[i].rotationAxis,
    );
  }
  return millingCuttersARR;
}
