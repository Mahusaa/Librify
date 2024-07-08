"use client"
import * as React from "react"
import type { Mail } from "~/data/mail-data"
import { useMail } from "~/hooks/use-mail"
import { TooltipProvider } from "../ui/tooltip"
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "../ui/resizable"
import { cn } from "~/lib/utils"
import { Separator } from "../ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
	AlertCircle,
	Archive,
	ArchiveX,
	File,
	Inbox,
	MessagesSquare,
	Search,
	Send,
	ShoppingCart,
	Trash2,
	Users2,
} from "lucide-react"
import { Input } from "../ui/input"
import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"




interface MailProps {
	accounts: {
		label: string
		email: string
		icon: React.ReactNode
	}[]
	mails: Mail[]
	defaultLayout: number[] | undefined
}



export function ChapterTextEditor({
	mails,
	defaultLayout = [440, 255],
}: MailProps) {
	const [mail] = useMail();

	return (
		<TooltipProvider delayDuration={0}>
			<ResizablePanelGroup
				direction="horizontal"
				onLayout={(sizes: number[]) => {
					document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
				}}
				className="h-full max-h-[800px] items-stretch"
			>
				<ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
					<Tabs defaultValue="all">
						<div className="flex items-center ">
							<h1 className="text-xl font-bold">Chapter</h1>
							<TabsList className="ml-auto">
								<TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
									All mail
								</TabsTrigger>
							</TabsList>
						</div>
						<div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
							<form>
								<div className="relative">
									<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input placeholder="Search" className="pl-8" />
								</div>
							</form>
						</div>
						<TabsContent value="all" className="m-0">
							<MailList items={mails} />
						</TabsContent>
					</Tabs>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={defaultLayout[1]}>
					<MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
				</ResizablePanel>
			</ResizablePanelGroup>
		</TooltipProvider>
	);
}
