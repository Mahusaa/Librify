"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import type { BookModalProps } from "~/types/BookModalProps";
import { useState } from "react";


const BookModal: React.FC<BookModalProps> = ({ book }) => {
	const [activeChapter, setActiveChapter] = useState<number | null>(null);
	const handleActiveChapter = (chapterId: number | null) => {
		if (chapterId) {
			setActiveChapter(chapterId - 1)
		} else {
			setActiveChapter(chapterId)
		}
	}
	return (
		<div>
			<div className="flex mb-4">
				<div className="w-1/3 mr-4">
					<div className="bg-gray-300 h-44 rounded-lg flex items-center justify-center text-gray-600">
						{book.image ? (
							<Image
								src={book.image}
								alt={book.title}
								width={130}
								height={186}
								className="rounded-lg object-cover"
							/>
						) : (
							"Book Image"
						)}
					</div>
				</div>
				<div className="w-2/3 ml-4">
					<div className="text-lg font-bold ">
						<span>{book.title}</span>
						<span className="font-normal text-base text-gray-700">{` by ${book.author}`}</span>
					</div>
					<p className="text-sm text-gray-600 mb-4">{`Published in ${book.year}`}</p>
					<p className="text-sm text-gray-700 leading-relaxed">
						{activeChapter !== null && book.chapters[activeChapter]?.content
							? book.chapters[activeChapter].content
							: "Select a chapter to view its description."}
					</p>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-2 mb-4">
				{book.chapters.map((chapter) => (
					<Button
						key={chapter.chapterId}
						variant="outline"
						className={activeChapter !== null && chapter.chapterId !== null && activeChapter === chapter.chapterId - 1 ? "bg-zinc-100" : ""}
						onClick={() => handleActiveChapter(chapter.chapterId)}
					>
						{`Chapter ${chapter.chapterId}`}</Button>
				))}
			</div>
		</div>
	)
}



export default BookModal;
