"use client";

import {
	EditorContent,
	EditorRoot,
	JSONContent,
	EditorCommand,
	EditorCommandItem,
	EditorCommandEmpty,
	EditorBubble,
} from "novel";
import { NodeSelector } from "~/lib/selectors/node-selector";
import { LinkSelector } from "~/lib/selectors/link-selector";
import { TextButtons } from "~/lib/selectors/text-button";
import { ColorSelector } from "~/lib/selectors/color-selector";
import { handleCommandNavigation } from "novel/extensions";
import { defaultExtensions } from "~/lib/extensions";
import { slashCommand, suggestionItems } from "~/lib/slash-command";
import { useState } from "react";

const TailwindEditor: React.FC = () => {
	const initialContent: JSONContent = {
		type: "doc",
		content: [
			{
				type: "heading",
				attrs: { level: 1 },
				content: [{ type: "text", text: "Welcome to the Editor" }],
			},
			{
				type: "paragraph",
				content: [
					{ type: "text", text: "This is a paragraph with some " },
					{ type: "text", marks: [{ type: "bold" }], text: "bold" },
					{ type: "text", text: " text and some " },
					{ type: "text", marks: [{ type: "italic" }], text: "italic" },
					{ type: "text", text: " text." },
				],
			},
			{
				type: "paragraph",
				content: [{ type: "text", text: "You can add more content here." }],
			},
		],
	};

	const [content, setContent] = useState<JSONContent>(initialContent);
	const [openNode, setOpenNode] = useState(false);
	const [openLink, setOpenLink] = useState(false);
	const [openColor, setOpenColor] = useState(false);

	const extensions = [...defaultExtensions];

	return (
		<EditorRoot>
			<EditorContent
				extensions={extensions}
				initialContent={content}
				onUpdate={({ editor }) => {
					const json = editor.getJSON();
					setContent(json);
				}}
				editorProps={{
					handleDOMEvents: {
						keydown: (_view, event) => handleCommandNavigation(event),
					},
					attributes: {
						class: `prose prose-sm dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
					},
				}}
			>
				<EditorBubble
					tippyOptions={{
						placement: "top",
					}}
					className="flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl"
				>
					<NodeSelector open={openNode} onOpenChange={setOpenNode} />
					<LinkSelector open={openLink} onOpenChange={setOpenLink} />
					<TextButtons />
					<ColorSelector open={openColor} onOpenChange={setOpenColor} />
				</EditorBubble>
				{/*<EditorCommand className="z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
					<EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
					{suggestionItems.map((item) => (
						<EditorCommandItem
							value={item.title}
							onCommand={(val) => item.command && item.command(val)}
							className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
							key={item.title}
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
								{item.icon}
							</div>
							<div>
								<p className="font-medium">{item.title}</p>
								<p className="text-xs text-muted-foreground">{item.description}</p>
							</div>
						</EditorCommandItem>
					))}
				</EditorCommand>*/}
			</EditorContent>
		</EditorRoot>
	);
};

export default TailwindEditor;
