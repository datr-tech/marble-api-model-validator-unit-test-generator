import { IGenerator, IGeneratorOutput } from '@app-mamv/interfaces/generator';
import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generator: IGenerator = ({ modelValidatorDef }) =>
  ({
    ...modelValidatorDef,
    contents: {
      negative: fsTemplate.getContents(
        modelValidatorDef['templates']['negative'],
        modelValidatorDef,
      ),
      positive: fsTemplate.getContents(
        modelValidatorDef['templates']['positive'],
        modelValidatorDef,
      ),
    },
  }) as IGeneratorOutput;
