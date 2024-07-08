import { ComponentProps } from "react"
const formatDistanceToNow = (date: Date, options?: { addSuffix?: boolean }): string => {
	const now = new Date();
	const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

	let interval = Math.floor(seconds / 31536000);
	if (interval > 1) return options?.addSuffix ? `${interval} years ago` : `${interval} years`;

	interval = Math.floor(seconds / 2592000);
	if (interval > 1) return options?.addSuffix ? `${interval} months ago` : `${interval} months`;

	interval = Math.floor(seconds / 86400);
	if (interval > 1) return options?.addSuffix ? `${interval} days ago` : `${interval} days`;

	interval = Math.floor(seconds / 3600);
	if (interval > 1) return options?.addSuffix ? `${interval} hours ago` : `${interval} hours`;

	interval = Math.floor(seconds / 60);
	if (interval > 1) return options?.addSuffix ? `${interval} minutes ago` : `${interval} minutes`;

	return options?.addSuffix ? `just now` : `just now`;
};

import { cn } from "~/lib/utils"
import { Badge } from "../ui/badge"
import { ScrollArea } from "../ui/scroll-area"
import { Mail } from "~/data/mail-data"
import { useMail } from "~/hooks/use-mail"

interface MailListProps {
	items: Mail[]
}

export function MailList({ items }: MailListProps) {
	const [mail, setMail] = useMail()

	return (
		<ScrollArea className="h-[400px]">
			<div className="flex flex-col gap-2 p-4 pt-0">
				{items.map((item) => (
					<button
						key={item.id}
						className={cn(
							"flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
							mail.selected === item.id && "bg-muted"
						)}
						onClick={() =>
							setMail({
								...mail,
								selected: item.id,
							})
						}
					>
						<div className="flex w-full flex-col gap-1">
							<div className="flex items-center">
								<div className="flex items-center gap-2">
									<div className="font-semibold">{item.name}</div>
									{!item.read && (
										<span className="flex h-2 w-2 rounded-full bg-blue-600" />
									)}
								</div>
								<div
									className={cn(
										"ml-auto text-xs",
										mail.selected === item.id
											? "text-foreground"
											: "text-muted-foreground"
									)}
								>
									{formatDistanceToNow(new Date(item.date), {
										addSuffix: true,
									})}
								</div>
							</div>
							<div className="text-xs font-medium">{item.subject}</div>
						</div>
						<div className="line-clamp-2 text-xs text-muted-foreground">
							{item.text.substring(0, 300)}
						</div>
						{item.labels.length ? (
							<div className="flex items-center gap-2">
								{item.labels.map((label) => (
									<Badge key={label} variant={getBadgeVariantFromLabel(label)}>
										{label}
									</Badge>
								))}
							</div>
						) : null}
					</button>
				))}
			</div>
		</ScrollArea>
	)
}

function getBadgeVariantFromLabel(
	label: string
): ComponentProps<typeof Badge>["variant"] {
	if (["work"].includes(label.toLowerCase())) {
		return "default"
	}

	if (["personal"].includes(label.toLowerCase())) {
		return "outline"
	}

	return "secondary"
}
