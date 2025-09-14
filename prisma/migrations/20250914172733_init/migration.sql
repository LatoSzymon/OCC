-- CreateEnum
CREATE TYPE "public"."Klasy" AS ENUM ('tank', 'dps', 'support');

-- CreateTable
CREATE TABLE "public"."Hero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "public"."Klasy" NOT NULL,
    "advice_with" TEXT NOT NULL,
    "advice_vs" TEXT NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Kontrowanie" (
    "id_relacji" SERIAL NOT NULL,
    "sourceHeroId" INTEGER NOT NULL,
    "targetHeroId" INTEGER NOT NULL,
    "counter_rate" DOUBLE PRECISION NOT NULL,
    "synergy_rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Kontrowanie_pkey" PRIMARY KEY ("id_relacji")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hero_name_key" ON "public"."Hero"("name");

-- AddForeignKey
ALTER TABLE "public"."Kontrowanie" ADD CONSTRAINT "Kontrowanie_sourceHeroId_fkey" FOREIGN KEY ("sourceHeroId") REFERENCES "public"."Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Kontrowanie" ADD CONSTRAINT "Kontrowanie_targetHeroId_fkey" FOREIGN KEY ("targetHeroId") REFERENCES "public"."Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
