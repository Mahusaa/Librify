"use client";
import * as React from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { createChapter } from "~/action/create-chapter";

export function NewChapterDialog({
	children,
	bookId,
	createById,
	chapterNow,
}: {
	children: React.ReactNode;
	bookId: string;
	createById: string;
	chapterNow: number;
}) {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		try {
			await createChapter(formData);
			setIsOpen(false);
		} catch (error) {
			console.error("Failed to create chapter:", error);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add New Chapter</DialogTitle>
					<DialogDescription>
						Are you sure to make a new chapter? Click Add New Chapter when your&apose done.
					</DialogDescription>
				</DialogHeader>
				<NewChapterForm
					bookId={bookId}
					createById={createById}
					chapterNow={chapterNow}
					onSubmit={handleSubmit}
				/>
			</DialogContent>
		</Dialog>
	);
}

interface NewChapterFormProps {
	bookId: string;
	createById: string;
	chapterNow: number;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function NewChapterForm({
	bookId,
	createById,
	chapterNow,
	onSubmit,
}: NewChapterFormProps) {
	return (
		<form className={cn("grid items-start gap-4")} onSubmit={onSubmit}>
			<div className="grid gap-2">
				<Label htmlFor="chapterId">Chapter Number</Label>
				<Input
					type="number"
					id="chapterId"
					defaultValue={chapterNow + 1}
					name="chapterId"
					required
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="title">Title</Label>
				<Input id="title" name="chapterTitle" required />
			</div>
			<input hidden name="bookId" value={bookId}></input>
			<input hidden name="createById" value={createById}></input>
			<Button type="submit">Add New Chapter</Button>
		</form>
	);
}

export default NewChapterDialog;

