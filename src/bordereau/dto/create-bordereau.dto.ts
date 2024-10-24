import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBordereauDto {
  @IsNotEmpty()
  @IsString()
  date: Date;

  @IsOptional()
  @IsString()
  num_serie: string;

  @IsArray()
  lignes: object[];

  @IsOptional()
  @IsString()
  observation: string;

  @IsOptional()
  @IsString()
  designataire: string;
}
