import { IApi } from '@app-mamv/interfaces/core/config';
import { apiKeywords } from './apiKeywords';
import { apiNames } from './apiNames';
import { apiPaths } from './apiPaths';
import { pathFragmentModelValidators } from './pathFragmentModelValidators';

export const apis: IApi[] = [
  {
    keyword: apiKeywords.dolomite,
    name: apiNames.dolomite,
    path: {
      modelValidators: `${apiPaths.dolomite}/${pathFragmentModelValidators}`,
      root: apiPaths.dolomite,
    },
  },
  {
    keyword: apiKeywords.entity,
    name: apiNames.entity,
    path: {
      modelValidators: `${apiPaths.entity}/${pathFragmentModelValidators}`,
      root: apiPaths.entity,
    },
  },
  {
    keyword: apiKeywords.freight,
    name: apiNames.freight,
    path: {
      modelValidators: `${apiPaths.freight}/${pathFragmentModelValidators}`,
      root: apiPaths.freight,
    },
  },
  {
    keyword: apiKeywords.granul8,
    name: apiNames.granul8,
    path: {
      modelValidators: `${apiPaths.granul8}/${pathFragmentModelValidators}`,
      root: apiPaths.granul8,
    },
  },
  {
    keyword: apiKeywords.persona,
    name: apiNames.persona,
    path: {
      modelValidators: `${apiPaths.persona}/${pathFragmentModelValidators}`,
      root: apiPaths.persona,
    },
  },
  {
    keyword: apiKeywords.proc,
    name: apiNames.proc,
    path: {
      modelValidators: `${apiPaths.proc}/${pathFragmentModelValidators}`,
      root: apiPaths.proc,
    },
  },
];
