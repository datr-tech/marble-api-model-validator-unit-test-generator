import { IParserGetModelValidatorDefInput } from './IParserGetModelValidatorDefInput';
import { IParserGetModelValidatorDefOutput } from './IParserGetModelValidatorDefOutput';

export interface IParserGetModelValidatorDef {
  (args: IParserGetModelValidatorDefInput): IParserGetModelValidatorDefOutput;
}
