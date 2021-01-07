#!/usr/bin/env node
import playGame from '../src/index.js';
import { getSpecificProgression, description } from '../src/games/progression.js';

playGame(getSpecificProgression, description);
