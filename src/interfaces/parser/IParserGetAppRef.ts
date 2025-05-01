import { IParserGetAppRefInput } from './IParserGetAppRefInput';
import { IParserGetAppRefOutput } from './IParserGetAppRefOutput';

export interface IParserGetAppRef {
  (args: IParserGetAppRefInput): IParserGetAppRefOutput;
}
