import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose'

export type ToppingDocument = HydratedDocument<Topping>;

@Schema()
export class Topping{
    @Prop()
    ToppingName: string;

    @Prop()
    ToppingPrice: number;
    
}

export const ToppingsSchema = SchemaFactory.createForClass(Topping);