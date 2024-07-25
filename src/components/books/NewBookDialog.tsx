"use client";
import * as React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import NewBookForm from "./NewBookForm";
import { createBook } from "~/action/create-book";
import { useState } from "react";

export function NewBookDialog({
	children,
	createById,
}: {
	children: React.ReactNode;
	createById: string | undefined;
}) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		try {
			setIsLoading(true);
			await createBook(formData);
		} catch (error) {
			console.error("Failed to create chapter:", error);
		} finally {
			setIsLoading(false);
			setIsOpen(false);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add New Book</DialogTitle>
					<DialogDescription>
						Are you sure to make a new book? Click Add New Book when you&apos;r done.
					</DialogDescription>
				</DialogHeader>
				<NewBookForm
					createById={createById}
					onSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			</DialogContent>
		</Dialog>
	);
}



export default NewBookDialog;


