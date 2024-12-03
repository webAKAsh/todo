import { createPost, deletePost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsPage() {
  // const posts = await prisma.post.findMany();
  const user = await prisma.user.findUnique({
    where: {
      email: "akash@gmail.coom",
    },
    include: {
      posts: true,
    },
  });

  return (
    <main className="flex items-center justify-around pt-24 text-center">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl font-semibold">
          All Post ({user?.posts.length})
        </h1>
        <ul className="border-t border-b border-white py-5 leading-8">
          {user?.posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              className="flex items-center justify-between px-5 mb-5 gap-x-4 border border-white rounded-md py-3"
            >
              <h1 className="text-white text-lg">{post.title}</h1>
              <form action={deletePost}>
                <input
                  name="itemId"
                  className="hidden"
                  value={post.id}
                  readOnly
                />
                <button
                  className="bg-white text-black rounded-md py-1 px-4"
                  type="submit"
                >
                  Delete
                </button>
              </form>
            </Link>
          ))}
        </ul>
      </div>
      <form
        action={createPost}
        className="flex flex-col gap-y-2 w-[300px] border py-2 px-4 border-white rounded"
      >
        <h1 className="text-2xl">Add Your tasks</h1>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="px-2 py-1 rounded-sm text-black"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm"
        >
          Create Post
        </button>
      </form>
    </main>
  );
}
