export default function Services() {
  const services = [
    {
      icon: "ri-rocket-line",
      title: "End-to-End Product Development",
      description: "From initial concept to successful launch and beyond.",
      tags: ["Strategy", "Design", "Development", "Launch"],
    },
    {
      icon: "ri-code-s-line",
      title: "Custom Web Applications",
      description:
        "Modern, scalable platforms built with React, Next.js, TypeScript, Node.js and NestJS.",
      tags: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile Applications",
      description: "High-performance cross-platform apps using React Native.",
      tags: ["React Native", "iOS", "Android", "Cross-platform"],
    },
    {
      icon: "ri-brain-line",
      title: "AI-Enhanced Features",
      description:
        "OpenAI, embeddings and vector databases to improve search, automation and user experience.",
      tags: ["OpenAI", "Embeddings", "Vector DB", "Automation"],
    },
    {
      icon: "ri-server-line",
      title: "SaaS Platform Development",
      description:
        "End-to-end SaaS architecture: authentication, subscriptions, payments, analytics, user roles and scalable infrastructure.",
      tags: ["Authentication", "Subscriptions", "Payments", "Analytics"],
    },
    {
      icon: "ri-links-line",
      title: "API & System Integrations",
      description:
        "Secure integrations with payment systems, CRM, logistics, ticketing and AI-powered services.",
      tags: ["Payment Systems", "CRM", "Logistics", "AI Services"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-4">
            Core Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
