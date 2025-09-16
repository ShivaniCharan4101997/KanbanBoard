import { Navbar } from "./Navbar";
import { Search, Plus, Share2, Share } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow">
      {/* Navbar */}
      <Navbar />

      {/* Title */}
      <h1 className="font-extrabold text-[var(--text-color-primary)] text-2xl md:text-3xl">
        Kanban Dashboard
      </h1>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Button */}
        <button>
          <Search size={20} />
        </button>

        {/* Share Button */}
        <button className="flex items-center justify-center gap-2 py-2 px-4 bg-[var(--inProgress)] text-white rounded-4xl hover:opacity-90 transition">
          Share <Share2 size={20} />
        </button>

        {/* Export Button */}
        <button className="p-2 w-10 h-10 rounded-full border border-[var(--icons-border-color)] text-[var(--text-color-secondary)] flex items-center justify-center font-bold hover:bg-gray-100 transition">
          <Share size={20} />
        </button>

        {/* Add New Task */}
        <button className="p-2 w-10 h-10 rounded-full border border-[var(--icons-border-color)] text-[var(--text-color-secondary)] flex items-center justify-center font-bold hover:bg-gray-100 transition">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};
