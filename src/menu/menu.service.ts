import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu,MenuDocument } from './menu.model';

@Injectable()
export class MenuService {
     
    constructor(@InjectModel('Menu') private menuModel: Model<MenuDocument>) { }


    async create(menu: MenuDocument) {
        const newMenu = new this.menuModel(menu);
        const result = await newMenu.save();
        console.log(result);
    }

    async findall() {
        const menu = await this.menuModel.find({}).exec();
        //console.log(users);
        return menu;
    }
    async findMenuById(id: any): Promise<Menu[]> {
        const filter = { _id : id};
        let topping = await this.menuModel.find(filter).populate('toppings');
        return topping;

    }
    async delete(menuId): Promise<Menu>{
        const filter = { _id: menuId };
        return this.menuModel.findByIdAndDelete(menuId);

    }


}
