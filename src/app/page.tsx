import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";


export default async function HomePage() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex min-h-screen flex-col ml-4 items-start justify-start">
      <h1 className="text-xl font-semibold">Home Page</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>

    </div>
  );
}

