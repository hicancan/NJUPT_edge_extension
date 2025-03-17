// src/modules/pe/index.ts

import { getMorningRunData } from './api';
import { MorningRun } from './components/MorningRun';
import { PeGrades } from './components/PeGrades';

export const PeModule = {
    getMorningRunData,
    MorningRun,
    PeGrades,
};