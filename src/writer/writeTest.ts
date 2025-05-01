import { logger } from '@datr.tech/leith-common-logger';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

export const writeTest = async ({ testCode, testPath }) => {
  const dirPath = path.dirname(testPath);
  const doesDirExist = fs.existsSync(dirPath);

  if (!doesDirExist) {
    await fsp.mkdir(dirPath, { recursive: true });
  }

  await fsp.writeFile(testPath, testCode, 'utf8');
  logger.info(testPath);
};
