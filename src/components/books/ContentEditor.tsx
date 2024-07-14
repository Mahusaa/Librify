"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface ContentEditor {
	onChange: (value: string) => void;
	initialContent?: string;
	editable?: boolean;
}


const ContentEditor: React.FC = () => {
	const editor = useCreateBlockNote();
	return (
		<BlockNoteView
			editor={editor}
			theme="light"
		/>
	);
};

export default ContentEditor;

