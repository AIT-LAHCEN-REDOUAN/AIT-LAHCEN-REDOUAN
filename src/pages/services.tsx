import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Code2, Database, BarChart2, ArrowRight, CheckCircle, Mail,
  Globe, Layers, Cpu, Table, FileSpreadsheet, PieChart,
  Cloud, HardDrive, Server, Hash, Brain, Box
} from "lucide-react";

import {
  SiLaravel, SiReact, SiNextdotjs, SiPython, SiPhp, SiJavascript,
  SiMysql, SiPostgresql, SiMongodb, SiGit, SiDocker,
  SiApachekafka, SiKubernetes, SiDatabricks, SiApachespark,
  SiPrometheus, SiGrafana, SiPytorch, SiSpring, SiFastapi
} from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { useT } from "@/i18n/context";

function DebeziumIcon({ className = "" }: { className?: string }) {
  return <img src="/debezium-logo.png" alt="Debezium" className={`object-contain ${className}`} />;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const serviceVisualConfig = [
  {
    id: "fullstack",
    icon: Code2,
    color: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
    glow: "shadow-sky-400/10",
    tech: [
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Spring Boot", icon: SiSpring, color: "text-[#6DB33F]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    ],
  },
  {
    id: "data-engineering",
    icon: Database,
    color: "text-primary",
    border: "border-primary/30",
    bg: "bg-primary/5",
    glow: "shadow-primary/10",
    tech: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PySpark", icon: SiApachespark, color: "text-[#E25A1C]" },
      { name: "Kafka", icon: SiApachekafka, color: "text-foreground" },
      { name: "Databricks", icon: SiDatabricks, color: "text-[#FF3621]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    ],
    techExtraItems: [
      { name: "Azure Data Factory", icon: Cloud, color: "text-[#0078D4]" },
      { name: "ADLS Gen2", icon: HardDrive, color: "text-[#0078D4]" },
      { name: "Synapse Analytics", icon: BarChart2, color: "text-[#0078D4]" },
      { name: "Debezium", icon: DebeziumIcon, color: "text-orange-400" },
      { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
      { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" },
    ],
  },
  {
    id: "data-analysis",
    icon: BarChart2,
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    glow: "shadow-emerald-400/10",
    tech: [
      { name: "Power BI", icon: PieChart, color: "text-[#F2C811]" },
      { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-[#217346]" },
      { name: "Azure Synapse", icon: BarChart2, color: "text-[#0078D4]" },
      { name: "Azure Data Lake", icon: HardDrive, color: "text-[#0078D4]" },
      { name: "DAX", icon: Hash, color: "text-muted-foreground" },
      { name: "SQL Server", icon: Server, color: "text-[#CC2927]" },
      { name: "SQL Reporting", icon: Table, color: "text-muted-foreground" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    ],
  },
  {
    id: "ai-engineering",
    icon: Brain,
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
    glow: "shadow-orange-400/10",
    tech: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "Open3D", icon: Box, color: "text-orange-400" },
      { name: "Scikit-learn", icon: Cpu, color: "text-muted-foreground" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Flask", icon: Globe, color: "text-muted-foreground" },
      { name: "NumPy", icon: Hash, color: "text-blue-400" },
      { name: "Pandas", icon: Table, color: "text-muted-foreground" },
    ],
  },
];

export default function Services() {
  const { t } = useT();

  const services = serviceVisualConfig.map((cfg, i) => ({
    ...cfg,
    ...t.services.items[i],
  }));

  return (
    <div className="min-h-[100dvh] font-sans relative overflow-x-hidden">
      <div className="bg-noise" />
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            {t.services.label}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-4">
            {t.services.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
            {t.services.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Service cards */}
      <section className="py-8 px-6 max-w-6xl mx-auto relative z-10 space-y-12">
        {services.map((s) => (
          <motion.div
            key={s.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className={`rounded-2xl border ${s.border} ${s.bg} p-8 md:p-10 shadow-xl ${s.glow}`}
            data-testid={`service-section-${s.id}`}
          >
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
              {/* Left */}
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${s.border} mb-5`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <h2 className="text-2xl font-bold mb-1">{s.label}</h2>
                <p className={`text-sm font-medium ${s.color} mb-5`}>{s.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{s.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">{t.services.goodFor}</p>
                  {s.useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${s.color}`} />
                      {uc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                    {t.services.whatYouGet}
                  </p>
                  <ul className="space-y-2.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${s.color}`} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                    {t.services.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-lg border border-border text-xs font-medium"
                        data-testid={`service-tech-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                    {"techExtraItems" in s && s.techExtraItems?.map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-lg border border-border text-xs font-medium"
                        data-testid={`service-tech-extra-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">{t.services.cta.title}</h2>
          <p className="text-muted-foreground text-lg">{t.services.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 transition-all"
              data-testid="services-cta-contact"
            >
              <Mail className="w-4 h-4" />
              {t.services.cta.start}
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card hover:bg-muted font-semibold transition-all"
              data-testid="services-cta-projects"
            >
              {t.services.cta.seeWork} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono relative z-10">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
