import { Controller } from '@nestjs/common'
import { MessagePattern, Payload, Ctx, MqttContext } from '@nestjs/microservices'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('musma')
  getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
    return this.appService.getNotifications(data, context)
  }
}
