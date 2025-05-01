import { IParserParseInput } from './IParserParseInput';
import { IParserParseOutput } from './IParserParseOutput';

export interface IParserParse {
  (args: IParserParseInput): IParserParseOutput;
}
