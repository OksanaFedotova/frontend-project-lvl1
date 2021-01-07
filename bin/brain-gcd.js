#!/usr/bin/env node
import playGame from '../src/index.js';
import { getSpecificGcd, description } from '../src/games/gcd.js';

playGame(getSpecificGcd, description);
