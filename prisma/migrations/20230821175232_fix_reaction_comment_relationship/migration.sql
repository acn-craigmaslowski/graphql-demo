/*
  Warnings:

  - Made the column `userId` on table `Reaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Reaction" ALTER COLUMN "commentId" DROP NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;
