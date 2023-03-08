import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { config } from 'dotenv'
config()

import { AppModule } from './app.module'

export async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  Logger.log('Hello World!')
}

bootstrap()
