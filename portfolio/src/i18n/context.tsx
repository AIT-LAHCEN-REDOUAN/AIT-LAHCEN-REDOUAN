import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Translations } from "./types";
import data from "../data/portfolio.json";

export type Lang = "en" | "fr" | "ar";

type I18nField = { en: string; fr: string; ar: string };
type I18nArray = { en: string[]; fr: string[]; ar: string[] };

const s = (field: I18nField, lang: Lang): string => field[lang];
const arr = (field: I18nArray, lang: Lang): string[] => field[lang];

function buildTranslations(lang: Lang): Translations {
  const d = data;

  return {
    nav: {
      home:         s(d.nav.home, lang),
      about:        s(d.nav.about, lang),
      services:     s(d.nav.services, lang),
      projects:     s(d.nav.projects, lang),
      testimonials: s(d.nav.testimonials, lang),
      contact:      s(d.nav.contact, lang),
      letsTalk:     s(d.nav.letsTalk, lang),
    },

    home: {
      location:      s(d.personal.location, lang),
      available:     s(d.home.available, lang),
      heroName:      lang === "ar" ? d.personal.nameAr : d.personal.name,
      tagline: {
        web: s(d.home.tagline.web, lang),
        de:  s(d.home.tagline.de, lang),
        bi:  s(d.home.tagline.bi, lang),
        ai:  s(d.home.tagline.ai, lang),
      },
      heroParagraph: s(d.home.heroParagraph, lang),
      viewWork:      s(d.home.viewWork, lang),
      letsTalk:      s(d.nav.letsTalk, lang),
      stats: {
        yearExp:      s(d.home.stats.yearExp, lang),
        skillDomains: s(d.home.stats.skillDomains, lang),
        keyProjects:  s(d.home.stats.keyProjects, lang),
        forFreelance: s(d.home.stats.forFreelance, lang),
      },
      servicesSection: {
        label:    s(d.home.servicesSection.label, lang),
        title:    s(d.home.servicesSection.title, lang),
        subtitle: s(d.home.servicesSection.subtitle, lang),
        learnMore:s(d.home.servicesSection.learnMore, lang),
        webDesc:  s(d.home.servicesSection.webDesc, lang),
        deDesc:   s(d.home.servicesSection.deDesc, lang),
        biDesc:   s(d.home.servicesSection.biDesc, lang),
        aiDesc:   s(d.home.servicesSection.aiDesc, lang),
      },
      techLabel: s(d.home.techLabel, lang),
      testimonial: {
        quote:  s(d.home.testimonial.quote, lang),
        author: s(d.home.testimonial.author, lang),
      },
      cta: {
        title:   s(d.home.cta.title, lang),
        desc:    s(d.home.cta.desc, lang),
        emailMe: s(d.home.cta.emailMe, lang),
        browse:  s(d.home.cta.browse, lang),
      },
      footer: s(d.home.footer, lang),
    },

    about: {
      label:          s(d.about.label, lang),
      title:          s(d.about.title, lang),
      bio:            s(d.about.bio, lang),
      skillsTitle:    s(d.about.skillsTitle, lang),
      experienceTitle:s(d.about.experienceTitle, lang),
      educationTitle: s(d.about.educationTitle, lang),
      languagesTitle: s(d.about.languagesTitle, lang),
      experienceEntries: d.about.experienceEntries.map((entry) => ({
        role:    s(entry.role, lang),
        type:    s(entry.type, lang),
        bullets: arr(entry.bullets, lang),
      })),
      educationEntries: d.about.educationEntries.map((entry) => ({
        degree: s(entry.degree, lang),
      })),
      languages: arr(d.about.languages, lang),
      footer: "",
    },

    services: {
      label:       s(d.services.label, lang),
      title:       s(d.services.title, lang),
      subtitle:    s(d.services.subtitle, lang),
      goodFor:     s(d.services.goodFor, lang),
      whatYouGet:  s(d.services.whatYouGet, lang),
      technologies:s(d.services.technologies, lang),
      items: d.services.items.map((item) => ({
        label:       s(item.label, lang),
        subtitle:    s(item.subtitle, lang),
        description: s(item.description, lang),
        deliverables:arr(item.deliverables, lang),
        useCases:    arr(item.useCases, lang),
      })),
      cta: {
        title:   s(d.services.cta.title, lang),
        desc:    s(d.services.cta.desc, lang),
        start:   s(d.services.cta.start, lang),
        seeWork: s(d.services.cta.seeWork, lang),
      },
      footer: "",
    },

    projects: {
      label:    s(d.projects.label, lang),
      title:    s(d.projects.title, lang),
      subtitle: s(d.projects.subtitle, lang),
      categories: {
        all:          s(d.projects.categories.all, lang),
        webDev:       s(d.projects.categories.webDev, lang),
        dataEng:      s(d.projects.categories.dataEng, lang),
        dataAnalysis: s(d.projects.categories.dataAnalysis, lang),
        aiMl:         s(d.projects.categories.aiMl, lang),
      },
      live: s(d.projects.live, lang),
      projectData: d.projects.items.map((proj) => ({
        description: s(proj.description, lang),
        highlights:  [] as string[],
        metrics: proj.metrics.map((m) => ({
          value: m.value,
          label: s(m.label, lang),
        })),
      })),
      cta: {
        title:    s(d.projects.cta.title, lang),
        desc:     s(d.projects.cta.desc, lang),
        letsTalk: s(d.nav.letsTalk, lang),
      },
      footer: "",
    },

    contact: {
      badge:         s(d.contact.badge, lang),
      title1:        s(d.contact.title1, lang),
      title2:        s(d.contact.title2, lang),
      heroParagraph: s(d.contact.heroParagraph, lang),
      statsLabels: {
        response:     s(d.contact.statsLabels.response, lang),
        commitment:   s(d.contact.statsLabels.commitment, lang),
        consultation: s(d.contact.statsLabels.consultation, lang),
      },
      whyWork: s(d.contact.whyWork, lang),
      valueProps: d.contact.valueProps.map((v) => ({
        title: s(v.title, lang),
        desc:  s(v.desc, lang),
      })),
      reachMe: s(d.contact.reachMe, lang),
      contactLabels: {
        email:    s(d.contact.contactLabels.email, lang),
        phone:    s(d.contact.contactLabels.phone, lang),
        location: s(d.contact.contactLabels.location, lang),
      },
      findOnline:   s(d.contact.findOnline, lang),
      iCanHelp:     s(d.contact.iCanHelp, lang),
      serviceChips: arr(d.contact.serviceChips, lang),
      form: {
        title:              s(d.contact.form.title, lang),
        desc:               s(d.contact.form.desc, lang),
        nameLabel:          s(d.contact.form.nameLabel, lang),
        emailLabel:         s(d.contact.form.emailLabel, lang),
        subjectLabel:       s(d.contact.form.subjectLabel, lang),
        messageLabel:       s(d.contact.form.messageLabel, lang),
        namePlaceholder:    s(d.contact.form.namePlaceholder, lang),
        emailPlaceholder:   s(d.contact.form.emailPlaceholder, lang),
        subjectPlaceholder: s(d.contact.form.subjectPlaceholder, lang),
        messagePlaceholder: s(d.contact.form.messagePlaceholder, lang),
        submit:             s(d.contact.form.submit, lang),
      },
      closingQuote: s(d.contact.closingQuote, lang),
      footer: "",
    },
  };
}

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const defaultT = buildTranslations("en");
const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {}, t: defaultT });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem("portfolio-lang") as Lang) || "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  useEffect(() => {
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: buildTranslations(lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  return useContext(LangContext);
}
