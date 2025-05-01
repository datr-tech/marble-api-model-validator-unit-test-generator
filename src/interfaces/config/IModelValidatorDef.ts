export interface IModelValidatorDef {
  idFieldNames: {
    modelValidator: string;
    service: string;
  };
  serviceMethodName: string;
  serviceName: string;
  serviceMockName: string;
  templates: {
    negative: string;
    positive: string;
  };
}
