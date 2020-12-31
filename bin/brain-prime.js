#!/usr/bin/env node
import playGame from '../src/index.js';
import { gamePrime, description } from '../src/games/prime.js';

playGame(gamePrime, description);
