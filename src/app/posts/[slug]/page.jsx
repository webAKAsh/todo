import { updatePost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return (
    <main className="flex items-center justify-around pt-24 text-center">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
      <form
        action={updatePost}
        className="flex flex-col gap-y-2 w-[300px] border py-2 px-4 border-white rounded"
      >
        <h1 className="text-2xl">Edit the task</h1>
        <input className="hidden" name="itemId" value={post?.id} readOnly />
        <input
          name="title"
          type="text"
          placeholder={post?.title}
          className="px-2 py-1 rounded-sm text-black"
        />
        <textarea
          name="content"
          rows={5}
          placeholder={post?.content}
          className="px-2 py-1 rounded-sm text-black"
        />

        <button
          type="submit"
          className="bg-indigo-500 py-2 text-white rounded-sm"
        >
          Edit Post
        </button>
      </form>
    </main>
  );
}
