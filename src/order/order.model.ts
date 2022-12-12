import { Prop, Schema, SchemaFactory,raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose'


export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order{
    @Prop()
    storeId: string;

    @Prop()
    PersonName: string

    @Prop()
    street: string;

    @Prop()
    postalCode: string;

    @Prop()
    city: string;

    @Prop()
    mobile: number;

    @Prop(raw([{
        menuId : {type: String},
        menuName: { type: String },
        menuPrice: { type: Number},
        quantity:{type: Number},
        toppings: { type: [String] },
        priceWithQunt: { type: Number }
      }]))
      OrderItem: Record<string, any>;


   
    
}

export const OrderSchema = SchemaFactory.createForClass(Order);