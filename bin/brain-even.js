#!/usr/bin/env node
import playGame from '../src/index.js';
import { makeRound, gameRules } from '../src/games/even.js';

playGame(makeRound, gameRules);
