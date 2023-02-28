import { Platform, Shining } from '../../utils/sprites/static/static-sprite';
import { BackgroundParallax } from '../backgrounds-LEVELS/background';
import {
  layersL1,
  speedModifiersL1,
} from '../backgrounds-LEVELS/data/img-background-1';
import { layersL2, speedModifiersL2 } from '../backgrounds-LEVELS/data/img-background-2';
import { layersL3, speedModifiersL3 } from '../backgrounds-LEVELS/data/img-background-3';
import type Game from '../game-canvas';
import { Level } from './class-level';
import { paramertsLevel1, paramertsLevel2, paramertsLevel3 } from './data-levels';

export function generatelevel1(game: Game): Level {
  game.currentLevel = '1'
  const platforms = [];
  const shinings = [];
  for (let i = 0; i < paramertsLevel1.PlatformPositions.length; i++) {
    platforms.push(
      new Platform(
        game,
        paramertsLevel1.PlatformPositions[i],
        paramertsLevel1.PlatformSize[i],
        90,
      ),
    );
  }
  for (let i = 0; i < paramertsLevel1.ShiningPositions.length; i++) {
    shinings.push(new Shining(game, paramertsLevel1.ShiningPositions[i]));
  }
  const level1 = new Level(
    game,
    4000,
    new BackgroundParallax(game, layersL1, speedModifiersL1),
    platforms,
    shinings,
  );
  return level1;
}

export function generatelevel2(game: Game): Level {
  game.currentLevel = '2'
  const platforms = [];
  const shinings = [];
  for (let i = 0; i < paramertsLevel2.PlatformPositions.length; i++) {
    platforms.push(
      new Platform(
        game,
        paramertsLevel2.PlatformPositions[i],
        paramertsLevel2.PlatformSize[i],
        90,
      ),
    );
  }
  for (let i = 0; i < paramertsLevel2.ShiningPositions.length; i++) {
    shinings.push(new Shining(game, paramertsLevel1.ShiningPositions[i]));
  }
  const level2 = new Level(
    game,
    4000,
    new BackgroundParallax(game, layersL2, speedModifiersL2),
    platforms,
    shinings,
  );
  return level2;
}


export function generatelevel3(game: Game): Level {
  game.currentLevel = '3'
  const platforms = [];
  const shinings = [];
  for (let i = 0; i < paramertsLevel3.PlatformPositions.length; i++) {
    platforms.push(
      new Platform(
        game,
        paramertsLevel2.PlatformPositions[i],
        paramertsLevel2.PlatformSize[i],
        90,
      ),
    );
  }
  for (let i = 0; i < paramertsLevel3.ShiningPositions.length; i++) {
    shinings.push(new Shining(game, paramertsLevel3.ShiningPositions[i]));
  }
  const level3 = new Level(
    game,
    6000,
    new BackgroundParallax(game, layersL3, speedModifiersL3),
    platforms,
    shinings,
  );
  return level3;
}