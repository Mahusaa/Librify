import {
	Archive,
	ArchiveX,
	Clock,
	Forward,
	MoreVertical,
	Reply,
	ReplyAll,
	Trash2,
} from "lucide-react"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "../ui/avatar"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Label } from "../ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../ui/popover"
import { Separator } from "../ui/separator"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../ui/tooltip"
import { Mail } from "~/data/mail-data"

interface MailDisplayProps {
	mail: Mail | null
}

// Utility functions to replace date-fns functions
const format = (date: Date, formatString: string): string => {
	const options: Intl.DateTimeFormatOptions = {};

	switch (formatString) {
		case "E, h:m b":
			options.weekday = "short";
			options.hour = "numeric";
			options.minute = "numeric";
			break;
		case "PPpp":
			options.year = "numeric";
			options.month = "short";
			options.day = "numeric";
			options.hour = "numeric";
			options.minute = "numeric";
			break;
		default:
			break;
	}

	return new Intl.DateTimeFormat('en-US', options).format(date);
};


export function MailDisplay({ mail }: MailDisplayProps) {

	return (
		<div className="flex h-[400px]flex-col">
			{mail ? (
				<div className="flex flex-1 flex-col">
					<div className="flex items-start p-4">
						<div className="flex items-start gap-4 text-sm">
							<Avatar>
								<AvatarImage alt={mail.name} />
								<AvatarFallback>
									{mail.name
										.split(" ")
										.map((chunk: any) => chunk[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div className="grid gap-1">
								<div className="font-semibold">{mail.name}</div>
								<div className="line-clamp-1 text-xs">{mail.subject}</div>
								<div className="line-clamp-1 text-xs">
									<span className="font-medium">Reply-To:</span> {mail.email}
								</div>
							</div>
						</div>
						{mail.date && (
							<div className="ml-auto text-xs text-muted-foreground">
								{format(new Date(mail.date), "PPpp")}
							</div>
						)}
					</div>
					<Separator />
					<div className="flex-1 whitespace-pre-wrap p-4 text-sm">
						{mail.text}
					</div>
					<Separator className="mt-auto" />
					<div className="p-4">
						<form>
							<div className="grid gap-4">

								<div className="flex items-center">
									<Label
										htmlFor="mute"
										className="flex items-center gap-2 text-xs font-normal"
									>
										Mute this
										thread
									</Label>
									<Button
										onClick={(e: any) => e.preventDefault()}
										size="sm"
										className="ml-auto"
									>
										Send
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="p-8 text-center text-muted-foreground">
					No message selected
				</div>
			)}
		</div>
	);
}
