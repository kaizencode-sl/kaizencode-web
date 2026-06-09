export const languages = {
  en: "English",
  es: "Español",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "en"

export const ui = {
  en: {
    "site.title": "Kaizencode - Software & e-commerce solutions",
    "site.description":
      "Software & e-commerce studio building custom solutions, beautiful websites, and scalable e-commerce platforms.",
    "nav.projects": "Our projects",
    "nav.services": "Services",
    "nav.about": "About us",
    "hero.badge": "Software & e-commerce studio",
    "hero.tagline":
      "We build e-commerce solutions, custom software, and modern and beautiful webs",
    "hero.carousel.prefix": "We build",
    "hero.carousel.words":
      "e-commerce solutions,custom software,modern and beautiful webs",
    "hero.carousel.suffix": "",
    "contact.description": "Send us an email at",
    "section.projects.label": "// our projects",
    "section.projects.title": "Projects",
    "section.services.label": "// what we do",
    "section.services.title": "Services",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Scalable platforms for selling anything — from storefront to checkout.",
    "service.ecommerce.badge": "Shopify | custom",
    "service.custom.title": "Custom solutions",
    "service.custom.description":
      "Tailored software to automate, integrate, and grow your business.",
    "service.custom.badge": "APIs | automation",
    "service.web.title": "Beautiful webs",
    "service.web.description":
      "Modern, performant websites that look as good as they feel.",
    "service.web.badge": "Design | development",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Ágora Academy",
    "project.albinana": "Albiñana Pharmacy",
    "folder.projects": "projects",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nworks on my machine...\neh, good enough 🚀\ndeployed`,
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "years experience",
    "hero3.stat.projects": "50+",
    "hero3.stat.projects.label": "projects shipped",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "team members",
    "about.label": "// about us",
    "about.title": "About us",
    "about.description": "We are a team of three developers specialized in turning ideas into high-performance software. With over 10 years of experience, we build web applications, robust e-commerce platforms, and fully customized software solutions, creating scalable tools designed to grow your business.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
    "footer.developed.with": "Developed with",
    "footer.developed.by": "by",
  },
  es: {
    "site.title": "Kaizencode - Software y soluciones de e-commerce",
    "site.description":
      "Estudio de software y e-commerce que desarrolla soluciones personalizadas, webs atractivas y plataformas de e-commerce escalables.",
    "nav.projects": "Nuestros proyectos",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "hero.badge": "Estudio de software y e-commerce",
    "hero.tagline":
      "Creamos soluciones e-commerce, software personalizado y webs modernas y atractivas",
    "hero.carousel.prefix": "Creamos",
    "hero.carousel.words":
      "soluciones e-commerce,software personalizado,webs modernas y atractivas",
    "hero.carousel.suffix": "",
    "contact.description": "Envíanos un correo a",
    "section.projects.label": "// nuestros proyectos",
    "section.projects.title": "Proyectos",
    "section.services.label": "// lo que hacemos",
    "section.services.title": "Servicios",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Plataformas escalables para vender de todo — desde la tienda hasta el pago.",
    "service.ecommerce.badge": "Shopify | personalizado",
    "service.custom.title": "Soluciones personalizadas",
    "service.custom.description":
      "Software a medida para automatizar, integrar y hacer crecer tu negocio.",
    "service.custom.badge": "APIs | automatización",
    "service.web.title": "Webs atractivas",
    "service.web.description":
      "Sitios web modernos y rápidos que se ven tan bien como se sienten.",
    "service.web.badge": "Diseño | desarrollo",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Academia Ágora",
    "project.albinana": "Farmacia Albiñana",
    "folder.projects": "proyectos",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nfunciona en mi máquina...\neh, suficiente 🚀\ndesplegado`,
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "años de experiencia",
    "hero3.stat.projects": "50+",
    "hero3.stat.projects.label": "proyectos realizados",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "miembros del equipo",
    "about.label": "// sobre nosotros",
    "about.title": "Sobre nosotros",
    "about.description": "Somos un equipo de tres desarrolladores especializados en transformar ideas en software de alto rendimiento. Con más de 10 años de experiencia, diseñamos aplicaciones web, plataformas de e-commerce robustas y soluciones de software totalmente personalizadas, creando herramientas escalables orientadas a hacer crecer tu negocio.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
    "footer.developed.with": "Desarrollado con",
    "footer.developed.by": "por",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
