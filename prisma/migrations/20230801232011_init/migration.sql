-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ROOT', 'ADMIN', 'USER', 'GUEST');

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uf" (
    "uf" TEXT NOT NULL,

    CONSTRAINT "uf_pkey" PRIMARY KEY ("uf")
);

-- CreateTable
CREATE TABLE "cidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_documento_key" ON "usuario"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "cidade" ADD CONSTRAINT "cidade_uf_fkey" FOREIGN KEY ("uf") REFERENCES "uf"("uf") ON DELETE RESTRICT ON UPDATE CASCADE;
