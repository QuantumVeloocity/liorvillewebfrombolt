import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Team', href: '/#team' },
    { label: 'Pricing', href: '/pricing' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#9B6FD9]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-light text-[#1C1C1C]">
          <span className="text-[#9B6FD9]">Lior</span>ville
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-[#1C1C1C]/70 hover:text-[#9B6FD9] transition-colors duration-300 font-light"
            >
              {item.label}
            </Link>
          ))}
          <button className="px-6 py-2 bg-[#9B6FD9] text-white rounded-full hover:bg-[#7A4BB0] transition-all duration-300 font-light">
            Get Started
          </button>
        </nav>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#1C1C1C]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1C1C1C]" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-[#9B6FD9]/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-[#1C1C1C]/70 hover:text-[#9B6FD9] transition-colors duration-300 font-light py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="px-6 py-2 bg-[#9B6FD9] text-white rounded-full hover:bg-[#7A4BB0] transition-all duration-300 font-light w-full">
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
}
