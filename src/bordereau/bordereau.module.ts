import { Module } from '@nestjs/common';
import { BordereauService } from './bordereau.service';
import { BordereauController } from './bordereau.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bordereau, BordereauSchema } from './entities/bordereau.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Bordereau.name,
        useFactory: () => {
          const schema = BordereauSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [BordereauController],
  providers: [BordereauService],
})
export class BordereauModule {}
