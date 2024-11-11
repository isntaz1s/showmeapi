import app from '~/app';
import { env } from './config/env';

// initialize main application
async function main() {
  await app.listen({ port: env.PORT }, (err) => {
    if (err) {
      app.log.info(`Server could not listening, because ${err}`);
    }
  });
  return app;
}

main();
