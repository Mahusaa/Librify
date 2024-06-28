

interface PageWrapper {
	children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapper> = ({ children }) => {
	return (
		<div className="flex flex-col gap-4 sm:border-r sm:border-zinc-700 min-h-screen mt-4 mx-2">
			{children}
		</div>
	);
};

export default PageWrapper;

