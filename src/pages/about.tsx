import { motion } from "framer-motion";
import {
  GraduationCap, Briefcase, ChevronRight, Globe, Code2, Database, BarChart2, User,
  Cloud, HardDrive, Server, Layers, Table, FileSpreadsheet, PieChart,
  Brain, Cpu, Box, Hash
} from "lucide-react";

import {
  SiLaravel, SiReact, SiNextdotjs, SiPython, SiPhp, SiJavascript,
  SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiGit, SiDocker,
  SiApachekafka, SiKubernetes, SiDatabricks, SiApachespark, SiExpress,
  SiWordpress, SiSqlite, SiJira, SiTrello, SiPrometheus, SiGrafana, SiPytorch,
  SiSpring, SiFastapi
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const skillSectionConfig = [
  {
    icon: Code2,
    color: "text-sky-400",
    bg: "bg-sky-400/5 border-sky-400/20",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Spring Boot", icon: SiSpring, color: "text-[#6DB33F]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
      { name: "Node.js / Express", icon: SiExpress, color: "text-[#339933]" },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#003B57]" },
      { name: "WordPress", icon: SiWordpress, color: "text-[#21759B]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Jira", icon: SiJira, color: "text-[#0052CC]" },
      { name: "Trello", icon: SiTrello, color: "text-[#0052CC]" },
    ],
  },
  {
    icon: Database,
    color: "text-primary",
    bg: "bg-primary/5 border-primary/20",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PySpark", icon: SiApachespark, color: "text-[#E25A1C]" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "text-foreground" },
      { name: "Databricks", icon: SiDatabricks, color: "text-[#FF3621]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ],
    extraSkills: [
      { name: "Azure Data Factory", icon: Cloud, color: "text-[#0078D4]" },
      { name: "Azure Data Lake", icon: HardDrive, color: "text-[#0078D4]" },
      { name: "Synapse Analytics", icon: BarChart2, color: "text-[#0078D4]" },
      { name: "Debezium", icon: DebeziumIcon, color: "text-orange-400" },
      { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
      { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" },
      { name: "SQL Server", icon: Server, color: "text-[#CC2927]" },
    ],
  },
  {
    icon: BarChart2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/5 border-emerald-400/20",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    ],
    extraSkills: [
      { name: "Power BI", icon: PieChart, color: "text-[#F2C811]" },
      { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-[#217346]" },
      { name: "SQL Reporting", icon: Table, color: "text-muted-foreground" },
      { name: "Synapse Analytics", icon: BarChart2, color: "text-[#0078D4]" },
      { name: "Azure Data Lake", icon: HardDrive, color: "text-[#0078D4]" },
      { name: "ETL", icon: Layers, color: "text-muted-foreground" },
    ],
  },
  {
    icon: Brain,
    color: "text-orange-400",
    bg: "bg-orange-400/5 border-orange-400/20",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "PyTorch", icon: SiPytorch, color: "text-[#EE4C2C]" },
      { name: "Scikit-learn", icon: Cpu, color: "text-muted-foreground" },
      { name: "Open3D", icon: Box, color: "text-orange-400" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    ],
    extraSkills: [
      { name: "PointNet", icon: Brain, color: "text-orange-300" },
      { name: "DGCNN", icon: Brain, color: "text-orange-300" },
      { name: "NumPy", icon: Hash, color: "text-blue-400" },
      { name: "Deep Learning", icon: Brain, color: "text-orange-400" },
      { name: "Model Compression", icon: Cpu, color: "text-muted-foreground" },
      { name: "Flask", icon: Layers, color: "text-muted-foreground" },
    ],
  },
];

const experienceCompanies = ["DEVTI TECHNOLOGY LTD"];
const experienceDates = ["May 2024 – Dec 2024"];
const experienceLogos = ["/devti-logo.png"];

const educationConfig = [
  { school: "Abdelmalek Essaâdi University (ENS Tetouan)", date: "Nov 2024 – Present", highlight: true },
  { school: "Abdelmalek Essaâdi University", date: "Oct 2023 – Jul 2024", highlight: false },
  { school: "Specialized Institute Of Applied Technology (ISMONTIC Tanger)", date: "Sep 2021 – Jul 2023", highlight: false },
];

export default function About() {
  const { t } = useT();

  const skillLabels = [
    t.services.items[0].label,
    t.services.items[1].label,
    t.services.items[2].label,
    t.services.items[3].label,
  ];

  return (
    <div className="min-h-[100dvh] font-sans relative overflow-x-hidden">
      <div className="bg-noise" />
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            {t.about.label}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-6">
            {t.about.title}
          </motion.h1>
          <motion.div variants={fadeInUp} className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card">
            <User className="w-8 h-8 text-primary shrink-0 mt-0.5" />
            <p className="text-muted-foreground leading-relaxed">{t.about.bio}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-card border-y border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold">{t.about.skillsTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {skillSectionConfig.map((section, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className={`rounded-2xl p-6 border ${section.bg}`}
                data-testid={`skill-section-${skillLabels[i].toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <section.icon className={`w-5 h-5 ${section.color}`} />
                  <h3 className={`font-semibold text-sm ${section.color}`}>{skillLabels[i]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <Badge
                        variant="secondary"
                        className="px-2.5 py-1 flex items-center gap-1.5 text-xs font-medium"
                        data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        <skill.icon className={`w-3.5 h-3.5 ${skill.color}`} />
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                  {"extraSkills" in section && section.extraSkills?.map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <Badge
                        variant="secondary"
                        className="px-2.5 py-1 flex items-center gap-1.5 text-xs font-medium"
                        data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        <skill.icon className={`w-3.5 h-3.5 ${skill.color}`} />
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            {t.about.experienceTitle}
          </h2>
        </motion.div>
        <div className="space-y-6">
          {t.about.experienceEntries.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              data-testid={`experience-card-${exp.role.toLowerCase().replace(/\s/g, "-").slice(0, 20)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div className="flex items-start gap-3">
                  {experienceLogos[i] && (
                    <div className="shrink-0 w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center p-1.5 mt-0.5">
                      <img src={experienceLogos[i]} alt={experienceCompanies[i]} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">{experienceCompanies[i]}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{exp.type}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1.5 rounded-lg whitespace-nowrap self-start md:self-center">
                  {experienceDates[i]}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 shrink-0 text-primary/50 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 bg-card border-t border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              {t.about.educationTitle}
            </h2>
          </motion.div>
          <div className="grid gap-4">
            {t.about.educationEntries.map((edu, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`p-5 rounded-xl border flex flex-col md:flex-row justify-between gap-4 items-start md:items-center transition-colors ${
                  educationConfig[i].highlight ? "border-primary/40 bg-primary/5" : "border-border bg-background"
                }`}
                data-testid={`education-card-${edu.degree.toLowerCase().replace(/\s/g, "-").slice(0, 20)}`}
              >
                <div>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{educationConfig[i].school}</p>
                </div>
                <Badge variant={educationConfig[i].highlight ? "default" : "secondary"} className="whitespace-nowrap font-mono text-xs shrink-0">
                  {educationConfig[i].date}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-12 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">{t.about.languagesTitle}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {t.about.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium"
                data-testid={`language-badge-${lang.toLowerCase()}`}
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground font-mono relative z-10">
        <p>© {new Date().getFullYear()} AIT-LAHCEN REDOUAN</p>
      </footer>
    </div>
  );
}
