#!/usr/bin/env node
import playGame from '../src/index.js';
import { makeRound, description } from '../src/games/gcd.js';

playGame(makeRound, description);
