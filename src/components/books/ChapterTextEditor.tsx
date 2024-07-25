"use client"
import * as React from "react"
import type { Book } from "~/types/book"
import { useChapter } from "~/hooks/use-chapter"
import ChapterList from "./ChapterList"
import BookDisplay from "./BookDisplay"
import { TooltipProvider } from "../ui/tooltip"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "../ui/resizable"
import { Search, CirclePlus } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import ChapterDisplay from "./ChapterDisplay"
import { NewChapterDialog } from "../NewChapterDialog"


interface ChapterTextEditorProps {
	book: Book;
	defaultLayout: number[] | undefined
}



export function ChapterTextEditor({
	book,
	defaultLayout = [150, 345],
}: ChapterTextEditorProps) {
	const { selected, setSelected } = useChapter();
	return (
		<TooltipProvider delayDuration={0}>
			<ResizablePanelGroup
				direction="horizontal"
				onLayout={(sizes: number[]) => {
					document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
				}}
				className="h-full items-stretch "
			>
				<ResizablePanel defaultSize={defaultLayout[0]} minSize={30} className="border-r ">

					<div className="overflow-y-auto">
						<BookDisplay book={book} />
						<div className="flex items-center justify-between p-3">
							<div className="flex flex-row items-center justify-between p-3  border-b gap-2 w-full">
								<div className="relative w-2/3 flex-1 ml-2">
									<Search className="absolute left-2 top-2.5 h-4 w-4 " />
									<Input placeholder="Search Chapter" className="pl-8 h-9 border  rounded-md focus:outline-none focus:ring-2  focus:border-transparent" />
								</div>
								<NewChapterDialog createById={book.createdById} bookId={book.id} chapterNow={book.chapters.length}>
									<Button className="flex-none" ><CirclePlus className="w-4 h-4 mr-1" />New</Button>
								</NewChapterDialog>
							</div>
						</div>
						<ChapterList items={book.chapters} selectedChapterId={selected} onSelect={setSelected} />
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={defaultLayout[1]} minSize={40} >
					<ChapterDisplay chapter={book.chapters.find((item) => item.chapterId === selected) ?? null} />
				</ResizablePanel>
			</ResizablePanelGroup>
		</TooltipProvider>
	);
}
