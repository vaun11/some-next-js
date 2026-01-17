export function ButtonGrid() {
    return (
        <>
            <div className="grid grid-cols-2 min-h-screen gap-2">
                <div className="col-span-1 flex">
                    <button className="rounded-md bg-green-500 w-full text-white font-bold hover:bg-green-600">Green</button>
                </div>

                <div className="col-span-1 flex">
                    <button className="rounded-md bg-red-500 w-full text-white font-bold hover:bg-red-600">Red</button>
                </div>

                <div className="col-span-1 flex">
                    <button className="rounded-md bg-blue-500 w-full text-white font-bold hover:bg-blue-600">Blue</button>
                </div>
               
                <div className="col-span-1 flex">
                    <button className="rounded-md bg-yellow-500 w-full text-white font-bold hover:bg-yellow-600">Yellow</button>
                </div>

            </div>
        </>
    )
}