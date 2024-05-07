-- CreateEnum
CREATE TYPE "Role" AS ENUM ('pengocok', 'pengasah', 'pengadul');

-- CreateTable
CREATE TABLE "PekerjaKasar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PekerjaKasar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PekerjaKasar_name_key" ON "PekerjaKasar"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PekerjaKasar_email_key" ON "PekerjaKasar"("email");
