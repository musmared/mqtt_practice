import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'

@Injectable()
export class AppService {
  constructor(@Inject('musma_pub') public client: ClientProxy) {}
  public publish(topic: string, message: string): Observable<any> {
    return this.client.emit(topic, message)
  }
}
