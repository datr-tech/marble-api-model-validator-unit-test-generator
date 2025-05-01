import { FileExtensionEnum } from '@app-mamv/enums';
import { IParserGetModelValidatorName } from '@app-mamv/interfaces/parser';
import path from 'node:path';

export const getModelValidatorName: IParserGetModelValidatorName = ({
  filePath,
  fileExtensionEnum = FileExtensionEnum.ts,
}) => path.basename(filePath, '.' + fileExtensionEnum.toString());
