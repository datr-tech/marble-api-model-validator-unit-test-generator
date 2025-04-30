import { apis } from '@app-mamv/core/config';
import { logger } from '@datr.tech/leith-common-logger';

for (const api of apis) {
  logger.info({ api });
}
