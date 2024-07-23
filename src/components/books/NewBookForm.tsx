"use client"
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface NewBookFormProps {
	createById: string | undefined;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface SelectedBook {
	title: string;
	imageUrl: string | null;
	year: number | null;
	author: string | null;
	description: string | null;
}

function NewBookForm({ createById, onSubmit }: NewBookFormProps) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [selectedBook, setSelectedBook] = useState<SelectedBook | null>(null);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (query) {
				handleSearch();
			}
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [query]);

	const handleSearch = async () => {
		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
			);
			const data = await response.json();
			setResults(data.items || []);
		} catch (error) {
			console.error("Error fetching books:", error);
		}
	};

	const handleSelectBook = (book: any) => {
		setSelectedBook({
			title: book.volumeInfo.title,
			imageUrl: book.volumeInfo.imageLinks?.thumbnail,
			year: book.volumeInfo.publishedDate,
			author: book.volumeInfo.authors?.join(", "),
			description: book.volumeInfo.description,
		});
		setQuery(book.volumeInfo.title);
		setResults([]);
	};


	return (
		<form className={cn("grid items-start gap-4")} onSubmit={onSubmit}>
			<div className="grid gap-2">
				<div className="relative">
					<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
					<Input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search Books"
						className="pl-8 h-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
					{results.length > 0 && (
						<ScrollArea className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto">
							<ul>
								{results.map((book: any) => (
									<li
										key={book.id}
										onClick={() => handleSelectBook(book)}
										className="cursor-pointer p-2 hover:bg-gray-200 flex items-start gap-2"
									>
										{book.volumeInfo.imageLinks ? (
											<img
												src={book.volumeInfo.imageLinks?.thumbnail}
												alt={book.volumeInfo.title}
												className="w-12 h-16 object-cover"
											/>
										) : (
											<div className="bg-gray-200 w-12 h-16 flex items-center justify-center text-center text-xs text-gray-600">
												image
											</div>
										)}
										<div>
											<h3 className="font-semibold">{book.volumeInfo.title.substring(0, 35) + "..."}</h3>
											<p className="text-sm text-gray-600">
												{book.volumeInfo.authors?.join(", ")}
											</p>
											<p className="text-sm text-gray-600">
												{book.volumeInfo.publishedDate}
											</p>
											<p className="text-sm text-gray-600">
												{book.volumeInfo.description?.substring(0, 50) + "..."}
											</p>
										</div>
									</li>
								))}
							</ul>
						</ScrollArea>
					)}
				</div>
			</div>

			{selectedBook && (
				<div className="p-2 border border-gray-300 rounded-md">
					<Label className="text-black font-semibold text-lg">
						Selected Book:
					</Label>
					<div className="flex flex-row gap-3">
						{selectedBook.imageUrl && (
							<img
								src={selectedBook.imageUrl}
								alt={selectedBook.title}
								className="w-32 h-48 mt-2"
							/>
						)}
						<div className="flex flex-col mt-5">
							<h2 className="text-lg font-semibold">
								{selectedBook.title}
							</h2>
							<p className="text-sm text-gray-600">
								<strong>Author(s):</strong>{" "}
								{selectedBook.author}
							</p>
							<p className="text-sm text-gray-600">
								<strong>Published Date:</strong>{" "}
								{selectedBook.year
									? selectedBook.year
									: "unknown"}
							</p>
							<p className="text-sm text-gray-600">
								<strong>Description:</strong>{" "}
								{selectedBook.description?.substring(0, 150) + "..."}
							</p>
						</div>
					</div>
				</div>
			)}
			<input hidden name="createById" value={createById} />
			<input hidden name="bookTitle" value={selectedBook?.title} />
			<input hidden name="bookImageUrl" value={selectedBook?.imageUrl ?? ""} />
			<input hidden name="bookYear" value={selectedBook?.year ?? 0} />
			<input hidden name="bookAuthor" value={selectedBook?.author ?? ""} />
			<input hidden name="bookDesc" value={selectedBook?.description ?? ""} />
			<Button type="submit">Add New Book</Button>
		</form>
	);
}

export default NewBookForm;

