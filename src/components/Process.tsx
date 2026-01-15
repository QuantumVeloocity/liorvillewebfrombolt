import { Database, LineChart, Lightbulb, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Database,
      number: '01',
      title: 'Data Collection',
      description: 'We gather comprehensive market data, consumer insights, and competitive intelligence.'
    },
    {
      icon: LineChart,
      number: '02',
      title: 'Market Analysis',
      description: 'Our team analyzes patterns, identifies opportunities, and maps market dynamics.'
    },
    {
      icon: Lightbulb,
      number: '03',
      title: 'Strategy Development',
      description: 'We craft actionable, data-backed strategies tailored to your unique goals.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Execution Support',
      description: 'We guide you through implementation and provide ongoing strategic support.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#FFFDF9] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-6">
            Our <span className="text-[#9B6FD9]">Process</span>
          </h2>
          <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto font-light">
            A streamlined approach that transforms data into market dominance.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9B6FD9]/20 via-[#9B6FD9]/40 to-[#9B6FD9]/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 border border-[#9B6FD9]/20 hover:border-[#9B6FD9]/40 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-[#9B6FD9]/10 rounded-2xl mb-6">
                    <step.icon className="w-8 h-8 text-[#9B6FD9]" strokeWidth={1.5} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center text-xs font-light">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-[#1C1C1C] mb-4">
                    {step.title}
                  </h3>

                  <p className="text-[#1C1C1C]/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
