import { Body, Controller, Post } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  public publish(@Body('topic') topic: string, @Body('message') message: string) {
    return this.appService.publish(topic, message)
  }
}
