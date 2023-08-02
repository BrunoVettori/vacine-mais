/*
  Warnings:

  - You are about to drop the `cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `uf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cidade" DROP CONSTRAINT "cidade_uf_fkey";

-- DropTable
DROP TABLE "cidade";

-- DropTable
DROP TABLE "uf";
