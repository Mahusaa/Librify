import { Book } from "~/types/book";


interface BookDisplayProps {
	book: Book;
}

const BookDisplay: React.FC<BookDisplayProps> = ({ book }) => {

	return (
		<div className="p-4  border-b  flex items-center">
			{book.imageUrl ? (<img src={book.imageUrl} alt={`${book.title} cover`} className="w-12 h-16 mr-4 object-cover rounded" />) : (
				<h1>No content</h1>
			)}
			<div>
				<h2 className="text-xl font-semibold ">{book.title}</h2>
				<p className="text-sm text-muted-foreground">{book.author}</p>
			</div>
		</div>
	);
};

export default BookDisplay;
