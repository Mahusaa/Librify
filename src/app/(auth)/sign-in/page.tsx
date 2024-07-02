import type { FC } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '~/components/ui/card';
import { DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

const Page: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <CardHeader className="mb-4">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Choose a login method below
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2 border-gray-600 hover:bg-gray-700">
            <DiscordLogoIcon className="h-5 w-5" />
            <span>Login with Discord</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2 border-gray-600 hover:bg-gray-700">
            <GitHubLogoIcon className="h-5 w-5" />
            <span>Login with GitHub</span>
          </Button>
        </CardContent>
        <CardFooter className="mt-6 text-center">
          <span className="text-gray-400">Don&apos;t have an account? Sign up</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;

