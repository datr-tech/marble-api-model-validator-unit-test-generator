import { IParserParseOutput } from '@app-mamv/interfaces/parser';

export interface IGeneratorOutput extends IParserParseOutput {
  contents: {
    negative: string;
    positive: string;
  };
}
