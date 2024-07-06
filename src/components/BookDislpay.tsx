"use client"
import React from 'react';
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface Mail {
	name: string;
	subject: string;
	email: string;
	date?: Date;
	text: string;
}

const dummyMail: Mail = {
	name: 'John Doe',
	subject: 'Hello World',
	email: 'john.doe@example.com',
	date: new Date(),
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
};

const BookDetails: React.FC = () => {
	const mail: Mail | null = dummyMail; // Replace with actual mail data or null

	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center p-2">
				<div className="flex items-center gap-2">
					{/* Replace with Separator component */}
					<div className="mx-1 h-6 border-l border-gray-300"></div>
				</div>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" size="icon" disabled={!mail}>
						<span className="sr-only">Reply</span>
					</Button>
					<Button variant="ghost" size="icon" disabled={!mail}>
						<span className="sr-only">Reply all</span>
					</Button>
					<Button variant="ghost" size="icon" disabled={!mail}>
						<span className="sr-only">Forward</span>
					</Button>
				</div>
				{/* Replace with Separator component */}
				<div className="mx-2 h-6 border-l border-gray-300"></div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" disabled={!mail}>
							<span className="sr-only">More</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Mark as unread</DropdownMenuItem>
						<DropdownMenuItem>Star thread</DropdownMenuItem>
						<DropdownMenuItem>Add label</DropdownMenuItem>
						<DropdownMenuItem>Mute thread</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			{/* Replace with Separator component */}
			<div className="border-t border-gray-300"></div>
			{mail ? (
				<div className="flex flex-1 flex-col">
					<div className="flex items-start p-4">
						<div className="flex items-start gap-4 text-sm">
							<div className="grid gap-1">
								<div className="font-semibold">{mail.name}</div>
								<div className="line-clamp-1 text-xs">{mail.subject}</div>
								<div className="line-clamp-1 text-xs">
									<span className="font-medium">Reply-To:</span> {mail.email}
								</div>
							</div>
						</div>
					</div>
					{/* Replace with Separator component */}
					<div className="border-t border-gray-300"></div>
					<div className="flex-1 whitespace-pre-wrap p-4 text-sm">
						{mail.text}
					</div>
					{/* Replace with Separator component */}
					<div className="border-t border-gray-300"></div>
					<div className="p-4">
						<form>
							<div className="grid gap-4">
								<Textarea
									className="p-4"
									placeholder={`Reply ${mail.name}...`}
								/>
								<div className="flex items-center">
									<Button
										onClick={(e) => e.preventDefault()}
										size="sm"
										className="ml-auto"
									>
										Send
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="p-8 text-center text-gray-500">
					No message selected
				</div>
			)}
		</div>
	);
};

export default BookDetails;

