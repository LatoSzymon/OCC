import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

const test = async () => {
    const heroes = await prisma.hero.findMany();
    console.log(heroes);
}

test();