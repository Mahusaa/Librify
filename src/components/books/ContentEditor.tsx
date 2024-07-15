"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
import type { PartialBlock } from "@blocknote/core";
import { useSaving } from "~/hooks/use-saving";
import { debounce } from "~/lib/debounce-saving";
import { db } from "~/server/db";
import { chapter } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { Button } from "../ui/button";

interface ContentEditorProps {
	chapterId: string;
	initialContent: string | null;
	editable?: boolean;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent, editable, chapterId }) => {
	const { setIsSaving } = useSaving();
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
	});

	const handleSaveContent = async (chapterId: string, content: string) => {
		try {
			await fetch("/api/save-content", {
				method: 'POST',
				headers: {
					"Content-Type": "application.json",
				},
				body: JSON.stringify({ chapterId, content })
			})
		} catch (error) {
			console.error("Error saving content:", error);
		} finally {

		}
	};
	const debounceSave = debounce(handleSaveContent, 800, setIsSaving)
	return (
		<>
			<BlockNoteView
				editor={editor}
				theme="light"
				onChange={() => {
					debounceSave(chapterId, JSON.stringify(editor.document))
				}}
			/>
		</>
	);
};

export default ContentEditor;

