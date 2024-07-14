import { Chapter } from "~/types/chapter";
import dateFormatting from "~/lib/date-formatting";
import TailwindEditor from "./ContentEditor";
import ContentEditor from "./ContentEditor";

interface ChapterDisplayProps {
	chapter: Chapter | null;
}


const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ chapter }) => {
	return (
		<div className="flex flex-col h-full">
			{chapter ? (
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-2 border-b">
						<div className="flex items-center gap-2">
							<div>
								<div className="font-semibold text-lg">{`Chapter ${chapter.chapterId}`}</div>
							</div>
						</div>
						{chapter.updatedAt && (
							<div className="text-xs text-muted-foreground">
								{dateFormatting(new Date(chapter.updatedAt), "PPpp")}
							</div>
						)}
					</div>
					<div className="p-2 text-lg font-medium">{chapter.title}</div>
					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{/*chapter.content*/}
						<ContentEditor />
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
