import React from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut } from './ui/dropdown-menu';

const AvatarWrap: React.FC = () => {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (
			<Avatar className="w-8 h-8">
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>)
	}

	if (!session) {
		return (
			<Button>Sign In</Button>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>

				<Button className="relative w-8 h-8 rounded-full">
					<Avatar className="w-8 h-8">
						{session.user?.image ? (
							<AvatarImage src={session.user.image} alt={session.user.name ?? 'User'} />
						) : (
							<AvatarFallback>{session.user?.name ? session.user.name[0] : 'CN'}</AvatarFallback>
						)}
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{session.user.name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session.user.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Billing
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>New Team</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AvatarWrap;

