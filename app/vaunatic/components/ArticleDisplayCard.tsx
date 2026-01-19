export interface ArticleDisplayCardProps {
    key: String,
    caption: String,
    title: String,
    color: "red" | "blue" | "purple"
}

export default function ArticleDisplayCard({props}: {props: ArticleDisplayCardProps}){
    
    const cardColorTw = props.color == "red" ? "bg-red-500" : props.color == "blue" ? "bg-blue-500" : "bg-purple-500"

    return (
        <div className="flex flex-col max-w-[400px] md:w-full w-72 h-[450px]">
                <div className={`flex h-full w-full ${cardColorTw} justify-center`}>
                    <p>{props.caption}</p>
                </div>
                <div className="flex h-24">
                    <h2>{props.title}</h2>
                </div>
            </div>
    )
}