"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
import type { PartialBlock } from "@blocknote/core";
import { useSaving } from "~/hooks/use-saving";
import { useEffect, useState } from "react";
import { useDebounce } from "~/hooks/use-debounce";
import { ScrollArea } from "../ui/scroll-area";
import "../../styles/editor-style.css"


interface ContentEditorProps {
	chapterId: string;
	initialContent: string | null;
	bookId: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent, chapterId, bookId }) => {
	const [content, setContent] = useState("");
	const debounceSave = useDebounce(content)
	const { setIsSaving } = useSaving();

	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
	}, [chapterId, initialContent]);
	useEffect(() => {
		setContent("")
	}, [chapterId])

	useEffect(() => {
		const handleSaveContent = async () => {
			setIsSaving(true);
			try {
				await fetch("/api/save-content", {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ chapterId, bookId, content: debounceSave }),
					next: { revalidate: 1 },
				});
			} catch {
				console.log("error saving");
			} finally {
				setIsSaving(false);
			}
		};
		if (debounceSave !== "") {
			void handleSaveContent();
		}
		void handleSaveContent();
	}, [debounceSave]);


	return (
		<ScrollArea className="h-screen overflow-hidden">
			<div className="w-full h-full overflow-hidden">
				{editor && (
					<BlockNoteView
						editor={editor}
						className="break-words whitespace-pre-wrap w-full h-full bg-black"
						onChange={() => {
							setContent(JSON.stringify(editor.document));
						}}
					/>
				)}
			</div>
		</ScrollArea>
	);
};

export default ContentEditor;

