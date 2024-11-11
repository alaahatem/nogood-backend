import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignResponseDto, GetCampaignsDto } from './dto/get-campaigns.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  async getAllCampaigns(@Query() getCampaignsDto: GetCampaignsDto): Promise<CampaignResponseDto[]> {
    return this.campaignService.getAllCampaigns(getCampaignsDto);
  }
}
