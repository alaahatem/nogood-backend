// src/campaigns/campaign.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service/prisma.service';
import { Campaign } from '@prisma/client';
import { GetCampaignsDto, SortOrder } from './dto/get-campaigns.dto';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async getAllCampaigns(dto?: GetCampaignsDto): Promise<Campaign[]> {
    const {
      start_date,
      end_date,
      ad_id,
      age,
      gender,
      interest,
      impressions_gt,
      impressions_lt,
      clicks_gt,
      clicks_lt,
      spent_gt,
      spent_lt,
      approved_conversion_gt,
      approved_conversion_lt,
      total_conversion_gt,
      total_conversion_lt,
      sortOrder = SortOrder.ASC,
      sortBy = 'ad_id',
      page = 1,
      limit = 10,
    } = dto || {};
    const skip = (page - 1) * limit;
    const take = limit;

    const campaigns = await this.prisma.campaign.findMany({
      where: {
        ...(start_date && { start_date: { gte: new Date(start_date) } }),
        ...(end_date && { end_date: { lte: new Date(end_date) } }),
        ...(ad_id && { ad_id }),
        ...(age && { age }),
        ...(gender && { gender }),
        ...(interest && { interest }),

        // Dynamic numeric filters
        ...(impressions_gt && { impressions: { gt: impressions_gt } }),
        ...(impressions_lt && { impressions: { lt: impressions_lt } }),
        ...(clicks_gt && { clicks: { gt: clicks_gt } }),
        ...(clicks_lt && { clicks: { lt: clicks_lt } }),
        ...(spent_gt && { spent: { gt: spent_gt } }),
        ...(spent_lt && { spent: { lt: spent_lt } }),
        ...(approved_conversion_gt && { approved_conversion: { gt: approved_conversion_gt } }),
        ...(approved_conversion_lt && { approved_conversion: { lt: approved_conversion_lt } }),
        ...(total_conversion_gt && { total_conversion: { gt: total_conversion_gt } }),
        ...(total_conversion_lt && { total_conversion: { lt: total_conversion_lt } }),
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip,
      take,
    });

    return campaigns;
  }
}
