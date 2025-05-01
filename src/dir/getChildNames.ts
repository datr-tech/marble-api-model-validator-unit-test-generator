import fs from 'node:fs/promises';

export const getChildNames = async ({ dirPath }) =>
  (await fs.stat(dirPath)).isDirectory() && (await fs.readdir(dirPath));
