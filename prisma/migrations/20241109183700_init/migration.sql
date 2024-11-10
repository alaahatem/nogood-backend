-- CreateTable
CREATE TABLE "campaigns" (
    "ad_id" SERIAL NOT NULL,
    "xyz_campaign_id" INTEGER NOT NULL,
    "fb_campaign_id" INTEGER NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "interest" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "clicks" INTEGER NOT NULL,
    "spent" DOUBLE PRECISION NOT NULL,
    "total_conversion" INTEGER NOT NULL,
    "approved_conversion" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("ad_id")
);
