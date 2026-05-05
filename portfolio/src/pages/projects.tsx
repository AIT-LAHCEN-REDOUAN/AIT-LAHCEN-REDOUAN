import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight, Cpu, PieChart, Globe } from "lucide-react";
import {
  SiApachespark, SiApachekafka, SiDatabricks,
  SiLaravel, SiSpring, SiNextdotjs, SiPytorch,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { useT } from "@/i18n/context";
import portfolioData from "@/data/portfolio.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const iconMap: Record<string, React.ElementType> = {
  SiLaravel, SiApachespark, SiApachekafka, SiDatabricks,
  SiPytorch, SiSpring, SiNextdotjs, Cpu, PieChart,
};

type CategoryKey = "all" | "webDev" | "dataEng" | "dataAnalysis" | "aiMl";

export default function Projects() {
  const { t } = useT();
  const [activeKey, setActiveKey] = useState<CategoryKey>("all");

  const categoryKeys: CategoryKey[] = ["all", "webDev", "dataEng", "dataAnalysis", "aiMl"];

  const projects = portfolioData.projects.items.map((cfg, i) => ({
    ...cfg,
    icon: iconMap[cfg.icon] ?? Cpu,
    ...t.projects.projectData[i],
    category: t.projects.categories[cfg.category as Exclude<CategoryKey, "all">],
    categoryKey: cfg.category as CategoryKey,
  }));

  const filtered =
    activeKey === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeKey);

  return (
    <div className="min-h-[100dvh] font-sans relative overflow-x-hidden">
      <div className="bg-noise" />
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            {t.projects.label}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-4">
            {t.projects.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
            {t.projects.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 max-w-6xl mx-auto relative z-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeKey === key
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
              data-testid={`filter-tab-${key}`}
            >
              {t.projects.categories[key]}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Project grid */}
      <section className="px-6 max-w-6xl mx-auto relative z-10 pb-24">
        <motion.div
          key={activeKey}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 gap-6"
        >
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              className={`rounded-2xl border ${p.borderColor} ${p.bgColor} p-6 flex flex-col hover:scale-[1.01] transition-transform`}
              data-testid={`project-card-${p.title.toLowerCase().replace(/\s/g, "-").slice(0, 20)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-background border border-border">
                  <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>
                <Badge variant="secondary" className="text-xs font-mono">
                  {p.category}
                </Badge>
              </div>

              <h3 className="font-bold text-lg mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.description}
              </p>

              {/* Business impact metrics */}
              {Array.isArray(p.metrics) && p.metrics.length > 0 && (
                <div className="grid grid-cols-3 divide-x divide-border border border-border rounded-xl overflow-hidden mb-4 bg-background/60">
                  {(p.metrics as { value: string; label: string }[]).map((m, idx) => (
                    <div key={idx} className="px-2 py-3 text-center">
                      <p className={`text-sm font-black tabular-nums leading-none ${p.accentColor}`}>{m.value}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 items-center mt-auto">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground bg-background/80 border border-border px-2 py-0.5 rounded-md"
                    data-testid={`project-tech-${tech.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {tech}
                  </span>
                ))}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`ml-auto flex items-center gap-1 text-xs font-semibold ${p.accentColor} hover:underline`}
                    data-testid={`project-link-${p.title.toLowerCase().replace(/\s/g, "-").slice(0, 20)}`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {t.projects.live}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold">{t.projects.cta.title}</h2>
            <p className="text-muted-foreground">{t.projects.cta.desc}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all"
              data-testid="projects-cta-contact"
            >
              {t.projects.cta.letsTalk} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono relative z-10">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
