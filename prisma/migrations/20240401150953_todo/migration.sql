-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "todoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_todoId_key" ON "Todo"("todoId");
