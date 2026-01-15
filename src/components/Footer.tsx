import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light mb-4 text-[#9B6FD9]">Liorville</h3>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Fast, data-driven market access consultancy helping ambitious Indian brands unlock new markets.
            </p>
            <div className="flex items-center gap-2 text-white/80 hover:text-[#9B6FD9] transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:team@liorville.com" className="font-light">
                team@liorville.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Why Us?</h4>
            <ul className="space-y-3 text-white/70 font-light">
              <li>
                <a href="#vision" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Services</h4>
            <ul className="space-y-3 text-white/70 font-light">
              <li>Market Research</li>
              <li>Strategic Pricing</li>
              <li>Partner Finding</li>
              <li>Growth Insights</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#9B6FD9] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#9B6FD9] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#9B6FD9] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li>
                <a href="#" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9B6FD9] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-light text-sm">
            © 2025 Liorville. All Rights Reserved.
          </p>
          <a
            href="#"
            className="text-[#9B6FD9] hover:text-white transition-colors duration-300 font-light text-sm"
          >
            Founder & CEO
          </a>
        </div>
      </div>
    </footer>
  );
}
