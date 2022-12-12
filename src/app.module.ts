import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { StoresModule } from './stores/stores.module';
import { ToppingsModule } from './toppings/toppings.module';

@Module({
  imports: [OrderModule,StoresModule,MenuModule,ToppingsModule,MongooseModule.forRoot('mongodb+srv://tejasbhasme123:Tejas123@cluster0.zrfkdy0.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
