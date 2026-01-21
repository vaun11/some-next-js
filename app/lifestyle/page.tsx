"use client"

import { ActivityLogIcon, IconJarLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
import { MedsModal } from "./components/MedsModal";



export default function LifeStylePage() {

    const [isMedsModalOpen, setMedsModalOpen] = useState(false);
    const openModal = () => {
        // alert ("Opening meds Modal")
        setMedsModalOpen(true);
    }
    const closeModal = () => setMedsModalOpen(false);

    return (
        <>
        <h1 className="text-white">Behold, the UI:</h1>
        <div className="flex flex-col justify-center items-center">
            <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.2, ease: [0, 0.71, 0.2, 1.01]}} className="w-[500px] h-[500px] bg-slate-900 border-4 border-slate-700 rounded-md text-white">
                <div className="flex flex-row justify-around h-full border-2 border-purple-500 gap-2 p-2">
                    <div className="flex flex-col border-2 border-red-500 rounded-md h-full w-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center rounded-md border-2 border-green-500 bg-green-900 h-24 w-24 gap-2">
                            <h2>Activities</h2> 
                            <ActivityLogIcon width={32} height={32}/>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 border-blue-500 rounded-md h-full w-full items-center justify-center">
                        <button onClick={() => openModal()} className="flex flex-col items-center justify-center rounded-md border-2 border-green-500 bg-green-900 h-24 w-24 gap-2">
                            <h2>Meds</h2>
                            <IconJarLogoIcon width={32} height={32}/>                                               
                        </button>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isMedsModalOpen && (
                    <MedsModal closeModal={closeModal} />
                )}
            </AnimatePresence>
        </div>
        </>
    )
}