import { IApi } from '@app-mamv/interfaces/config';
import { datrTechRoot } from './datrTechRoot';

export const apis: IApi[] = [
  {
    keyword: 'dolomite',
    name: 'api-dolomite',
    paths: {
      src: `${datrTechRoot}/api-dolomite/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-dolomite/test/unit/api/modelValidators/foreign`,
    },
  },
  {
    keyword: 'entity',
    name: 'api-entity',
    paths: {
      src: `${datrTechRoot}/api-entity/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-entity/test/unit/api/modelValidators/foreign`,
    },
  },
  {
    keyword: 'freight',
    name: 'api-freight',
    paths: {
      src: `${datrTechRoot}/api-freight/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-freight/test/unit/api/modelValidators/foreign`,
    },
  },
  {
    keyword: 'granul8',
    name: 'api-granul8',
    paths: {
      src: `${datrTechRoot}/api-granul8/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-granul8/test/unit/api/modelValidators/foreign`,
    },
  },
  {
    keyword: 'persona',
    name: 'api-persona',
    paths: {
      src: `${datrTechRoot}/api-persona/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-persona/test/unit/api/modelValidators/foreign`,
    },
  },
  {
    keyword: 'proc',
    name: 'api-proc',
    paths: {
      src: `${datrTechRoot}/api-proc/src/api/modelValidators/foreign`,
      test: `${datrTechRoot}/api-proc/test/unit/api/modelValidators/foreign`,
    },
  },
];
