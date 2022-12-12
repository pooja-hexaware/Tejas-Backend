import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StoresDocument } from './stores.model';
import { StoresService } from './stores.service';

@Controller('api')
export class StoresController {
    constructor(private readonly storesService: StoresService) { }

    @Get('store')
    async findall() {

        const menu = await this.storesService.findall();
        return menu;

    }
    @Post('store')
    async create(@Body() menuModel: StoresDocument) {

        const user = await this.storesService.create(menuModel);
    }
    @Get('store/:id')

    async findStorebyId(@Param('id') id: any) {

        return this.storesService.findStorebyId(id);

    }
    @Delete('menu/:id')
    delete(@Param('id') id: string) {
        return this.storesService.delete(id);
    }

}
