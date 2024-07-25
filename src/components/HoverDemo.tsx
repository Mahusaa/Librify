import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "./ui/avatar"
import { Button } from "./ui/button"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./ui/hover-card"

const HoverCardDemo = ({ children }: {
	children: React.ReactNode
}) => {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">{children}</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex mr-2 space-x-2">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>KM</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<p className="text-sm">Username: admin@1234.com</p>
						<p className="text-sm">
							Password : admin1234
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Create Account not functional yet
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

export default HoverCardDemo;
