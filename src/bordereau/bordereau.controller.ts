import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BordereauService } from './bordereau.service';
import { CreateBordereauDto } from './dto/create-bordereau.dto';
import { UpdateBordereauDto } from './dto/update-bordereau.dto';

@Controller('bordereau')
export class BordereauController {
  constructor(private readonly bordereauService: BordereauService) {}

  @Post()
  create(@Body() createBordereauDto: CreateBordereauDto) {
    return this.bordereauService.create(createBordereauDto);
  }

  @Get()
  findAll() {
    return this.bordereauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bordereauService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBordereauDto: UpdateBordereauDto,
  ) {
    return this.bordereauService.update(id, updateBordereauDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bordereauService.remove(id);
  }
}
