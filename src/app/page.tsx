import { getServerSession } from "next-auth";
import { Separator } from "~/components/ui/separator";
import { authOptions } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Home</h2>
          <p className="text-sm text-muted-foreground">This the main page</p>
        </div>
      </div>
      <Separator className="my-4" />
      <pre>{JSON.stringify(session)}</pre>

    </div>
  );
}

