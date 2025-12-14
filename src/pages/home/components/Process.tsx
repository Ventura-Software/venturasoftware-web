export default function Process() {
  const steps = [
    {
      number: '01',
      icon: 'ri-compass-3-line',
      title: 'Discovery',
      description: 'Requirements gathering, market research, and strategic planning to align on goals.',
      duration: '1-2 weeks'
    },
    {
      number: '02',
      icon: 'ri-pencil-ruler-2-line',
      title: 'UI/UX Design',
      description: 'Wireframes, interactive prototypes, and comprehensive design systems.',
      duration: '2-3 weeks'
    },
    {
      number: '03',
      icon: 'ri-code-box-line',
      title: 'Development',
      description: 'Agile sprints with code reviews, automated testing, and continuous integration.',
      duration: '6-12 weeks'
    },
    {
      number: '04',
      icon: 'ri-checkbox-circle-line',
      title: 'QA & Testing',
      description: 'Comprehensive testing including automated tests, manual QA, and performance optimization.',
      duration: '1-2 weeks'
    },
    {
      number: '05',
      icon: 'ri-rocket-2-line',
      title: 'Launch',
      description: 'Deployment to production, monitoring setup, and performance optimization.',
      duration: '1 week'
    },
    {
      number: '06',
      icon: 'ri-line-chart-line',
      title: 'Support & Growth',
      description: 'Ongoing maintenance, feature updates, and scaling as your business grows.',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            End-to-End Development
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A proven methodology that takes your product from concept to launch
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div
                  className={`group p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <span className="inline-block text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-2">
                    STEP {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 flex items-center justify-center bg-slate-800 border-4 border-cyan-500 rounded-full shadow-lg shadow-cyan-500/20 z-10 relative">
                  <i className={`${step.icon} text-2xl text-cyan-400`}></i>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
