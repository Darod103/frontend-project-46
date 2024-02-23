#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
    .version('0.0.1')
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    


program.parse()