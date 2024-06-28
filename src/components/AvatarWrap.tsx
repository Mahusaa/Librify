import React from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

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
		<Avatar className="w-8 h-8">
			{session.user?.image ? (
				<AvatarImage src={session.user.image} alt={session.user.name || 'User'} />
			) : (
				<AvatarFallback>{session.user?.name ? session.user.name[0] : 'CN'}</AvatarFallback>
			)}
		</Avatar>
	);
};

export default AvatarWrap;

