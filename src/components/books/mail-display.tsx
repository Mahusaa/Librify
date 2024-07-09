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
		<div className="flex flex-col h-full">
			{mail ? (
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-2 border-b">
						<div className="flex items-center gap-2">
							<div>
								<div className="font-semibold text-sm">{mail.name}</div>
								<div className="text-xs text-muted-foreground">{mail.email}</div>
							</div>
						</div>
						{mail.date && (
							<div className="text-xs text-muted-foreground">
								{format(new Date(mail.date), "PPpp")}
							</div>
						)}
					</div>
					<div className="p-2 text-sm font-medium">{mail.subject}</div>
					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{mail.text}
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center h-full text-muted-foreground">
					No message selected
				</div>
			)}
		</div>
	);
}
