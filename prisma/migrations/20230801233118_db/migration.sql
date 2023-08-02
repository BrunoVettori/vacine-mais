-- CreateTable
CREATE TABLE "animal" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "cor" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_aplicacao" TIMESTAMP(3) NOT NULL,
    "proxima_aplicacao" TIMESTAMP(3),
    "animal_id" TEXT NOT NULL,
    "veterinario_aplicou" TEXT,
    "veterinario_crm" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "vacina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vacina" ADD CONSTRAINT "vacina_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
