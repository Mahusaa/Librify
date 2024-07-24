export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-75"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  )
}
