const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // --- Seed Admin ---
  const email = 'admin@amrita.edu';
  const password = 'password123'; // Default password
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
    },
  });

  console.log('✅ Admin seed successful!');
  console.log('---------------------');
  console.log(`Admin email:    ${email}`);
  console.log(`Admin password: ${password}`);
  console.log('---------------------\n');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

