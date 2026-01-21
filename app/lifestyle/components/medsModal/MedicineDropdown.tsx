import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function MedicineDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <div className="flex flex-col border-2 border-slate-500 rounded-md p-2 w-full text-white divide-y-2">
            <div className="flex flex-row items-center justify-between">
                <span>Medicine Name</span>
                <DropdownMenuIcon onClick={()=>setDropdownOpen(!dropdownOpen)}height={24} width={24}/>
            </div>
            {dropdownOpen && (
                <>
                <div className="flex flex-row">
                    <span>Medicine 1</span>
                </div>
                <div className="flex flex-row">
                    <span>Medicine 2</span>
                </div>
                <div className="flex flex-row">
                    <span>Medicine 3</span>
                </div>
                </>
            )}
            
        </div>
    )
}