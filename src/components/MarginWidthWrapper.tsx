

interface MarginWidthWrapperProps {
	children: React.ReactNode;
}

const MarginWidthWrapper: React.FC<MarginWidthWrapperProps> = ({ children }) => {
	return (
		<div className="flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen">
			{children}
		</div>)
}


export default MarginWidthWrapper;
