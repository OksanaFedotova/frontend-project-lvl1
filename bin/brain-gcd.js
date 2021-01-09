#!/usr/bin/env node
import playGame from '../src/index.js';
import { makeRound, gameRules } from '../src/games/gcd.js';

playGame(makeRound, gameRules);
