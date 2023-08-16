/*
  Warnings:

  - You are about to drop the column `published` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "published",
DROP COLUMN "updatedAt";
