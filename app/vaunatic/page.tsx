export default function VaunaticHome() {
    return (
        <>
        <h2 className="text-white italic text-xl font-bold">Articles</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 text-white text-center justify-items-center gap-4 py-4 px-1">
            <div className="flex flex-col md:w-full w-72 h-[400px]">
                <div className="flex h-full w-full bg-purple-500 justify-center ">
                    <h1>Caption in a purple box</h1>
                </div>
                <div className="flex">
                    <h2>Article 1</h2>
                </div>
            </div>
            <div className="flex flex-col md:w-full w-72 h-[400px]">
                <div className="flex h-full w-full bg-red-500 justify-center">
                    <p>Caption in a red box</p>
                </div>
                <div className="flex">
                    <h2>Article 2</h2>
                </div>
            </div>
            <div className="flex flex-col md:w-full w-72 h-[400px]">
                <div className="flex h-full w-full bg-blue-500 justify-center">
                    <p>Caption in a blue box</p>
                </div>
                <div className="flex">
                    <h2>Article 3</h2>
                </div>
            </div>
        </div>
        </>
    )
}