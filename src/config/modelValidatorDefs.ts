import { IModelValidatorDefs } from '@app-mamv/interfaces/config';

export const modelValidatorDefs: IModelValidatorDefs = {
  modelValidatorAdminStatusId: {
    idFieldNames: {
      modelValidator: 'adminStatusId',
      service: 'statusId',
    },
    serviceMethodName: 'hasStatus',
    serviceName: 'adminService',
    serviceMockName: 'adminService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorAdminUserId: {
    idFieldNames: {
      modelValidator: 'adminUserId',
      service: 'userId',
    },
    serviceMethodName: 'hasUser',
    serviceName: 'adminService',
    serviceMockName: 'personaService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorFrameworkId: {
    idFieldNames: {
      modelValidator: 'frameworkId',
      service: 'frameworkId',
    },
    serviceMethodName: 'hasFramework',
    serviceName: 'entityService',
    serviceMockName: 'entityService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorResourceId: {
    idFieldNames: {
      modelValidator: 'resourceId',
      service: 'resourceId',
    },
    serviceMethodName: 'hasResource',
    serviceName: 'entityService',
    serviceMockName: 'entityService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
};
