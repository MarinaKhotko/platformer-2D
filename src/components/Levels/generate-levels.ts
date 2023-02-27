import { Platform, Shining } from '../../utils/sprites/static/static-sprite';
import { BackgroundParallax } from '../backgrounds-LEVELS/background';
import {
  layersL1,
  speedModifiersL1,
} from '../backgrounds-LEVELS/data/img-background-1';
import type Game from '../game-canvas';
import { Level } from './class-level';
import { paramertsLevel1 } from './data-levels';

export function generatelevel1(game: Game): Level {
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
    new BackgroundParallax(game, layersL1, speedModifiersL1),
    platforms,
    shinings,
  );
  return level1;
}

export function generatelevel2(game: Game): Level {
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
  const level2 = new Level(
    game,
    new BackgroundParallax(game, layersL1, speedModifiersL1),
    platforms,
    shinings,
  );
  return level2;
}
