import { Search, ShoppingBag, User, Menu, Film } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient line at the top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Main header content */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo section */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                <Film className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text group-hover:scale-105 transition-transform">
                Reels
              </span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Discover
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Categories
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                What's New
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              {/* Search button with hover effect */}
              <button className="relative group p-2 hover:bg-white/10 rounded-full transition-colors">
                <Search className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              </button>

              {/* Shopping bag with indicator */}
              <button className="relative group p-2 hover:bg-white/10 rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                  2
                </span>
              </button>

              {/* User profile */}
              <button className="relative group p-2 hover:bg-white/10 rounded-full transition-colors">
                <User className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              </button>

              {/* Mobile menu button */}
              <button className="md:hidden relative group p-2 hover:bg-white/10 rounded-full transition-colors">
                <Menu className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search overlay - hidden by default */}
      <div className="hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header