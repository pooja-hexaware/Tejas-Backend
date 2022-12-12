import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuDocument } from './menu.model';
import { MenuService } from './menu.service';

@Controller('api')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @Get('menu')
    async findall() {

        const menu = await this.menuService.findall();
        return menu;

    }
    @Post('menu')
    async create(@Body() menuModel: MenuDocument) {

        const user = await this.menuService.create(menuModel);
    }
    @Get('menu/:id')

    async findMenuById(@Param('id') id: any) {

        return this.menuService.findMenuById(id);

    }
    @Delete('menu/:id')
    delete(@Param('id') id: string) {
        return this.menuService.delete(id);
    }

}
