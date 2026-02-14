import {
  Book,
  Home,
  BookOpen,
  CirclePlayIcon,
  PenSquare,
  Settings,
} from "lucide-react";

const Navbar = () => {
  return (
    <aside className="w-20 md:w-64 glass-panel border-r border-slate-800 flex flex-col h-screen sticky top-0">
      <div className="p-6 mb-8 flex items-center justify-center md:justify-start gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Book size={24} />
        </div>
        <span className="text-xl font-bold hidden md:block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Polyglot
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-4">
        <button className="w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all duration-200 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200">
          <span>
            <Home size={20} />
          </span>
          <span className="hidden md:block font-medium">Dashboard</span>
        </button>

        <button className="w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all duration-200 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200">
          <span>
            <BookOpen size={20} />
          </span>
          <span className="hidden md:block font-medium">Dictionary</span>
        </button>

        <button className="w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all duration-200 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200">
          <span>
            <PenSquare size={20} />
          </span>
          <span className="hidden md:block font-medium">Learn</span>
        </button>

        <button className="w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl transition-all duration-200 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200">
          <span>
            <CirclePlayIcon size={20} />
          </span>
          <span className="hidden md:block font-medium">Study plan</span>
        </button>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center justify-center md:justify-start gap-4 p-3 rounded-xl text-slate-400 hover:bg-slate-800/50 transition-colors">
          <span>
            <Settings size={20} />
          </span>
          <span className="hidden md:block font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
