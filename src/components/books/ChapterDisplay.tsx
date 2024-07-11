import { Chapter } from "~/types/chapter";

interface ChapterDisplayProps {
	chapter: Chapter | null;
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


const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ chapter }) => {
	return (
		<div className="flex flex-col h-full">
			{chapter ? (
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-2 border-b">
						<div className="flex items-center gap-2">
							<div>
								<div className="font-semibold text-sm">{`Chapter ${chapter.chapterId}`}</div>
							</div>
						</div>
						{chapter.updatedAt && (
							<div className="text-xs text-muted-foreground">
								{format(new Date(chapter.updatedAt), "PPpp")}
							</div>
						)}
					</div>
					<div className="p-2 text-sm font-medium">{chapter.title}</div>
					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{chapter.content}
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
