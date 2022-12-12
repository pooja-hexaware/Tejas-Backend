import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingsController } from './toppings.controller';
import { ToppingsSchema } from './toppings.model';
import { ToppingsService } from './toppings.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Topping', schema: ToppingsSchema}])],
  controllers: [ToppingsController],
  providers: [ToppingsService],
  exports: [ToppingsService],
})
export class ToppingsModule {}
