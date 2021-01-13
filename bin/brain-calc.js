#!/usr/bin/env node
import playGame from '../src/index.js';
import { makeRound, description } from '../src/games/calc.js';

playGame(makeRound, description);
