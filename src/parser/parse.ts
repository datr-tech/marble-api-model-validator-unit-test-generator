import { IParserParse } from '@app-mamv/interfaces/parser';
import { getAppRef } from './getAppRef';
import { getModelValidatorDef } from './getModelValidatorDef';
import { getModelValidatorName } from './getModelValidatorName';
import { getModelValidatorUnitTestPaths } from './getModelValidatorUnitTestPaths';

export const parse: IParserParse = ({ api, filePath }) => {
  const appRef = getAppRef({ api });
  const modelValidatorName = getModelValidatorName({ filePath });
  const modelValidatorDef = getModelValidatorDef({ modelValidatorName });

  if (!modelValidatorDef) {
    throw new Error('modelValidatorDef: invalid');
  }

  const { idFieldNames, serviceName, serviceMethodName, serviceMockName, templates } =
    modelValidatorDef;
  const serviceMethodNameUcFirst =
    serviceMethodName.charAt(0).toUpperCase() + serviceMethodName.slice(1);
  const unitTestPaths = getModelValidatorUnitTestPaths({ api, modelValidatorName });

  return {
    appRef,
    idFieldNames,
    modelValidatorName,
    serviceName,
    serviceMethodName,
    serviceMethodNameUcFirst,
    serviceMockName,
    templates,
    unitTestPaths,
  };
};
