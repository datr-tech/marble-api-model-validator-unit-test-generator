import { logger } from "@datr.tech/leith-common-logger";
import { apis } from '@app-mamv/core/config';

for (const api of apis) {
  logger.info({ api });
}
