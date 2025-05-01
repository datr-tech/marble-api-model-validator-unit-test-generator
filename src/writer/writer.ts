import { writeTest } from './writeTest';

export const writer = async ({ generatedDef }) => {
  writeTest({
    testCode: generatedDef.contents.negative,
    testPath: generatedDef.unitTestPaths.negative,
  });

  writeTest({
    testCode: generatedDef.contents.positive,
    testPath: generatedDef.unitTestPaths.positive,
  });
};
