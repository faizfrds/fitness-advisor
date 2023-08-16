/*
  Warnings:

  - You are about to drop the column `email` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `exerciseId` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `description` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_exerciseId_fkey";

-- DropIndex
DROP INDEX "Category_email_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exerciseId",
ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
