import { Children, ReactNode } from "react";
import { TopNavBar } from "./components/TopNavBar";
import { StoryCard } from "./components/StoryCard";

export default function SinvertedPage(){
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <TopNavBar/>
            <StoryCardContainer>
                <StoryCard/>
                <StoryCard/>
            </StoryCardContainer>
        </div>
    )
}

function StoryCardContainer(props: {children: ReactNode}) {
    return (
        <div className="flex flex-row bg-purple-500 overflow-hidden gap-3"> 
            {props.children}
        </div>
    )
}

