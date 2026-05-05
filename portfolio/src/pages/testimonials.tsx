import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { useT } from "@/i18n/context";
import type { Lang } from "@/i18n/context";
import portfolioData from "@/data/portfolio.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const pageHeadings: Record<Lang, { title: string; subtitle: string; worked: string; nextProject: string }> = {
  en: { title: "What Clients Say",        subtitle: "Real feedback from clients I've had the pleasure of working with.", worked: "Worked with me?",             nextProject: "Let's build something together" },
  fr: { title: "Ce que disent les clients",subtitle: "Retours authentiques de clients avec qui j'ai collaboré sur divers projets.", worked: "Vous avez travaillé avec moi ?", nextProject: "Discutons de votre prochain projet" },
  ar: { title: "ما يقوله العملاء",         subtitle: "تجارب حقيقية من عملاء عملت معهم على مشاريع متنوعة.", worked: "هل عملت معي؟",         nextProject: "دعنا نتحدث عن مشروعك القادم" },
};

export default function Testimonials() {
  const { t, lang } = useT();
  const isRTL = lang === "ar";
  const h = pageHeadings[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-16">
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm font-semibold tracking-wider uppercase mb-3">
            {t.nav.testimonials}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {h.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-xl">
            {h.subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
          {portfolioData.testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 relative overflow-hidden hover:border-primary/40 transition-colors"
            >
              {/* Decorative quote icon — left for RTL, right for LTR */}
              <Quote className={`absolute top-6 w-16 h-16 text-primary/8 rotate-180 ${isRTL ? "left-8" : "right-8"}`} />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-8 relative z-10">
                "{item.quote[lang as keyof typeof item.quote]}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-border overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                  <img src={item.logo} alt={item.author} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-bold text-sm">{item.author}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {item.role[lang as keyof typeof item.role]}
                  </p>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline font-mono"
                  >
                    {item.websiteLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center"
        >
          <p className="text-muted-foreground mb-2 text-sm font-mono uppercase tracking-wider">
            {h.worked}
          </p>
          <h2 className="text-2xl font-bold mb-6">{h.nextProject}</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t.nav.letsTalk} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </main>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
