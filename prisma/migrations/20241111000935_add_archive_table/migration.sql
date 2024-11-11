
-- CreateTable
CREATE TABLE "campaigns_archive" (
    "id" SERIAL NOT NULL,
    "fb_campaign_id" INTEGER NOT NULL,
    "archive_file" TEXT NOT NULL,
    "archived_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campaigns_archive_pkey" PRIMARY KEY ("id")
);
