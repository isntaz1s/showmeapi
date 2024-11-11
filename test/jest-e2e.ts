import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from '../tsconfig.json';

const config: Config = {
  testEnvironment: 'node',
  rootDir: '../',
  testRegex: '.e2e-test.ts$',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};

export default config;
