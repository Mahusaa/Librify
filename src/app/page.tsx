import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";


export default async function HomePage() {
  const session = await getServerSession(authOptions)
  return (

    <>
      <span className="font-bold text-4xl">Home</span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>

    </>
  );
}

