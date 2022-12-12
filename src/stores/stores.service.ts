import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store,StoresDocument } from './stores.model' ;

@Injectable()
export class StoresService {

    constructor(@InjectModel('Store') private storesModel: Model<StoresDocument>) { }


    async create(store: StoresDocument) {
        const newMenu = new this.storesModel(store);
        const result = await newMenu.save();
        console.log(result);
    }

    async findall() {
        const stores = await this.storesModel.find({}).exec();
        //console.log(users);
        return stores;
    }
    async findStorebyId(id: any): Promise<Store[]> {
        const filter = { _id: id };
        let menu = await this.storesModel.find(filter).populate('menu');
        return menu;

    }
    async delete(storeId): Promise<Store>{
        const filter = { _id: storeId };
        return this.storesModel.findByIdAndDelete(storeId);

    }


}
