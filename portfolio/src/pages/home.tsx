import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin, Mail, ArrowRight, Code2, Database, BarChart2,
  Globe, PieChart, FileSpreadsheet, Server, Hash, HardDrive, Brain, Cpu, Box
} from "lucide-react";
import {
  SiGithub, SiReact, SiLaravel, SiNextdotjs, SiPython,
  SiApachekafka, SiDocker, SiPostgresql, SiDatabricks,
  SiApachespark, SiKubernetes, SiMongodb, SiMysql, SiPytorch,
  SiSpring, SiFastapi
} from "react-icons/si";
import { Linkedin } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { useT } from "@/i18n/context";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const serviceConfig = [
  { icon: Code2, color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20", href: "/services", descKey: "webDesc" as const },
  { icon: Database, color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20", href: "/services", descKey: "deDesc" as const },
  { icon: BarChart2, color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20", href: "/services", descKey: "biDesc" as const },
  { icon: Brain, color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20", href: "/services", descKey: "aiDesc" as const },
];

const techGroups = [
  {
    labelKey: "web" as const,
    color: "text-sky-400",
    divider: "bg-sky-400/30",
    items: [
      { icon: SiLaravel, color: "text-[#FF2D20]", label: "Laravel" },
      { icon: SiSpring, color: "text-[#6DB33F]", label: "Spring Boot" },
      { icon: SiReact, color: "text-[#61DAFB]", label: "React" },
      { icon: SiNextdotjs, color: "text-foreground", label: "Next.js" },
      { icon: SiFastapi, color: "text-[#009688]", label: "FastAPI" },
      { icon: SiPostgresql, color: "text-[#4169E1]", label: "PostgreSQL" },
      { icon: SiMongodb, color: "text-[#47A248]", label: "MongoDB" },
      { icon: SiMysql, color: "text-[#4479A1]", label: "MySQL" },
      { icon: SiDocker, color: "text-[#2496ED]", label: "Docker" },
    ],
  },
  {
    labelKey: "de" as const,
    color: "text-violet-400",
    divider: "bg-violet-400/30",
    items: [
      { icon: SiPython, color: "text-[#3776AB]", label: "Python" },
      { icon: SiApachespark, color: "text-[#E25A1C]", label: "PySpark" },
      { icon: SiApachekafka, color: "text-foreground", label: "Kafka" },
      { icon: SiDatabricks, color: "text-[#FF3621]", label: "Databricks" },
      { icon: SiKubernetes, color: "text-[#326CE5]", label: "Kubernetes" },
      { icon: HardDrive, color: "text-[#0078D4]", label: "Azure ADLS" },
    ],
  },
  {
    labelKey: "bi" as const,
    color: "text-emerald-400",
    divider: "bg-emerald-400/30",
    items: [
      { icon: PieChart, color: "text-[#F2C811]", label: "Power BI" },
      { icon: FileSpreadsheet, color: "text-[#217346]", label: "Excel" },
      { icon: Server, color: "text-[#CC2927]", label: "SQL Server" },
      { icon: BarChart2, color: "text-[#0078D4]", label: "Azure Synapse" },
      { icon: Hash, color: "text-muted-foreground", label: "DAX" },
      { icon: SiPostgresql, color: "text-[#4169E1]", label: "PostgreSQL" },
    ],
  },
  {
    labelKey: "ai" as const,
    color: "text-orange-400",
    divider: "bg-orange-400/30",
    items: [
      { icon: SiPython, color: "text-[#3776AB]", label: "Python" },
      { icon: SiPytorch, color: "text-[#EE4C2C]", label: "PyTorch" },
      { icon: Cpu, color: "text-muted-foreground", label: "Scikit-learn" },
      { icon: Box, color: "text-orange-400", label: "Open3D" },
      { icon: Brain, color: "text-orange-300", label: "Deep Learning" },
      { icon: SiDocker, color: "text-[#2496ED]", label: "Docker" },
    ],
  },
];

const statValues = ["1+", "4", "7+", "Open"];

export default function Home() {
  const { t } = useT();

  const statLabels = [
    t.home.stats.yearExp,
    t.home.stats.skillDomains,
    t.home.stats.keyProjects,
    t.home.stats.forFreelance,
  ];

  const serviceLabels = [
    t.services.items[0].label,
    t.services.items[1].label,
    t.services.items[2].label,
    t.services.items[3].label,
  ];

  const techGroupLabels = {
    web: t.services.items[0].label,
    de: t.services.items[1].label,
    bi: t.services.items[2].label,
    ai: t.services.items[3].label,
  };

  return (
    <div className="min-h-[100dvh] font-sans relative overflow-x-hidden">
      <div className="bg-noise" />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-8 max-w-4xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{t.home.location}</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              {t.home.available}
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.08]">
              {t.home.heroName}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl font-medium text-muted-foreground">
              <span className="text-foreground font-semibold">{t.home.tagline.web}</span>
              <span className="text-primary text-sm">×</span>
              <span className="text-primary font-semibold">{t.home.tagline.de}</span>
              <span className="text-primary text-sm">×</span>
              <span className="text-emerald-400 font-semibold">{t.home.tagline.bi}</span>
              <span className="text-primary text-sm">×</span>
              <span className="text-orange-400 font-semibold">{t.home.tagline.ai}</span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {t.home.heroParagraph}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg shadow-primary/20"
              data-testid="hero-cta-projects"
            >
              {t.home.viewWork} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all font-medium"
              data-testid="hero-cta-contact"
            >
              {t.home.letsTalk}
            </Link>
            <a
              href="https://github.com/ait-lahcen-redouan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all font-medium"
              data-testid="hero-link-github"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ait-lahcen-redouan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all font-medium"
              data-testid="hero-link-linkedin"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/50 bg-card relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary font-mono">{val}</div>
              <div className="text-sm text-muted-foreground mt-1">{statLabels[i]}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">{t.home.servicesSection.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t.home.servicesSection.title}</h2>
          <p className="text-muted-foreground mt-3 max-w-xl font-sans">
            {t.home.servicesSection.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceConfig.map((s, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Link
                href={s.href}
                className={`block p-8 rounded-2xl border ${s.bg} hover:scale-[1.02] transition-all group h-full`}
                data-testid={`service-card-${serviceLabels[i].toLowerCase().replace(/\s/g, "-")}`}
              >
                <s.icon className={`w-8 h-8 ${s.color} mb-5`} />
                <h3 className="font-bold text-lg mb-3">{serviceLabels[i]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{t.home.servicesSection[s.descKey]}</p>
                <div className={`mt-5 flex items-center gap-1 text-sm font-medium ${s.color}`}>
                  {t.home.servicesSection.learnMore} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 bg-card border-y border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <p className="text-xs font-mono text-muted-foreground text-center uppercase tracking-widest">
            {t.home.techLabel}
          </p>
          {techGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 justify-center">
                <span className={`h-px w-10 ${group.divider}`} />
                <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${group.color}`}>
                  {techGroupLabels[group.labelKey]}
                </span>
                <span className={`h-px w-10 ${group.divider}`} />
              </motion.div>
              <div className="flex flex-wrap justify-center gap-5">
                {group.items.map((t) => (
                  <motion.div
                    key={`${gi}-${t.label}`}
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-2"
                    data-testid={`tech-badge-${t.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary/60 hover:bg-primary/5 transition-all">
                      <t.icon className={`w-6 h-6 ${t.color}`} />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{t.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-400 blur-3xl" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.cta.title}</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-sans">
              {t.home.cta.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:aitlahcenredouan071@gmail.com"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all"
                data-testid="cta-email-link"
              >
                <Mail className="w-5 h-5" />
                {t.home.cta.emailMe}
              </a>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card hover:bg-muted font-semibold transition-all"
                data-testid="cta-projects-link"
              >
                <Globe className="w-5 h-5" />
                {t.home.cta.browse}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono relative z-10">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
