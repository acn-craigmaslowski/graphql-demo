-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "lastModifiedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "lastModifiedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Reaction" ADD COLUMN     "lastModifiedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastModifiedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;