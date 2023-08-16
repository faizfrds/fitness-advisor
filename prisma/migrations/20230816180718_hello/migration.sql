/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Made the column `categoryId` on table `Exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_categoryId_fkey";

-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
