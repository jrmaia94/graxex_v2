/*
  Warnings:

  - You are about to drop the column `ciclo` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `ciclo` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "ciclo",
ADD COLUMN     "period" INTEGER;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "ciclo",
ADD COLUMN     "period" INTEGER;
