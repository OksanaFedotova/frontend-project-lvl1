#!/usr/bin/env node
import playGame from '../src/index.js';
import { getSpecificCalc, description } from '../src/games/calc.js';

playGame(getSpecificCalc, description);
