import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToppingDocument } from './toppings.model';
import { ToppingsService } from './toppings.service';

@Controller('api')
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Get('toppings')
  async findall(){

    const toppings = await this.toppingsService.findall();
    return toppings;

 }
 @Post('toppings')
 async create( @Body() toppingModel: ToppingDocument) {
       
    const user= await this.toppingsService.create(toppingModel);
}

}
