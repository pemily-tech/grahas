/*
  Warnings:

  - You are about to drop the `StoreRegistration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "StoreRegistration";

-- CreateTable
CREATE TABLE "DreamHouseRegistration" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "comment" VARCHAR(15) NOT NULL,
    "mobileNumber" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DreamHouseRegistration_pkey" PRIMARY KEY ("id")
);
