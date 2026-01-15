import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29,999',
      period: 'per month',
      description: 'Perfect for emerging brands starting their market journey.',
      features: [
        'Basic market research report',
        'Competitor analysis (5 competitors)',
        'Market size estimation',
        'Pricing benchmark report',
        'Monthly strategy calls (1)',
        'Email support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '74,999',
      period: 'per month',
      description: 'Ideal for brands ready to scale and enter new markets.',
      features: [
        'Comprehensive market analysis',
        'Competitor deep dive (10+ competitors)',
        'Consumer behavior insights',
        'Strategic pricing models',
        'Distributor & partner identification (10-15)',
        'B2B meeting coordination (5 meetings)',
        'Bi-weekly strategy calls',
        'Priority email & phone support',
        'Quarterly growth review'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored pricing',
      description: 'For ambitious brands seeking complete market dominance.',
      features: [
        'Everything in Professional',
        'Full market entry strategy',
        'Regional market analysis',
        'Custom financial modeling',
        'Unlimited partner identification',
        'Weekly strategy sessions',
        'Dedicated account manager',
        'Custom reporting & dashboards',
        'Real-time market insights',
        'Executive presentations'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-24">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-light text-[#1C1C1C] mb-6">
              Simple, Transparent <span className="text-[#9B6FD9]">Pricing</span>
            </h1>
            <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto font-light leading-relaxed">
              Choose the plan that fits your ambitions. Scale up anytime as your brand grows and markets expand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-[#9B6FD9] to-purple-600 text-white shadow-2xl'
                    : 'bg-white border border-[#9B6FD9]/10 hover:border-[#9B6FD9]/30 hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-light">
                    Most Popular
                  </div>
                )}

                <div className="p-8 h-full flex flex-col">
                  <h3 className={`text-3xl font-light mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1C1C1C]'}`}>
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className={`text-5xl font-light ${plan.highlighted ? 'text-white' : 'text-[#1C1C1C]'}`}>
                      {plan.price === 'Custom' ? plan.price : `₹${plan.price}`}
                    </span>
                    <span className={`${plan.highlighted ? 'text-white/80' : 'text-[#1C1C1C]/60'} font-light ml-2`}>
                      {plan.period}
                    </span>
                  </div>

                  <p className={`${plan.highlighted ? 'text-white/80' : 'text-[#1C1C1C]/70'} font-light mb-8`}>
                    {plan.description}
                  </p>

                  <button
                    className={`w-full py-3 rounded-full font-light mb-8 transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-white text-[#9B6FD9] hover:bg-gray-100'
                        : 'bg-[#9B6FD9] text-white hover:bg-[#7A4BB0]'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-white' : 'text-[#9B6FD9]'
                        }`} />
                        <span className={`font-light text-sm ${
                          plan.highlighted ? 'text-white/90' : 'text-[#1C1C1C]/70'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 border border-[#9B6FD9]/10">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Can I switch plans anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.'
                },
                {
                  q: 'Do you offer discounts for annual billing?',
                  a: 'Absolutely! We offer 20% off when you commit to an annual plan, plus additional benefits for long-term partnerships.'
                },
                {
                  q: 'Is there a money-back guarantee?',
                  a: 'We offer a 14-day free trial on all plans. If not satisfied, you get your money back—no questions asked.'
                },
                {
                  q: 'What support is included?',
                  a: 'All plans include dedicated support. Starter includes email support, Professional includes phone support, and Enterprise includes a dedicated account manager.'
                },
                {
                  q: 'Can I customize a plan?',
                  a: 'Definitely! Contact our team for custom packages tailored to your specific needs and budget.'
                },
                {
                  q: 'Do you work with international brands?',
                  a: 'Yes! We specialize in helping Indian brands expand, but we also work with international companies targeting the Indian market.'
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="text-lg font-light text-[#1C1C1C] mb-3">{faq.q}</h4>
                  <p className="text-[#1C1C1C]/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-6">
              Ready to Transform Your Market Strategy?
            </h2>
            <p className="text-xl text-[#1C1C1C]/70 max-w-2xl mx-auto font-light mb-8 leading-relaxed">
              Start with a free consultation. Let's discuss which plan aligns best with your ambitions.
            </p>
            <button className="px-8 py-4 bg-[#9B6FD9] text-white rounded-full hover:bg-[#7A4BB0] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-light text-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
