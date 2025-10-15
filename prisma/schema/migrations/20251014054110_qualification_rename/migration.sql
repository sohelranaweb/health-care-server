/*
  Warnings:

  - You are about to drop the column `qualificaton` on the `doctors` table. All the data in the column will be lost.
  - Added the required column `qualification` to the `doctors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "qualificaton",
ADD COLUMN     "qualification" TEXT NOT NULL;
