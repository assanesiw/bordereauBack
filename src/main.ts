import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const port = config.get('NEST_PORT');
  await app.listen(port, () =>
    logger.debug('application est bien demmarer sur le port : ' + port),
  );
}
bootstrap();
