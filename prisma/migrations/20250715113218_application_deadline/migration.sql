/*
  Warnings:

  - Made the column `applicationDeadline` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "applicationDeadline" SET NOT NULL,
ALTER COLUMN "applicationDeadline" SET DATA TYPE TEXT;
