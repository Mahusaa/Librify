
import { cn } from "~/lib/utils"
import formatDateDistanceToNow from "~/lib/date-to-now";
import { ScrollArea } from "../ui/scroll-area"
import type { Chapter } from "~/types/chapter";
import type { Block } from "@blocknote/core";

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

	function getFirstParagraph(data: string): string | null {
		const dataJson: Block[] = JSON.parse(data) as Block[];

		const firstParagraph = dataJson.find((item) => item ? item.type === 'paragraph' : null);

		if (firstParagraph && Array.isArray(firstParagraph.content)) {
			return firstParagraph.content
				.map((contentItem) => contentItem.type === 'text' ? contentItem.text : '')
				.join(' ');
		}
		return null;
	}
	return (
		<>
			<ScrollArea className="h-[400px]">
				<div className="flex flex-col gap-2 p-4 pt-0">
					{items.map((item) => (
						<button
							key={item.id}
							className={cn(
								"flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-muted",
								selectedChapterId === item.chapterId && "border-primary"
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
										{formatDateDistanceToNow(new Date(item.updatedAt ?? Date.now()), {
											addSuffix: true,
										})}
									</div>
								</div>
								<div className="text-xs font-medium">{item.title}</div>
							</div>
							<div className="line-clamp-2 text-xs text-muted-foreground">
								{item.content ?
									(() => {
										const firstParagraph = getFirstParagraph(item.content);
										return firstParagraph ? firstParagraph.substring(0, 300) : null;
									})()
									: null}
							</div>
						</button>
					))}
				</div>
			</ScrollArea>
		</>
	)
}


export default ChapterList;
