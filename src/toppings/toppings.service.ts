import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToppingDocument } from './toppings.model';

@Injectable()
export class ToppingsService {
    
    constructor(@InjectModel('Topping') private toppingModel: Model<ToppingDocument>){}
  getHello(): string {
    return 'Hello World!';
  }

  async create(topping: ToppingDocument){
      const newTopping = new this.toppingModel(topping);
      const result = await newTopping.save();
  }

  async findall() {
    const toppings = await this.toppingModel.find().exec();
    //console.log(users);
    return toppings;
}


}
