import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface UserLogoutForm {
	children: React.ReactNode;
}


const UserLogoutForm: React.FC<UserLogoutForm> = ({ children }) => {
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
					<Button>Logout</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}


export default UserLogoutForm;
