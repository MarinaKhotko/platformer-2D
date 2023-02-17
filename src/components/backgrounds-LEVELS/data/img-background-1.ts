import type { Picture } from '../../../utils/models/index';

const backgroundLayer1: Picture = new Image();
backgroundLayer1.src = require('../../../../assets/backgrounds/1/layer-1.png');
const backgroundLayer2: Picture = new Image();
backgroundLayer2.src = require('../../../../assets/backgrounds/1/layer-2.png');
const backgroundLayer3: Picture = new Image();
backgroundLayer3.src = require('../../../../assets/backgrounds/1/layer-3.png');
const backgroundLayer4: Picture = new Image();
backgroundLayer4.src = require('../../../../assets/backgrounds/1/layer-4.png');
const backgroundLayer5: Picture = new Image();
backgroundLayer5.src = require('../../../../assets/backgrounds/1/layer-5.png');
const backgroundLayer6: Picture = new Image();
backgroundLayer6.src = require('../../../../assets/backgrounds/1/layer-6.png');
const backgroundLayer7: Picture = new Image();
backgroundLayer7.src = require('../../../../assets/backgrounds/1/layer-7.png');

export const layersL1 = [
  backgroundLayer1,
  backgroundLayer2,
  backgroundLayer3,
  backgroundLayer4,
  backgroundLayer5,
  backgroundLayer6,
  backgroundLayer7,
];

export const speedModifiersL1: number[] = [0.5, 0.1, 0.2, 0.4, 0.5, 0.5, 0.8];
