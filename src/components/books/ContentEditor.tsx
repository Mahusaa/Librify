"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { BlockNoteEditor } from "@blocknote/core";
import type { PartialBlock } from "@blocknote/core";

interface ContentEditorProps {
	initialContent?: PartialBlock[];
	editable?: boolean;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ initialContent, editable }) => {
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent as PartialBlock[],
	});
	return (
		<BlockNoteView
			editor={editor}
			theme="light"
		/>
	);
};

export default ContentEditor;

