-- CreateTable
CREATE TABLE "Layout" (
    "id" TEXT NOT NULL,
    "order" TEXT[],

    CONSTRAINT "Layout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreRegistration" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "comment" VARCHAR(15) NOT NULL,
    "mobileNumber" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Layout_id_idx" ON "Layout"("id");
