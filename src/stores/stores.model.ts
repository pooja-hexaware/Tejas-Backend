import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose'
import { MenuDocument } from 'src/menu/menu.model';

export type StoresDocument = HydratedDocument<Store>;

@Schema()
export class Store{
    @Prop()
    storeName: string;

    @Prop()
    address: string

    @Prop()
    zip: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    storePhone: string;

    @Prop()
    kitchenPhone: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
    menu: MenuDocument[];
    
}

export const StoresSchema = SchemaFactory.createForClass(Store);