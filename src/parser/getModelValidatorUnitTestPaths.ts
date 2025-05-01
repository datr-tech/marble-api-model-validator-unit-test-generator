import { FileExtensionEnum } from '@app-mamv/enums';
import { IParserGetModelValidatorUnitTestPaths } from '@app-mamv/interfaces/parser';
import path from 'node:path';

export const getModelValidatorUnitTestPaths: IParserGetModelValidatorUnitTestPaths = ({
  api,
  modelValidatorName,
}) => ({
  negative: path.resolve(
    api.paths.test,
    `${modelValidatorName}.negative.test.${FileExtensionEnum.ts}`,
  ),
  positive: path.resolve(
    api.paths.test,
    `${modelValidatorName}.positive.test.${FileExtensionEnum.ts}`,
  ),
});
