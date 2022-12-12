import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderDocument } from './order.model'; 
import { OrderService } from './order.service'; 

@Controller('api')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get('order')
    async findall() {

        const order = await this.orderService.findall();
        return order;

    }
    @Post('order')
    async create(@Body() orderModel: OrderDocument) {

        const order = await this.orderService.create(orderModel);
        return order;
    }
    @Get('order/:id')

    async findOrderById(@Param('id') id: any) {

        return this.orderService.findOrderById(id);

    }
    @Delete('order/:id')
    delete(@Param('id') id: string) {
        return this.orderService.delete(id);
    }

}
