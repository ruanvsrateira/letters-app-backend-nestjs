/*
  Warnings:

  - Added the required column `author` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Letter" DROP CONSTRAINT "Letter_folderId_fkey";

-- AlterTable
ALTER TABLE "Letter" ADD COLUMN     "author" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
