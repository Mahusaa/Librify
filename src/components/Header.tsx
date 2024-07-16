
import Link from 'next/link';
import { cn } from '~/lib/utils';
import AvatarWrap from './AvatarWrap';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/server/auth';
import { DialogSignIn } from './SignInDialog';
import { Button } from './ui/button';

const Header = async () => {
	const session = await getServerSession(authOptions);
	console.log(session)
	return (
		<div
			className={cn(
				`sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 bg-zinc-50`,
			)}
		>
			<div className="flex h-[47px] items-center justify-between px-4">
				<div className="flex items-center space-x-4">
					<Link
						href="/"
						className="flex flex-row space-x-3 items-center justify-center md:hidden"
					>
						<span className="h-7 w-7 bg-zinc-300 rounded-lg" />
						<span className="font-bold text-xl flex ">Librify</span>
					</Link>
				</div>

				{session ? (
					<AvatarWrap session={session} />
				) : (
					<DialogSignIn><Button>Sign In</Button></DialogSignIn>
				)}
			</div>
		</div>);
};

export default Header;
