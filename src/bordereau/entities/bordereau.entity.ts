import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BordereauDocument = HydratedDocument<Bordereau>;
@Schema()
export class Bordereau {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Array, required: true })
  lignes: object[];

  @Prop({ type: String })
  num_serie: string;

  @Prop({ type: String })
  observation: string;

  @Prop({
    type: String,
    default: `Des piéces adressées a Monsieur le Directeur du secteur parapublic (DSP) s/c
    du Directeur général de la comptabilité publique et du tresor  (DGCPT)`,
  })
  designataire: string;
}
export const BordereauSchema = SchemaFactory.createForClass(Bordereau);
