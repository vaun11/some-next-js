import { motion } from "motion/react";
import MedicineDropdown from "./medsModal/MedicineDropdown";

interface MedsModalProps {
    isOpen: boolean,
    onClose: () => {},
}

const modalVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

export const MedsModal = ({closeModal} : {closeModal: ()=>void}) => {
    return (
        <motion.div
        className="flex flex-col absolute bg-slate-900 border-2 border-slate-500 text-white rounded-md w-[500px] h-[500px] p-2"
        initial= {{
            opacity: 0, x: "0", y: "20%"
        }}
        animate={{opacity: 1, x:0, y:0,transition: {
            duration: 0.3, // Adjust duration
            ease: "easeInOut", // Smooth easing
        },}}
        exit={{opacity: 0, x: "0%", y: "-20%",transition: {
            duration: 0.2,
            ease: "easeInOut",
        },}}
      >
        <h2 className="text-xl italic font-bold">Meds List</h2>
        <p>This is where your modal content will go</p>
        <MedicineDropdown/>
        <div className="mt-auto flex flex-row justify-around">
            <button className="bg-red-500 border-2 border-red-900 rounded-md p-1" onClick={() => closeModal()}>Close</button>
            <button className="bg-green-500 border-2 border-green-900 rounded-md p-1" onClick={() => alert("test")}>Accept</button>
        </div>
        </motion.div>
    );
};