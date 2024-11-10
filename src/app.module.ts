import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampaignModule } from './campaign/campaign.module';
import { PrismaModule } from './prisma-service/prisma.module';

@Module({
  imports: [PrismaModule, CampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
