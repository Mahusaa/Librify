"use client"
import * as React from "react"
import type { Mail } from "~/data/mail-data"
import { useMail } from "~/hooks/use-mail"
import { TooltipProvider } from "../ui/tooltip"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "../ui/resizable"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"




interface ChapterTextEditor {
	mails: Mail[]
	defaultLayout: number[] | undefined
}



const BookInfo: React.FC = () => {
	const title = "The Great Gatsby";
	const author = "F. Scott Fitzgerald";
	const imageUrl = "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	return (
		<div className="p-4  border-b border-gray-200 flex items-center">
			<img src={imageUrl} alt={`${title} cover`} className="w-12 h-16 mr-4 object-cover rounded" />
			<div>
				<h2 className="text-xl font-semibold text-gray-800">{title}</h2>
				<p className="text-sm text-gray-600">by {author}</p>
			</div>
		</div>
	);
};

export function ChapterTextEditor({
	mails,
	defaultLayout = [150, 345],
}: ChapterTextEditor) {
	const [mail] = useMail();
	return (
		<TooltipProvider delayDuration={0}>
			<ResizablePanelGroup
				direction="horizontal"
				onLayout={(sizes: number[]) => {
					document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
				}}
				className="h-full items-stretch bg-gray-50"
			>
				<ResizablePanel defaultSize={defaultLayout[0]} minSize={30} className="bg-white border-r border-gray-200">
					<div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
						<div className="relative w-full ml-2">
							<Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
							<Input placeholder="Search Chapter" className="pl-8 h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
						</div>
					</div>
					<div className="overflow-y-auto flex justify-center items-center">
						<BookInfo />
					</div>
					<div className="overflow-y-auto">
						<MailList items={mails} />
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle className="bg-gray-200" />
				<ResizablePanel defaultSize={defaultLayout[1]} minSize={40} className="bg-white">
					<MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
				</ResizablePanel>
			</ResizablePanelGroup>
		</TooltipProvider>
	);
}
