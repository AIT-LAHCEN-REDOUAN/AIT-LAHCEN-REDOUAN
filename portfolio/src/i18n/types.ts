export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    testimonials: string;
    contact: string;
    letsTalk: string;
  };
  home: {
    location: string;
    available: string;
    heroName: string;
    tagline: { web: string; de: string; bi: string; ai: string };
    heroParagraph: string;
    viewWork: string;
    letsTalk: string;
    stats: { yearExp: string; skillDomains: string; keyProjects: string; forFreelance: string };
    servicesSection: {
      label: string;
      title: string;
      subtitle: string;
      learnMore: string;
      webDesc: string;
      deDesc: string;
      biDesc: string;
      aiDesc: string;
    };
    techLabel: string;
    testimonial: { quote: string; author: string };
    cta: { title: string; desc: string; emailMe: string; browse: string };
    footer: string;
  };
  about: {
    label: string;
    title: string;
    bio: string;
    skillsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    languagesTitle: string;
    experienceEntries: Array<{ role: string; type: string; bullets: string[] }>;
    educationEntries: Array<{ degree: string }>;
    languages: string[];
    footer: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    goodFor: string;
    whatYouGet: string;
    technologies: string;
    items: Array<{
      label: string;
      subtitle: string;
      description: string;
      deliverables: string[];
      useCases: string[];
    }>;
    cta: { title: string; desc: string; start: string; seeWork: string };
    footer: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    categories: { all: string; webDev: string; dataEng: string; dataAnalysis: string; aiMl: string };
    live: string;
    projectData: Array<{
      description: string;
      highlights: string[];
      metrics: Array<{ value: string; label: string }>;
    }>;
    cta: { title: string; desc: string; letsTalk: string };
    footer: string;
  };
  contact: {
    badge: string;
    title1: string;
    title2: string;
    heroParagraph: string;
    statsLabels: { response: string; commitment: string; consultation: string };
    whyWork: string;
    valueProps: Array<{ title: string; desc: string }>;
    reachMe: string;
    contactLabels: { email: string; phone: string; location: string };
    findOnline: string;
    iCanHelp: string;
    serviceChips: string[];
    form: {
      title: string;
      desc: string;
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
    closingQuote: string;
    footer: string;
  };
}
