import fs from 'node:fs/promises';
import { getChildPaths } from './getChildPaths';

export const getChildFilePaths = async ({ dirPath }) =>
  (await getChildPaths({ dirPath })).filter(async (childPath) =>
    (await fs.stat(childPath)).isFile(),
  );
