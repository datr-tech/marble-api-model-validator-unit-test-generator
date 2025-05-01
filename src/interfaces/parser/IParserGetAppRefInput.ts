import { IApi } from '@app-mamv/interfaces/config';

export interface IParserGetAppRefInput {
  api: IApi;
  appKeyword?: string;
  procKeyword?: string;
  p2Keyword?: string;
}
