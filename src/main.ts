// import { NestFactory } from '@nestjs/core';

// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create<NestFastifyApplication>(
//     AppModule,
//     new FastifyAdapter(),
//   );
//   // app.enableCors();
//   // app.init();
//   await app.listen(3001, () => {
//     console.log(`服务已经启动`);
//   });
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, () => {
    console.log(`服务已经启动`);
  });
}
bootstrap();
