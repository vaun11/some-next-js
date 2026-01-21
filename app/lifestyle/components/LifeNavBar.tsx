export function LifeNavBar(){

    return (
        <div className="flex flex-row h-16 bg-[#00ff77] items-center gap-2">
            <a href="/vaunatic" className="flex text-white font-bold italic">LifeStyle</a>    
            <a className="flex text-white">Home</a>
            <a href="/vaunatic/about" className="flex text-white">About</a>
            <a className="flex text-white">Articles</a>
        </div>   
    )
}