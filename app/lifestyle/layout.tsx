import { ReactNode } from "react";
import { LifeNavBar } from "./components/LifeNavBar";

export default function LifeStyleLayout({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-500">
            <LifeNavBar/>
            <div className="flex flex-col p-4">
            {children}

            </div>
        </div>
    )
}