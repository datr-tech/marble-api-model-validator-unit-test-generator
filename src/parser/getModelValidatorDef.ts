import { modelValidatorDefs } from '@app-mamv/config';
import { IParserGetModelValidatorDef } from '@app-mamv/interfaces/parser';

export const getModelValidatorDef: IParserGetModelValidatorDef = ({
  modelValidatorName,
}) =>
  typeof modelValidatorDefs[modelValidatorName] === 'undefined'
    ? null
    : modelValidatorDefs[modelValidatorName];
