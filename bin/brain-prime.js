#!/usr/bin/env node
import playGame from '../src/index.js';
import { makeRound, gameRules } from '../src/games/prime.js';

playGame(makeRound, gameRules);
