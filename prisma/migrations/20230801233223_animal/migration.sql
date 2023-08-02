/*
  Warnings:

  - Added the required column `usuario_id` to the `animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animal" ADD COLUMN     "usuario_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
