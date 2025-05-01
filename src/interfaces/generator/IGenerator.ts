import { IGeneratorInput } from './IGeneratorInput';
import { IGeneratorOutput } from './IGeneratorOutput';

export interface IGenerator {
  (args: IGeneratorInput): IGeneratorOutput;
}
