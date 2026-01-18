import ArticleDisplayCard, { ArticleDisplayCardProps } from "./components/ArticleDisplayCard";
import { ArticleCardData } from "./data/articles";

export default function VaunaticHome() {

    const card4Data: ArticleDisplayCardProps = {
        caption: "Caption",
        title:"Blue Title",
        color: "blue"
    }

    return (
        <>
        <h2 className="text-white italic text-xl font-bold">Articles</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 text-white text-center justify-items-center gap-4 py-4 px-1">
            {ArticleCardData.map((card) =>
            <ArticleDisplayCard props={card}/>
            )}
        </div>
        </>
    )
}