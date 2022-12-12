import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderSchema } from './order.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
