export default function TrustedBy() {
  const partners = [
    { name: 'Partner 1', width: 140 },
    { name: 'Partner 2', width: 160 },
    { name: 'Partner 3', width: 150 },
    { name: 'Partner 4', width: 145 },
    { name: 'Partner 5', width: 155 },
    { name: 'Partner 6', width: 140 }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 tracking-widest uppercase mb-12">
          Trusted By
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 px-6 bg-slate-100 rounded-lg transition-all duration-300 hover:bg-slate-200 cursor-pointer"
              style={{ width: `${partner.width}px` }}
            >
              <span className="text-slate-400 font-semibold text-sm">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
