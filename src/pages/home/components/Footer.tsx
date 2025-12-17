export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img
              src="https://public.readdy.ai/ai/img_res/25fc608c-f5da-4b1f-8985-bc4561935a7d.png"
              alt="Ventura Software"
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building exceptional digital products with senior engineering
              teams.
            </p>

            {/* Social Icons */}
            {/* TODO: Add social icons */}
            {/* <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-cyan-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-cyan-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-fill text-lg"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-cyan-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 align-center">
                <i className="ri-mail-line text-cyan-400"></i>
                <span className="text-slate-400 text-sm">
                  info@venturasoftware.dev
                </span>
              </li>
              <li className="flex items-start gap-3 align-center">
                <i className="ri-phone-line text-cyan-400"></i>
                <span className="text-slate-400 text-sm">+598 97 388 046</span>
              </li>
              <li className="flex items-start gap-3 align-center">
                <i className="ri-map-pin-line text-cyan-400"></i>
                <span className="text-slate-400 text-sm">
                  Montevideo, Uruguay
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ventura Software. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
