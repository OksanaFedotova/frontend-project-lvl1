#!/usr/bin/env node
import playGame from '../src/index.js';
import { getSpecificPrime, description } from '../src/games/prime.js';

playGame(getSpecificPrime, description);
