import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">{t("notFound.title")}</h1>
        <p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
        <p className="mt-4 text-lg md:text-xl text-gray-500">{t("notFound.body")}</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
}
