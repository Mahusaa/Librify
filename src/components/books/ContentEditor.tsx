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

interface ContentEditorProps {
	chapterId: string;
	initialContent: string | null;
	bookId: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent, chapterId, bookId }) => {
	const [document, setDocument] = useState(initialContent)
	const debounceSave = useDebounce(document)
	const { setIsSaving } = useSaving();
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
	});

	useEffect(() => {
		const handleSaveContent = async () => {
			setIsSaving(true);
			await fetch("/api/save-content", {
				method: 'POST',
				headers: {
					"Content-Type": "application.json",
				},
				body: JSON.stringify({ chapterId, bookId, debounceSave }),
				next: { revalidate: 1 }
			},)
			setIsSaving(false);
		};
		handleSaveContent();
	}, [debounceSave])

	return (
		<>
			<BlockNoteView
				editor={editor}
				theme="light"
				onChange={() => {
					setDocument(JSON.stringify(editor.document))
				}}
			/>
		</>
	);
};

export default ContentEditor;

