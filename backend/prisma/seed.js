const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
(async function main() {
  try {
    const user = await prisma.users.upsert({
      where: { Id: 0 },
      update: {},
      create: {
        Id: 0,
        Email: 'black2001ray@gmail.com',
        Password: '123123123',
        isVerified: false,
      },
    });

    const token = await prisma.tokens.upsert({
        where: { Id: 0 },
        update: {},
        create: {
          Id: 0,
          UserId: 0,
          Token: '1231231241241241'
        },
      });
 
    console.log('Created 1 user and 1 token: ', user, token);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();