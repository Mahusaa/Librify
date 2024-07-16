"use client"
import React from 'react';
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut } from './ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import UserLogoutForm from './UserLogoutForm';
import { DefaultSession } from 'next-auth';

interface AvatarWrapProps {
	session: DefaultSession | null; // Updated to reflect DefaultSession or null
}

const AvatarWrap: React.FC<AvatarWrapProps> = ({ session }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="relative w-8 h-8 rounded-full">
					<Avatar className="w-8 h-8">
						{session?.user?.image ? (
							<AvatarImage src={session.user.image} alt={session.user.name ?? 'U'} />
						) : (
							<AvatarFallback>
								{session?.user?.name
									? session.user.name
										.split(' ')
										.map(namePart => namePart[0])
										.join('')
										.toUpperCase()
									: 'O'}
							</AvatarFallback>
						)}
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{session?.user?.name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session?.user?.email}
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
				<UserLogoutForm>
					<DropdownMenuItem onSelect={(e) => {
						e.preventDefault();
						setIsDialogOpen(true);
					}}>
						Log out
						<DropdownMenuShortcut><LogOut className="w-4 h-4" /></DropdownMenuShortcut>
					</DropdownMenuItem>
				</UserLogoutForm>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AvatarWrap;
