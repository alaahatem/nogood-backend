import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins (or specify which origins to allow)
  app.enableCors({
    origin: 'http://localhost:3001',  // Replace with your client URL
    methods: 'GET, POST',             // Allowed methods
    allowedHeaders: 'Content-Type',   // Allowed headers
  });

  await app.listen(3000);
}

bootstrap();
