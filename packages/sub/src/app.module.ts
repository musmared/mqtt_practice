import { readFileSync } from 'fs'
import { join } from 'path'

import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'musma_sub',
        transport: Transport.MQTT,
        options: {
          url: process.env.MQTT_URL,
          rejectUnauthorized: true,
          ca: readFileSync(join(__dirname, '../server.crt')), // 인증서 파일 경로
          key: readFileSync(join(__dirname, '../server.key')), // 개인 키 파일 경로
          cert: readFileSync(join(__dirname, '../server.crt')), // 공개 인증서 파일 경로
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
