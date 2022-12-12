import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { StoresSchema } from './stores.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Store', schema: StoresSchema}])],
  controllers: [StoresController],
  providers: [StoresService],
  exports: [StoresService],
})
export class StoresModule {}
