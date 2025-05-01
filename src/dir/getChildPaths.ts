import path from 'node:path';
import { getChildNames } from './getChildNames';

export const getChildPaths = async ({ dirPath }) =>
  (await getChildNames({ dirPath })).map((childName) => path.resolve(dirPath, childName));
