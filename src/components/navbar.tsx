import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { useT, type Lang } from "@/i18n/context";
import { Logo } from "@/components/logo";

const LANGS: { code: Lang; label: string; flagCode: string; country: string }[] = [
  { code: "en", label: "EN", flagCode: "us", country: "USA" },
  { code: "fr", label: "FR", flagCode: "fr", country: "France" },
  { code: "ar", label: "AR", flagCode: "sa", country: "KSA" },
];

function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      alt={code}
      className={`object-cover rounded-[2px] ${className}`}
    />
  );
}

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useT();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.testimonials, href: "/testimonials" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40" data-testid="navbar">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity" data-testid="logo-link">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-testid={`nav-link-${l.href.replace("/", "") || "home"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          {/* Language dropdown */}
          <div className="relative me-1" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
              data-testid="lang-dropdown-trigger"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Flag code={currentLang.flagCode} className="w-5 h-3.5" />
              <span className="font-mono text-xs font-semibold">{currentLang.label}</span>
              <ChevronDown
                className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div
                className="absolute end-0 mt-1.5 w-24 rounded-lg border border-border bg-background shadow-lg overflow-hidden z-50"
                role="listbox"
              >
                {LANGS.map(({ code, label, flagCode }) => (
                  <button
                    key={code}
                    role="option"
                    aria-selected={lang === code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                      lang === code
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    data-testid={`lang-btn-${code}`}
                    aria-label={`Switch to ${code}`}
                  >
                    <Flag code={flagCode} className="w-6 h-4 flex-shrink-0" />
                    <span className="font-mono text-xs font-semibold">{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            data-testid="button-toggle-theme"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            data-testid="nav-cta-link"
          >
            {t.nav.letsTalk} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {links.map((l) => {
            const active = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`mobile-nav-link-${l.href.replace("/", "") || "home"}`}
              >
                {l.label}
              </Link>
            );
          })}
          {/* Mobile language selector */}
          <div className="mt-2 flex items-center gap-2 px-1">
            {LANGS.map(({ code, label, flagCode }) => (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  setMenuOpen(false);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-medium transition-colors border ${
                  lang === code
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-testid={`mobile-lang-btn-${code}`}
              >
                <Flag code={flagCode} className="w-5 h-3.5" />
                <span className="font-mono font-semibold">{label}</span>
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-medium text-sm"
            data-testid="mobile-nav-cta-link"
          >
            {t.nav.letsTalk} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </nav>
  );
}
