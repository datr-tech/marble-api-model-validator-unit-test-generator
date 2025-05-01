import { getChildFilePaths } from './getChildFilePaths';

export const getChildFileCodePaths = async ({ dirPath }) =>
  (await getChildFilePaths({ dirPath })).filter(
    (childFilePath) => !childFilePath.toString().includes('index'),
  );
