export default function Loading() {
    return <div className="bg-card-hover rounded-lg flex items-center justify-center h-[500px] p-8 mb-16">
            <div className="flex flex-col gap-2 items-center space-y-4">
                <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                <div className="text-body text-xl font-semibold">Loading...</div>
            </div>
        </div>
}