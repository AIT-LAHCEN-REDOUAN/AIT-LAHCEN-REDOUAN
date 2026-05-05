import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Send, Zap, ShieldCheck, MessageSquare, Sparkles } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { useT } from "@/i18n/context";
import portfolioData from "@/data/portfolio.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const trustStatConfig = [
  { icon: Zap,          value: "< 24h", color: "text-primary",      bg: "bg-primary/10 border-primary/20" },
  { icon: ShieldCheck,  value: "100%",  color: "text-emerald-400",  bg: "bg-emerald-400/10 border-emerald-400/20" },
  { icon: MessageSquare,value: "Free",  color: "text-violet-400",   bg: "bg-violet-400/10 border-violet-400/20" },
];

const valuePropIcons  = [Zap, ShieldCheck, MessageSquare];
const valuePropColors = ["text-primary", "text-emerald-400", "text-violet-400"];

const { email, phone, location } = portfolioData.personal;

const contactInfoConfig = [
  { icon: Mail,   value: email,                             href: `mailto:${email}`,  color: "text-primary",     bg: "bg-primary/10 border-primary/20",           labelKey: "email"    as const },
  { icon: Phone,  value: phone,                             href: `tel:${phone.replace(/\s|-/g, "")}`, color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20", labelKey: "phone"    as const },
  { icon: MapPin, value: `${location.en} · Remote Friendly`,href: null,               color: "text-sky-400",     bg: "bg-sky-400/10 border-sky-400/20",           labelKey: "location" as const },
];

const socialLinks = [
  { icon: SiGithub, label: "GitHub",   handle: "ait-lahcen-redouan", href: portfolioData.personal.github,   color: "text-foreground" },
  { icon: Linkedin, label: "LinkedIn", handle: "ait-lahcen-redouan", href: portfolioData.personal.linkedin, color: "text-[#0A66C2]" },
];

export default function Contact() {
  const { t } = useT();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value;
    const emailVal= (form.elements.namedItem("email")   as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const mailto  = `mailto:${email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${emailVal}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-[100dvh] font-sans relative overflow-x-hidden">
      <div className="bg-noise" />
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-8 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">{t.contact.badge}</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-4">
            {t.contact.title1}<br />
            <span className="text-primary">{t.contact.title2}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed font-sans">
            {t.contact.heroParagraph}
          </motion.p>
        </motion.div>
      </section>

      {/* Trust stats bar */}
      <section className="pb-8 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-3 gap-4">
          {trustStatConfig.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex flex-col items-center gap-1 p-4 rounded-xl border ${stat.bg} text-center`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-1`} />
              <div className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground font-sans">
                {i === 0 ? t.contact.statsLabels.response : i === 1 ? t.contact.statsLabels.commitment : t.contact.statsLabels.consultation}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
          {/* Left column */}
          <div className="space-y-8">

            {/* Value props */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">{t.contact.whyWork}</p>
              {t.contact.valueProps.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-border/80 transition-all"
                >
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-muted">
                    {(() => { const Icon = valuePropIcons[i]; return <Icon className={`w-4 h-4 ${valuePropColors[i]}`} />; })()}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{v.title}</p>
                    <p className="text-muted-foreground text-xs mt-0.5 font-sans leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{t.contact.reachMe}</p>
              {contactInfoConfig.map((c) => (
                <motion.div key={c.labelKey} variants={fadeInUp}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={`flex items-center gap-4 p-4 rounded-xl border ${c.bg} hover:scale-[1.01] transition-all group`}
                      data-testid={`contact-info-${c.labelKey}`}
                    >
                      <c.icon className={`w-5 h-5 ${c.color} shrink-0`} />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.contact.contactLabels[c.labelKey]}</p>
                        <p className="font-medium text-sm" dir="ltr">{c.value}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 rounded-xl border ${c.bg}`}>
                      <c.icon className={`w-5 h-5 ${c.color} shrink-0`} />
                      <div>
                        <p className="text-xs text-muted-foreground">{t.contact.contactLabels[c.labelKey]}</p>
                        <p className="font-medium text-sm" dir="ltr">{c.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-3">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{t.contact.findOnline}</p>
              {socialLinks.map((s) => (
                <motion.div key={s.label} variants={fadeInUp}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    data-testid={`social-link-${s.label.toLowerCase()}`}
                  >
                    <s.icon className={`w-5 h-5 ${s.color} shrink-0`} />
                    <div>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="font-medium text-sm">{s.handle}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Service chips */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">{t.contact.iCanHelp}</p>
              <div className="flex flex-wrap gap-2">
                {t.contact.serviceChips.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground font-sans"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Contact form */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl border border-border bg-card"
              data-testid="contact-form"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h2 className="text-xl font-bold">{t.contact.form.title}</h2>
                </div>
                <p className="text-muted-foreground text-sm font-sans">{t.contact.form.desc}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.form.nameLabel}</label>
                  <input id="name" name="name" type="text" required placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-sans"
                    data-testid="input-name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.form.emailLabel}</label>
                  <input id="email" name="email" type="email" required placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-sans"
                    data-testid="input-email" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">{t.contact.form.subjectLabel}</label>
                <input id="subject" name="subject" type="text" placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow font-sans"
                  data-testid="input-subject" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.form.messageLabel}</label>
                <textarea id="message" name="message" required rows={6} placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none font-sans"
                  data-testid="input-message" />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all text-base"
                data-testid="button-submit-contact"
              >
                <Send className="w-4 h-4" />
                {t.contact.form.submit}
              </button>
            </form>

            {/* Closing quote */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 p-5 rounded-xl border border-border/60 bg-card/50"
            >
              <p className="text-sm text-muted-foreground italic font-sans leading-relaxed">
                "{t.contact.closingQuote}"
              </p>
              <p className="text-xs text-primary font-mono mt-2">— AIT-LAHCEN REDOUAN</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono relative z-10">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
