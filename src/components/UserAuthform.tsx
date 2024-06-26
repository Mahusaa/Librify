'use client'


import { FC, useState } from "react"
import { useToast } from "./ui/use-toast"
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }


const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loginWithDiscord = async () => {
		setIsLoading(true);
		try {
			await signIn('discord')
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed using discord",
				variant: "destructive",
			})

		} finally {
			setIsLoading(false)
		}
	}
	return (
		<div className={cn('flex justify-center', className)} {...props}>
			<Button
				isLoading={isLoading}
				type='button'
				size='sm'
				className='w-full'
				onClick={loginWithDiscord}
				disabled={isLoading}>
				Google
			</Button>
		</div>)
}


export default UserAuthForm;
