import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-2xl">Hi Mobulous, Hope You Like it !</h1>
      <Link href={'/posts'} className="bg-white py-3 px-6 text-2xl text-black rounded-md">See Posts</Link>
    </div>
  );
}
