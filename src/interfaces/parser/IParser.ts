import { IParserGetAppRef } from './IParserGetAppRef';
import { IParserGetModelValidatorDef } from './IParserGetModelValidatorDef';
import { IParserGetModelValidatorName } from './IParserGetModelValidatorName';
import { IParserGetModelValidatorUnitTestPaths } from './IParserGetModelValidatorUnitTestPaths';
import { IParserParse } from './IParserParse';

export interface IParser {
  getAppRef: IParserGetAppRef;
  getModelValidatorDef: IParserGetModelValidatorDef;
  getModelValidatorName: IParserGetModelValidatorName;
  getModelValidatorUnitTestPaths: IParserGetModelValidatorUnitTestPaths;
  parse: IParserParse;
}
