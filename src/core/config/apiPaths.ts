import { apiKeywords } from './apiKeywords';
import { apiNames } from './apiNames';
import { pathFramework } from './pathFramework';

export const apiPaths = {};
apiPaths[apiKeywords.dolomite] = `${pathFramework}/${apiNames.dolomite}`;
apiPaths[apiKeywords.entity] = `${pathFramework}/${apiNames.entity}`;
apiPaths[apiKeywords.freight] = `${pathFramework}/${apiNames.freight}`;
apiPaths[apiKeywords.granul8] = `${pathFramework}/${apiNames.granul8}`;
apiPaths[apiKeywords.persona] = `${pathFramework}/${apiNames.persona}`;
apiPaths[apiKeywords.proc] = `${pathFramework}/${apiNames.proc}`;
