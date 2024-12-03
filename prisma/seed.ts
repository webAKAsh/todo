import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "Content of post 1",
    author: {
      connectOrCreate: {
        where: {
          email: "akash@gmail.coom",
        },
        create: {
          email: "akash@gmail.coom",
          hashedPassword: "asdadasdajnkl23j4",
        },
      },
    },
  },
];

async function main() {
  console.log(`Start Seeding....`);

  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log(`Create post with id : ${newPost.id}`);
  }

  console.log(`Seeding finished.`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
