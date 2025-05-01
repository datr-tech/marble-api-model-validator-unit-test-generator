import { IParser } from '@app-mamv/interfaces/parser';
import { getAppRef } from './getAppRef';
import { getModelValidatorDef } from './getModelValidatorDef';
import { getModelValidatorName } from './getModelValidatorName';
import { getModelValidatorUnitTestPaths } from './getModelValidatorUnitTestPaths';
import { parse } from './parse';

export const parser: IParser = {
  getAppRef,
  getModelValidatorDef,
  getModelValidatorName,
  getModelValidatorUnitTestPaths,
  parse,
};
