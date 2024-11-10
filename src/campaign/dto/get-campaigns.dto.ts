// src/campaigns/dto/get-campaigns.dto.ts
import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class GetCampaignsDto {
  @IsOptional()
  @IsString()
  start_date?: string;

  @IsOptional()
  @IsString()
  end_date?: string;

  @IsOptional()
  @IsNumber()
  ad_id?: number;

  @IsOptional()
  @IsString()
  age?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsNumber()
  interest?: number;

  // Numeric filters with operators
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  impressions_gt?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  impressions_lt?: number;
  
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  clicks_gt?: number;
  
  
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  clicks_lt?: number;
  
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  spent_gt?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  spent_lt?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  approved_conversion_gt?: number;
  
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  approved_conversion_lt?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  total_conversion_gt?: number;
  
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  total_conversion_lt?: number;

  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;

  @IsOptional()
  @IsString()
  sortBy?: string;

  @IsOptional()
  page?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  limit?: number;
}
