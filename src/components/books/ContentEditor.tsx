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

interface ContentEditorProps {
	chapterId: string;
	initialContent: string | null;
	bookId: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent, chapterId, bookId }) => {
	const [document, setDocument] = useState(initialContent);
	const debounceSave = useDebounce(document)
	const { setIsSaving } = useSaving();
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
	}, [chapterId, initialContent]);

	useEffect(() => {
		const handleSaveContent = async () => {
			setIsSaving(true);
			await fetch("/api/save-content", {
				method: 'POST',
				headers: {
					"Content-Type": "application.json",
				},
				body: JSON.stringify({ chapterId, bookId, content: debounceSave }),
				next: { revalidate: 1 }
			},)
			setIsSaving(false);
		};
		handleSaveContent();
	}, [debounceSave])

	return (
		<ScrollArea className="h-screen overflow-hidden">
			<div className="w-full h-full overflow-hidden">
				<BlockNoteView
					editor={editor}
					theme="light"
					className="break-words break-all whitespace-pre-wrap w-full h-full"
					onChange={() => {
						setDocument(JSON.stringify(editor.document));
					}}
				/>
			</div>
		</ScrollArea>
	);
};

export default ContentEditor;

