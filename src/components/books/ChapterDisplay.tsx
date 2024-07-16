import { Chapter } from "~/types/chapter";
import dateFormatting from "~/lib/date-formatting";
import ContentEditor from "./ContentEditor";
import { useSaving } from "~/hooks/use-saving";

interface ChapterDisplayProps {
	chapter: Chapter | null;
}


const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ chapter }) => {
	const { isSaving } = useSaving();
	return (
		<div className="flex flex-col h-full">
			{chapter ? (
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b bg-white shadow-sm ">
						<div className="flex items-center gap-4">
							<div>
								<div className="font-semibold text-lg text-gray-800">{`Chapter ${chapter.chapterId}: ${chapter.title}`}</div>
							</div>
						</div>
						{chapter.updatedAt && (
							<div className="flex items-center gap-2">
								<span className="text-xs text-gray-500">{isSaving ? "Saving..." : "Last update:"}</span>
								<div className="text-xs text-gray-500">
									{dateFormatting(new Date(chapter.updatedAt), "PPpp")}
								</div>
							</div>
						)}
					</div>

					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{/*chapter.content*/}
						<ContentEditor initialContent={chapter.content} chapterId={chapter.id} bookId={chapter.bookId} />
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

export default ChapterDisplay;
