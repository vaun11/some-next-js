export function ButtonGrid() {
    return (
        <>
            <div className="grid grid-cols-2 min-h-screen gap-2">
                <div className="col-span-1 flex">
                    <button className="rounded-md bg-green-500 w-full text-white font-bold hover:bg-green-600">Switch H</button>
                </div>

                <div className="col-span-1 flex">
                    <button className="rounded-md bg-red-500 w-full text-white font-bold hover:bg-red-600">Switch M</button>
                </div>

                <div className="col-span-1 flex">
                    <button className="rounded-md bg-blue-500 w-full text-white font-bold hover:bg-blue-600">Switch J</button>
                </div>
               
                <div className="col-span-1 flex">
                    <button className="rounded-md bg-yellow-500 w-full text-white font-bold hover:bg-yellow-600">Switch C</button>
                </div>

            </div>
        </>
    )
}