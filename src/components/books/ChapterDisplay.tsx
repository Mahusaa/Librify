"use client"
import { useEffect, useState } from "react";
import type { Chapter } from "~/types/chapter";
import dateFormatting from "~/lib/date-formatting";
import { useSaving } from "~/hooks/use-saving";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const ContentEditor = dynamic(() => import("./ContentEditor"), { ssr: false })

interface ChapterDisplayProps {
	chapter: Chapter | null;
}

const ChapterDisplay: React.FC<ChapterDisplayProps> = ({ chapter }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [initialData, setInitialData] = useState<string>("");
	const { isSaving } = useSaving();

	useEffect(() => {
		if (!chapter?.id) return;
		setIsLoading(true);
		const fetchChapter = async () => {
			try {
				const response = await fetch(`/api/get-content?id=${chapter?.id}`);
				if (!response.ok) {
					console.log("fetch content error");
				}
				const content = (await response.json() as { content: string }).content;
				setInitialData(content);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};
		void fetchChapter();
	}, [chapter?.id]);

	return (
		<div className="flex flex-col h-full">
			{chapter ? (
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
						<div className="flex items-center gap-4">
							<div>
								<div className="font-semibold text-lg text-gray-800">{`Chapter ${chapter.chapterId}: ${chapter.title}`}</div>
							</div>
						</div>
						{chapter.updatedAt && (
							<div className="flex items-center gap-2">
								<span className="text-xs text-gray-500">
									{isSaving ? (
										<div className="flex flex-row">
											<span className="text-gray-400">Saving</span>
											<Loader className="animate-spin ml-2" size={16} />
										</div>
									) : (
										"Last update:"
									)}
								</span>
								<div className="text-xs text-gray-500">
									{dateFormatting(new Date(chapter.updatedAt), "PPpp")}
								</div>
							</div>
						)}
					</div>
					<div className="flex-1 overflow-y-auto p-2 text-sm whitespace-pre-wrap">
						{isLoading ? (
							<div className="flex items-center justify-center h-full">
								<div className="flex items-center justify-center space-x-2">
									<div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
									<div className="w-2 h-2 bg-black rounded-full animate-bounce delay-75"></div>
									<div className="w-2 h-2 bg-black rounded-full animate-bounce delay-150"></div>
								</div>
							</div>
						) : (
							<ContentEditor
								initialContent={initialData}
								chapterId={chapter.id}
								bookId={chapter.bookId}
							/>
						)}
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center h-full text-muted-foreground">
					No message selected
				</div>
			)}
		</div>
	);
};

export default ChapterDisplay;

