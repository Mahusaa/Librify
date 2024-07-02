'use client'
'use client'

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { cn } from '~/lib/utils';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {
	loginProvider: 'discord' | 'github' | string;
	buttonLabel: string;
	icon: React.ReactNode;
};

const UserAuthForm: React.FC<UserAuthFormProps> = ({ loginProvider, buttonLabel, icon }) => {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const login = async () => {
		setIsLoading(true);
		try {
			await signIn(loginProvider);
		} catch (error) {
			toast({
				title: 'Error',
				description: `Failed to log in with ${loginProvider}`,
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			variant="outline"
			isLoading={isLoading}
			type='button'
			size='sm'
			className={cn('w-full flex items-center justify-center space-x-2 p-5 rounded-2xl')}
			onClick={login}
			disabled={isLoading}
		>
			{icon}
			<span>{buttonLabel}</span>
		</Button>
	);
};

export default UserAuthForm;

