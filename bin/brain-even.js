#!/usr/bin/env node
import playGame from '../src/index.js';
import { gameEven, description } from '../src/games/even.js';

playGame(gameEven, description);
