import type { Picture } from '../../../utils/models/index';

const backgroundLayer1: Picture = new Image();
backgroundLayer1.src = require('../../../../assets/backgrounds/2/1.png');
const backgroundLayer2: Picture = new Image();
backgroundLayer2.src = require('../../../../assets/backgrounds/2/2.png');
const backgroundLayer3: Picture = new Image();
backgroundLayer3.src = require('../../../../assets/backgrounds/2/3.png');
const backgroundLayer4: Picture = new Image();
backgroundLayer4.src = require('../../../../assets/backgrounds/2/4.png');
const backgroundLayer5: Picture = new Image();
backgroundLayer5.src = require('../../../../assets/backgrounds/2/5.png');
const backgroundLayer6: Picture = new Image();
backgroundLayer6.src = require('../../../../assets/backgrounds/2/6.png');
const backgroundLayer7: Picture = new Image();
backgroundLayer7.src = require('../../../../assets/backgrounds/2/7.png');
const backgroundLayer8: Picture = new Image();
backgroundLayer8.src = require('../../../../assets/backgrounds/2/8.png');
const backgroundLayer9: Picture = new Image();
backgroundLayer9.src = require('../../../../assets/backgrounds/2/9.png');

export const layersL2 = [
  backgroundLayer1,
  backgroundLayer2,
  backgroundLayer3,
  backgroundLayer4,
  backgroundLayer5,
  backgroundLayer6,
  backgroundLayer7,
  backgroundLayer8,
  backgroundLayer9,
];

export const speedModifiersL2: number[] = [0.5, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.7, 0.8];