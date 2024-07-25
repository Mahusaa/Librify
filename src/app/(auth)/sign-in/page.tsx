import { ProfileForm } from "~/components/SignInDialog";
import { Card } from "~/components/ui/card";
import HoverCardDemo from "~/components/HoverDemo";
import { getServerAuthSession } from "~/server/auth";

const SignIn = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen items-center justify-center ">
      {session ? (
        <h1>You already login</h1>
      ) : (
        <Card className="w-full max-w-md p-6 shadow-md rounded-md">
          <div className="text-center mb-6">
            <h2 className="mt-2 text-2xl font-bold">Sign In</h2>
            <p className="mt-1 text-sm text-gray-600">Welcome back! Please sign in to your account.</p>
          </div>
          <ProfileForm />
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <HoverCardDemo>Demo Account</HoverCardDemo>
            <a className="underline">Create Account</a>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SignIn;
