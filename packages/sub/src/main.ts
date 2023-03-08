import { readFileSync } from 'fs'
import { join } from 'path'

import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { config } from 'dotenv'

config()
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      url: process.env.MQTT_URL,
      ca: readFileSync(join(__dirname, '../server.crt')), // 인증서 파일 경로
      key: readFileSync(join(__dirname, '../server.key')), // 개인 키 파일 경로
      cert: readFileSync(join(__dirname, '../server.crt')), // 공개 인증서 파일 경로
    },
  })
  await app.listen()
  console.log('connected')
}
bootstrap()
