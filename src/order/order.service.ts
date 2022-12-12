import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.model';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private orderModel: Model<OrderDocument>) { }


    async create(order: OrderDocument) {
        const newOrder = new this.orderModel(order);
        const result = await newOrder.save();
        console.log(result);
    }

    async findall() {
        const order = await this.orderModel.find({}).exec();
        //console.log(users);
        return order;
    }
    async findOrderById(id: any): Promise<Order[]> {
        const filter = { _id : id};
        let order = await this.orderModel.find(filter).populate('orderItem');
        return order;

    }
    async delete(orderId): Promise<Order>{
        const filter = { _id: orderId };
        return this.orderModel.findByIdAndDelete(orderId);

    }


}
