import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose'
import { ToppingDocument } from 'src/toppings/toppings.model';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu{
    @Prop()
    foodName: string;

    @Prop()
    description: string

    @Prop()
    foodPrice: number;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }] })
    toppings: ToppingDocument[];

    
}

export const MenuSchema = SchemaFactory.createForClass(Menu);