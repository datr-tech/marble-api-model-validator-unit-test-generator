import { FileExtensionEnum } from '@app-mamv/enums';

export interface IParserGetModelValidatorNameInput {
  filePath: string;
  fileExtensionEnum?: FileExtensionEnum;
}
