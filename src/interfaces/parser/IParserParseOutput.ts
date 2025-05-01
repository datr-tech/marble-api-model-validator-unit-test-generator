export interface IParserParseOutput {
  appRef: string;
  idFieldNames: {
    modelValidator: string;
    service: string;
  };
  modelValidatorName: string;
  serviceName: string;
  serviceMethodName: string;
  serviceMethodNameUcFirst: string;
  serviceMockName: string;
  unitTestPaths: {
    negative: string;
    positive: string;
  };
}
