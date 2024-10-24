import { Injectable } from '@nestjs/common';
import { CreateBordereauDto } from './dto/create-bordereau.dto';
import { UpdateBordereauDto } from './dto/update-bordereau.dto';
import { Model } from 'mongoose';
import { Bordereau } from './entities/bordereau.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BordereauService {
  constructor(
    @InjectModel(Bordereau.name)
    private readonly BordereauModel: Model<Bordereau>,
  ) {}

  async create(createBordereauDto: CreateBordereauDto): Promise<Bordereau> {
    const p = new this.BordereauModel(createBordereauDto);
    return await p.save();
  }

  async findAll(): Promise<Bordereau[]> {
    return await this.BordereauModel.find();
  }

  async findOne(id: string) {
    return await this.BordereauModel.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, updateBordereauDto: UpdateBordereauDto) {
    return await this.BordereauModel.findById(id);
  }

  async remove(id: string) {
    return await this.BordereauModel.findByIdAndDelete(id);
  }
}
