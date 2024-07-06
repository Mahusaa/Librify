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
      <Link href={`/books/${session?.user.id}`} scroll={false}>
        <h1>click this</h1>
      </Link>

    </>
  );
}

