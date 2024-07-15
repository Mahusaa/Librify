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
					<div className="flex items-center justify-between p-2 border-b">
						<div className="flex items-center gap-2">
							<div>
								<div className="font-semibold text-lg">{`Chapter ${chapter.chapterId}: ${chapter.title}`}</div>
							</div>
						</div>
						{chapter.updatedAt && (
							<div>
								<span>{isSaving ? "saving" : "last update"}</span>
								<div className="text-xs text-muted-foreground">
									{dateFormatting(new Date(chapter.updatedAt), "PPpp")}
								</div>
							</div>
						)}
					</div>
					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{/*chapter.content*/}
						<ContentEditor editable={true} initialContent={chapter.content} chapterId={chapter.id} />
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
