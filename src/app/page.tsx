import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "~/server/auth";
Link


export default async function HomePage() {
  const session = await getServerSession(authOptions)
  return (

    <>
      <span className="font-bold text-4xl">Home</span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      <Link href={`/books/1-0ccb70a0-1928-4aa5-acf7-5d9988a1b81b`} scroll={false}>
        <h1>click this</h1>
      </Link>
    </>
  );
}

