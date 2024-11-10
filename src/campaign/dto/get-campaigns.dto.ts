// src/campaigns/dto/get-campaigns.dto.ts
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
  @IsOptional()
  impressions_gt?: number;

  @IsOptional()
  impressions_lt?: number;

  @IsOptional()
  clicks_gt?: number;

  @IsOptional()
  clicks_lt?: number;

  @IsOptional()
  spent_gt?: number;

  @IsOptional()
  spent_lt?: number;

  @IsOptional()
  approved_conversion_gt?: number;

  @IsOptional()
  approved_conversion_lt?: number;

  @IsOptional()
  total_conversion_gt?: number;

  @IsOptional()
  total_conversion_lt?: number;

  @IsOptional()
  @IsString()
  sortOrder?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  sortBy?: string;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
