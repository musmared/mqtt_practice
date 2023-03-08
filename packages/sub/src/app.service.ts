import { Injectable } from '@nestjs/common'
import { MessagePattern, MqttContext } from '@nestjs/microservices'

@Injectable()
export class AppService {
  @MessagePattern('musma')
  public getNotifications(data: number[], context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`)
    console.log(`Text: ${data}`)
  }
}
