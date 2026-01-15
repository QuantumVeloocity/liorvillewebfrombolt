import { TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF9] via-[#FFF9F5] to-[#F5F3FF] opacity-60"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9B6FD9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8 border border-[#9B6FD9]/20">
          <TrendingUp className="w-4 h-4 text-[#9B6FD9]" />
          <span className="text-sm text-[#1C1C1C]/70">Fast, Data-Driven Market Access</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1C1C1C] mb-6 leading-tight">
          Unlock Markets for <br />
          <span className="text-[#9B6FD9] font-normal">Ambitious Indian Brands</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#1C1C1C]/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          We help brands enter, expand, and dominate markets <span className="text-[#9B6FD9]">smarter</span> and <span className="text-[#9B6FD9]">faster</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-[#1C1C1C] text-white rounded-full hover:bg-[#2C2C2C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-light text-lg">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white text-[#1C1C1C] rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-[#9B6FD9]/20 font-light text-lg">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
