import { Search, DollarSign, Users, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Market Research & Competitor Analysis',
      description: 'Deep dive into market dynamics, consumer behavior, and competitor strategies to uncover untapped opportunities and blind spots.'
    },
    {
      icon: DollarSign,
      title: 'Strategic Pricing & Market Entry Plans',
      description: 'Smart pricing models that balance value, margin, and perception, plus comprehensive market entry strategies that minimize risk.'
    },
    {
      icon: Users,
      title: 'Distributor & Partner Finding',
      description: 'Identify and connect with ideal distributors, retailers, and collaborators who align with your vision and scale.'
    },
    {
      icon: BarChart3,
      title: 'Data Interpretation & Growth Insights',
      description: 'Transform raw data into actionable insights that drive growth, optimize operations, and reveal your next big opportunity.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-6">
            What We <span className="text-[#9B6FD9]">Offer</span>
          </h2>
          <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto font-light">
            Comprehensive services designed to accelerate your market entry and expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-[#9B6FD9]/10 hover:border-[#9B6FD9]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B6FD9]/0 to-[#9B6FD9]/0 group-hover:from-[#9B6FD9]/5 group-hover:to-purple-100/5 transition-all duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-[#9B6FD9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#9B6FD9]/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#9B6FD9]" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-light text-[#1C1C1C] mb-4 group-hover:text-[#9B6FD9] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#1C1C1C]/70 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-[#1C1C1C] text-white rounded-full hover:bg-[#9B6FD9] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-light text-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
