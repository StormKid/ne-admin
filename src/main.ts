import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
       retryAttempts : 10,
       retryDelay : 5000,
    },
  });
  await app.listen(80);
}
bootstrap();
