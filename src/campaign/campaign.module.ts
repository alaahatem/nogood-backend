import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { PrismaModule } from '../prisma-service/prisma.module';
import { CampaignController } from './campaign.controller';
import { PrismaService } from 'src/prisma-service/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CampaignController],
  providers: [CampaignService , PrismaService],
})
export class CampaignModule {}
