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
  modelValidatorHopId: {
    idFieldNames: {
      modelValidator: 'hopId',
      service: 'hopId',
    },
    serviceMethodName: 'hasHop',
    serviceName: 'dolomiteService',
    serviceMockName: 'dolomiteService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorJourneyId: {
    idFieldNames: {
      modelValidator: 'journeyId',
      service: 'journeyId',
    },
    serviceMethodName: 'hasJourney',
    serviceName: 'dolomiteService',
    serviceMockName: 'dolomiteService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorOrganisationId: {
    idFieldNames: {
      modelValidator: 'organisationId',
      service: 'organisationId',
    },
    serviceMethodName: 'hasOrganisation',
    serviceName: 'personaService',
    serviceMockName: 'personaService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
  modelValidatorOwnerUserId: {
    idFieldNames: {
      modelValidator: 'ownerUserId',
      service: 'userId',
    },
    serviceMethodName: 'hasUser',
    serviceName: 'personaService',
    serviceMockName: 'personaService',
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
  modelValidatorUserId: {
    idFieldNames: {
      modelValidator: 'userId',
      service: 'userId',
    },
    serviceMethodName: 'hasUser',
    serviceName: 'personaService',
    serviceMockName: 'personaService',
    templates: {
      negative: 'modelValidatorNegativeTestTemplate',
      positive: 'modelValidatorPositiveTestTemplate',
    },
  },
};
