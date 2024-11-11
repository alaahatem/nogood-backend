import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma-service/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CampaignArchive {
  private readonly logger = new Logger(CampaignArchive.name);

  constructor(private prisma: PrismaService) {}
  async onModuleInit() {
    this.logger.log('CampaignService initialized.');
  }
  // This method will run every week 
  @Cron(CronExpression.EVERY_WEEK)
  async archiveOldCampaigns() {
    const oldestCampaign = await this.prisma.campaign.findFirst({
      orderBy: {
        start_date: 'asc',
      },
      take: 1, 
    });

    if (!oldestCampaign) {
      this.logger.log('No campaigns found to archive.');
      return;
    }

    this.logger.log(`Oldest campaign found: ${oldestCampaign.fb_campaign_id}`);

    const campaignsToArchive = await this.prisma.campaign.findMany({
      where: {
        fb_campaign_id: oldestCampaign.fb_campaign_id, 
      },
    });

    if (campaignsToArchive.length === 0) {
      this.logger.log('No campaigns found for archiving.');
      return;
    }

    await this.archiveCampaigns(campaignsToArchive);

    await this.deleteArchivedCampaigns(oldestCampaign.fb_campaign_id);

    this.logger.log(
      `Archived and deleted ${campaignsToArchive.length} campaigns with fb_campaign_id: ${oldestCampaign.fb_campaign_id}`,
    );
  }

  private async archiveCampaigns(campaigns: any[]) {
      const campaignData = JSON.stringify(campaigns, null, 2);

      await this.prisma.CampaignArchive.create({
        data: {
          fb_campaign_id: campaigns[0].fb_campaign_id, 
          archive_file: campaignData, 
          archived_at: new Date(), 
        },
      });
  }

  private async deleteArchivedCampaigns(fb_campaign_id: number) {
    await this.prisma.campaign.deleteMany({
      where: {
        fb_campaign_id: fb_campaign_id,
      },
    });
  }
}
