import {
    HiUser,
} from "react-icons/hi2";
import cn from "@/utils/cn";

export default function Sidebar() {
    return (
        <div className="w-52 h-full p-2 text-sm">
            <nav className="flex flex-col gap-1">
                <button
                    className={cn(
                        "flex items-center gap-2 text-left px-3 py-1.5 rounded-lg transition-colors bg-primary text-accent"
                    )}
                >
                    <HiUser size={16} />
                    <span>Florian Christ</span>
                </button>
            </nav>
        </div>
    );
}