import { Zap, Target, TrendingUp, Lightbulb } from 'lucide-react';

export default function About() {
  const visionPoints = [
    {
      icon: Lightbulb,
      title: 'Strategy Made Accessible',
      description: 'We leverage free tools and smart frameworks to make high-quality strategy accessible to every brand, regardless of size.'
    },
    {
      icon: Target,
      title: 'Kill the Guesswork',
      description: 'Every recommendation we make is backed by raw data and real market intelligence—no assumptions, just facts.'
    },
    {
      icon: TrendingUp,
      title: 'Champion the Underdogs',
      description: 'We support emerging brands with actionable, fast strategies that help them compete with industry giants.'
    },
    {
      icon: Zap,
      title: 'Disrupt Old-School Consulting',
      description: 'We bring speed, clarity, and precision to an industry known for complexity and slow delivery.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-6">
            Our <span className="text-[#9B6FD9]">Vision</span>
          </h2>
          <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto font-light">
            We're redefining market access consultancy by making it faster, smarter, and more accessible for ambitious Indian brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="group p-8 bg-[#FFFDF9] rounded-3xl hover:bg-white transition-all duration-300 border border-[#9B6FD9]/10 hover:border-[#9B6FD9]/30 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-[#9B6FD9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#9B6FD9]/20 transition-all duration-300">
                <point.icon className="w-7 h-7 text-[#9B6FD9]" />
              </div>
              <h3 className="text-2xl font-light text-[#1C1C1C] mb-4">{point.title}</h3>
              <p className="text-[#1C1C1C]/70 leading-relaxed font-light">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-12 bg-gradient-to-br from-[#9B6FD9]/5 to-purple-100/10 rounded-3xl border border-[#9B6FD9]/20">
            <p className="text-2xl md:text-3xl text-[#1C1C1C] font-light leading-relaxed max-w-4xl">
              "We believe every ambitious brand deserves <span className="text-[#9B6FD9]">world-class strategy</span> without the world-class price tag. Let's make markets work for you."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
