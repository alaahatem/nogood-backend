import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { PrismaModule } from '../prisma-service/prisma.module';
import { CampaignController } from './campaign.controller';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CampaignArchive } from './campaign-archive.service';

@Module({
  imports: [PrismaModule, ScheduleModule],
  controllers: [CampaignController],
  providers: [CampaignService ,CampaignArchive, PrismaService],
})
export class CampaignModule {}
