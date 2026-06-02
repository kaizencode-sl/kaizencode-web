export const languages = {
  en: "English",
  es: "Español",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "en"

export const ui = {
  en: {
    "site.title": "Kaizencode — Software & E-Commerce Solutions",
    "nav.projects": "Our projects",
    "nav.services": "Services",
    "nav.about": "About us",
    "hero.badge": "Software & e-commerce studio",
    "hero.tagline":
      "We build e-commerce software, custom solutions, and beautiful webs — from concept to deployment.",
    "hero.carousel.prefix": "We build",
    "hero.carousel.words":
      "e-commerce software,custom solutions,beautiful webs",
    "hero.carousel.suffix": "— from concept to deployment.",
    "contact.description": "Send us an email at",
    "section.projects.label": "// our projects",
    "section.projects.title": "Projects",
    "section.services.label": "// what we do",
    "section.services.title": "Services",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Scalable platforms for selling anything — from storefront to checkout.",
    "service.ecommerce.badge": "Shopify | Custom",
    "service.custom.title": "Custom solutions",
    "service.custom.description":
      "Tailored software to automate, integrate, and grow your business.",
    "service.custom.badge": "APIs | Automation",
    "service.web.title": "Beautiful webs",
    "service.web.description":
      "Modern, performant websites that look as good as they feel.",
    "service.web.badge": "Design | Development",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Ágora Academy",
    "project.albinana": "Albiñana Pharmacy",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nworks on my machine...\neh, good enough 🚀\ndeployed`,
    "about.label": "// about us",
    "about.title": "About us",
    "about.description": "We are three developers with over a decade of combined experience building web applications, specializing in e-commerce platforms and custom solutions.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
  },
  es: {
    "site.title": "Kaizencode — Software y Soluciones de E-Commerce",
    "nav.projects": "Nuestros proyectos",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "hero.badge": "Estudio de software y e-commerce",
    "hero.tagline":
      "Creamos software de e-commerce, soluciones personalizadas y webs atractivas — del concepto al despliegue.",
    "hero.carousel.prefix": "Creamos",
    "hero.carousel.words":
      "software de e-commerce,soluciones personalizadas,webs atractivas",
    "hero.carousel.suffix": "— del concepto al despliegue.",
    "contact.description": "Envíanos un correo a",
    "section.projects.label": "// nuestros proyectos",
    "section.projects.title": "Proyectos",
    "section.services.label": "// lo que hacemos",
    "section.services.title": "Servicios",
    "service.ecommerce.title": "E-commerce",
    "service.ecommerce.description":
      "Plataformas escalables para vender de todo — desde la tienda hasta el pago.",
    "service.ecommerce.badge": "Shopify | Personalizado",
    "service.custom.title": "Soluciones personalizadas",
    "service.custom.description":
      "Software a medida para automatizar, integrar y hacer crecer tu negocio.",
    "service.custom.badge": "APIs | Automatización",
    "service.web.title": "Webs atractivas",
    "service.web.description":
      "Sitios web modernos y rápidos que se ven tan bien como se sienten.",
    "service.web.badge": "Diseño | Desarrollo",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Academia Ágora",
    "project.albinana": "Farmacia Albiñana",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nfunciona en mi máquina...\neh, suficiente 🚀\ndesplegado`,
    "about.label": "// sobre nosotros",
    "about.title": "Sobre nosotros",
    "about.description": "Somos tres desarrolladores con más de una década de experiencia combinada creando aplicaciones web, especializados en plataformas de e-commerce y soluciones personalizadas.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
