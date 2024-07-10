


const BookDisplay: React.FC = () => {
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

export default BookDisplay;
