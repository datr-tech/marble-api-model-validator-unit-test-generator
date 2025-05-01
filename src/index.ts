import { apis } from '@app-mamv/config';
import { dir } from '@app-mamv/dir';
import { generator } from '@app-mamv/generator';
import { parser } from '@app-mamv/parser';
import { writer } from '@app-mamv/writer';

(async () => {
  for (const api of apis) {
    const dirPath = api.paths.src;
    const filePaths = await dir.getChildFileCodePaths({ dirPath });

    for (const filePath of filePaths) {
      const modelValidatorDef = parser.parse({ api, filePath });
      const generatedDef = generator({ modelValidatorDef });
      writer({ generatedDef });
    }
  }
})();
