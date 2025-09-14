'use strict';

const {PrismaClient} = require('../../generated/prisma/index.js');

const prisma = new PrismaClient();

const main = async () => {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "Hero" RESTART IDENTITY CASCADE`);
    console.log("Hero table has been reseted, autoincrement key back to 1");
}

main()
    .catch(err => console.error(err))
    .finally(async () => {
        await prisma.$disconnect()
    });