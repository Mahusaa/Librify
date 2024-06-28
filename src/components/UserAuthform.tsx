'use client'


import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { cn } from '~/lib/utils';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loginWithDiscord = async () => {
		setIsLoading(true);
		try {
			await signIn('discord');
		} catch (error) {
			toast({
				title: 'Error',
				description: 'Failed using discord',
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={cn('flex justify-center', className)} {...props}>
			<Button
				isLoading={isLoading}
				type='button'
				size='sm'
				className='w-full'
				onClick={loginWithDiscord}
				disabled={isLoading}
			>
				Discord
			</Button>
		</div>
	);
};

export default UserAuthForm;

