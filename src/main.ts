import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins (or specify which origins to allow)
  app.enableCors({
    origin: 'https://nogood-dashboard-p4ph.vercel.app', // Replace with your client URL
    methods: 'GET, POST', // Allowed methods
    allowedHeaders: 'Content-Type', // Allowed headers
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // This enables transformation of types in your DTOs
      whitelist: true, // This removes any properties not defined in your DTO
      // forbidNonWhitelisted: true, // Optional: throws an error if unknown properties are included
    }),
  );

  await app.listen(3000);
}

bootstrap();
