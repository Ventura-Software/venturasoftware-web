export default function WhyWorkWithUs() {
  const reasons = [
    {
      number: '01',
      title: 'Bilingual Team',
      description: 'Clear, fluent communication in English and Spanish for smooth collaboration.'
    },
    {
      number: '02',
      title: 'Meet Your Developer',
      description: 'Clients can meet and interview the assigned engineer to confirm technical and cultural alignment.'
    },
    {
      number: '03',
      title: 'Reliable Support',
      description: 'We provide consistent engineering capacity with optional PM and QA when needed.'
    },
    {
      number: '04',
      title: 'Low Rotation',
      description: 'Stable long-term team that reduces onboarding overhead and ensures continuity.'
    },
    {
      number: '05',
      title: 'Qualified Talent Pool',
      description: 'Senior engineers experienced in React, Next.js, React Native, Node.js, NestJS, TypeScript, PostgreSQL and cloud integrations.'
    },
    {
      number: '06',
      title: 'Professional Work Ethic',
      description: 'Transparency, ownership, accountability and high communication standards.'
    },
    {
      number: '07',
      title: 'Business Mindset',
      description: 'We think beyond code: product, monetization, scalability and ROI are part of the process.'
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Why Work With Ventura Software
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-3 space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {reason.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
