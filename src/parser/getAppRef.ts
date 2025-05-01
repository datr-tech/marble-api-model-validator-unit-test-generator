import { IParserGetAppRef } from '@app-mamv/interfaces/parser';

export const getAppRef: IParserGetAppRef = ({ api }) =>
  '@app-' + (api.keyword !== 'proc' ? 'a' + api.keyword.charAt(0) : 'p2');
