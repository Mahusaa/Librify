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
import { ScrollArea } from "../ui/scroll-area"
import type { Chapter } from "~/types/chapter";

interface ChapterListProps {
	items: Chapter[]
	selectedChapterId: number | null;
	onSelect: (id: number) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({
	items,
	selectedChapterId,
	onSelect,
}) => {

	return (
		<>
			<ScrollArea className="h-[400px]">
				<div className="flex flex-col gap-2 p-4 pt-0">
					{items.map((item) => (
						<button
							key={item.id}
							className={cn(
								"flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
								selectedChapterId === item.chapterId && "bg-muted"
							)}
							onClick={() => onSelect(item.chapterId)
							}
						>
							<div className="flex w-full flex-col gap-1">
								<div className="flex items-center">
									<div className="flex items-center gap-2">
										<div className="font-semibold">{`Chapter ${item.chapterId}`}</div>
									</div>
									<div
										className={cn(
											"ml-auto text-xs",
											selectedChapterId === item.chapterId
												? "text-foreground"
												: "text-muted-foreground"
										)}
									>
										{formatDistanceToNow(new Date(item.updatedAt ?? Date.now()), {
											addSuffix: true,
										})}
									</div>
								</div>
								<div className="text-xs font-medium">{item.title}</div>
							</div>
							<div className="line-clamp-2 text-xs text-muted-foreground">
								{item.content ? item.content.substring(0, 300) : null}
							</div>
						</button>
					))}
				</div>
			</ScrollArea>
		</>
	)
}


export default ChapterList;
