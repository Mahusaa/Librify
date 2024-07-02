import { signOut } from "next-auth/react";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

interface UserLogoutForm {
	children: React.ReactNode;
}


const UserLogoutForm: React.FC<UserLogoutForm> = ({ children }) => {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const logout = async () => {
		setIsLoading(true);
		try {
			await signOut({ callbackUrl: "http://localhost:3000/" })
		} catch {
			toast({
				title: 'Error',
				description: 'Failed using discord',
				variant: 'destructive',
			});
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely want to logout?</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to log out? You will need to log in again to access your account.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<Button
						isLoading={isLoading}
						type='button'
						onClick={logout}
						disabled={isLoading}
					>Logout</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}


export default UserLogoutForm;
