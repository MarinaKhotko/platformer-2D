import { Enemy } from '../utils/character';

export const wasp = new Enemy(
  { x: window.innerWidth, y: 100 },
  { x: 60, y: 70 },
  { x: 240, y: 500 },
  { x: -3, y: 1 },
  '../../assets/wasp/wasp.png',
);
