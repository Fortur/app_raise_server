import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type HierarchyDocument = Hierarchy & mongoose.Document;

@Schema()
export class Hierarchy {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hierarchy' })
  manager: Hierarchy;
}

export const HierarchySchema = SchemaFactory.createForClass(Hierarchy);
