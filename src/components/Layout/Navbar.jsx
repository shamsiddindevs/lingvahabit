

const Navbar = () => {
  const navLinks = [
    { name: "Speak English", href: "#" },
    { name: "Kurslar", href: "#" },
    { name: "Premium", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Sharhlar", href: "#" },
  ];

  return (
    <nav className="w-full z-50  border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-slate-800 tracking-tight cursor-pointer">
              lingvohabit
            </span>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-6 py-2.5 bg-[#FF7D52] hover:bg-[#ff6b3d] text-white text-[14px] font-semibold rounded-lg transition-all transform active:scale-95 shadow-sm">
              Ro'yxatdan o'tish
            </button>
            <button className="px-6 py-2.5 bg-white border border-indigo-100 text-indigo-600 text-[14px] font-semibold rounded-lg hover:bg-indigo-50 transition-all transform active:scale-95">
              Kirish
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;