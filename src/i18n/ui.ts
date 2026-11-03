export const languages = {
  en: "English",
  es: "Español",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "es"

export const ui = {
  en: {
    "site.title":
      "Web design, online stores & custom software in Spain | Kaizencode",
    "site.description":
      "We design and build websites, online stores and custom software for businesses all over Spain. Our own code, no templates, and direct contact with the developers.",
    "nav.projects": "Our projects",
    "nav.services": "Services",
    "nav.about": "About us",
    "hero.badge": "Software & e-commerce studio",
    "hero.heading":
      "Websites and online stores that bring customers to your business",
    "hero.tagline":
      "We build e-commerce solutions, custom software, and modern and beautiful webs",
    "hero.carousel.prefix": "We build",
    "hero.carousel.words":
      "e-commerce solutions,custom software,modern and beautiful webs",
    "hero.carousel.suffix": "",
    "contact.description": "Send us an email at",
    "section.projects.label": "// our projects",
    "section.projects.title": "What we have built",
    "section.services.label": "// what we do",
    "section.services.title": "How we can help",
    "service.ecommerce.title": "Online stores",
    "service.ecommerce.description":
      "Your store selling from day one: catalogue, payments and shipping, on Shopify or fully custom. We have built e-commerce for large companies and bring that experience to your business.",
    "service.ecommerce.badge": "Shopify | custom",
    "service.custom.title": "Custom software and AI",
    "service.custom.description":
      "If your team loses hours on repetitive tasks or copying data from one tool to another, we automate it with AI: from n8n workflows that connect your tools to custom agents that take work off your plate.",
    "service.custom.badge": "AI agents | n8n | APIs",
    "service.web.title": "Websites for businesses",
    "service.web.description":
      "A fast website built for you, designed to be found on Google and to turn every visit into a call, a booking or an order.",
    "service.web.badge": "Design | development",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Ágora Academy",
    "project.albinana": "Albiñana Pharmacy",
    "project.jovi": "Taberna Jovi",
    "folder.projects": "projects",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nworks on my machine...\neh, good enough 🚀\ndeployed`,
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "years experience",
    "hero3.stat.projects": "20+",
    "hero3.stat.projects.label": "projects shipped",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "developers",
    "about.label": "// about us",
    "about.title": "About us",
    "about.description":
      "We are Omar, Misha and José María, three partner developers based in Cuenca, Valencia and Málaga. We have spent over 10 years building websites, online stores and software, including e-commerce for large companies on SAP Commerce Cloud and Adobe Experience Manager. We love what we do and keep up to date, so your project is built with what works best today.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
    "footer.developed.with": "Developed with",
    "footer.developed.by": "by",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.menu.close": "Close menu",
    "nav.theme": "Toggle light and dark mode",
    "city.cuenca": "Cuenca",
    "city.valencia": "Valencia",
    "city.malaga": "Málaga",
    "city.cuenca.title": "Web design in Cuenca | Kaizencode",
    "city.cuenca.description":
      "Websites and online stores for businesses in Cuenca. Meet Omar, one of our partners, in person in the city, with the whole team working on your project.",
    "city.cuenca.heading": "Website design in Cuenca",
    "city.cuenca.intro":
      "Omar, one of the three Kaizencode partners, lives in Cuenca. If your business is in the city or anywhere in the province, you can meet in person to explain what you need, while the rest of the team works with you remotely. We know the city well: we built the website for Taberna Jovi, in the old town, and the one for Ágora, a maths academy that ranks first on Google in its sector.",
    "city.valencia.title": "Web design in Valencia | Kaizencode",
    "city.valencia.description":
      "Websites and online stores for businesses in Valencia and its metropolitan area. Meet José María, one of our partners, in person, with the whole team working on your project.",
    "city.valencia.heading": "Website design in Valencia",
    "city.valencia.intro":
      "José María, one of the three Kaizencode partners, lives in Valencia. If your business is in the city or the metropolitan area, you can meet in person to explain what you need, while the rest of the team works with you remotely. We have worked with businesses in the area such as Farmacia Ortopedia Albiñana in Bétera.",
    "city.malaga.title": "Web design in Málaga | Kaizencode",
    "city.malaga.description":
      "Websites and online stores for businesses in Málaga and the Costa del Sol, including multilingual sites for international customers. Meet Misha, one of our partners, in person.",
    "city.malaga.heading": "Website design in Málaga",
    "city.malaga.intro":
      "Misha, one of the three Kaizencode partners, lives in Málaga. If your business is in Málaga or on the Costa del Sol, you can meet in person to explain what you need, while the rest of the team works with you remotely. We build multilingual websites, especially useful for businesses that serve tourists and international customers.",
    "city.contact.title": "Your contact in {city}",
    "city.contact.text":
      "{name} is one of the three Kaizencode partners. You can meet in person in {city} or by video call, whichever you prefer.",
    "city.others.title": "We also work in",
    "city.others.label": "// locations",
    "city.others.spain": "Anywhere in Spain (remote)",
    "hero.support":
      "We build every project from scratch, with no templates, and you talk directly to the people who build it. No salespeople, no middlemen.",
    "hero.cta.primary": "Ask for a quote",
    "hero.cta.secondary": "See our work",
    "project.centauro.type": "B2B online store",
    "project.centauro.description":
      "Support, new features and a new design for the B2B online store of a veterinary products distributor, built on SAP Commerce.",
    "project.centauro.tags": "E-commerce,B2B,SAP Commerce",
    "project.agora.type": "Academy",
    "project.agora.description":
      "Website for a maths academy in Cuenca. Today it ranks first on Google when searching for maths academies in the city.",
    "project.agora.tags": "Web design,mobile & desktop,content",
    "project.albinana.type": "Pharmacy",
    "project.albinana.description":
      "Bilingual website for a pharmacy and orthopaedics store in Bétera (Valencia), optimized so customers can find it on Google.",
    "project.albinana.tags": "Multilingual,SEO,content",
    "project.jovi.type": "Cocktail bar",
    "project.jovi.description":
      "Website for a cocktail bar in the old town of Cuenca, open since 1977: menu, gallery and how to get there, in Spanish and English.",
    "project.jovi.tags": "Hospitality,multilingual,digital menu",
    "project.image.alt": "Screenshot of the website for",
    "project.visit": "Visit website",
    "projects.prev": "Previous projects",
    "projects.next": "Next projects",
    "projects.goto": "Go to project",
    "project.case": "Read the case study",
    "case.badge": "Case study",
    "case.back": "Back to projects",
    "case.facts.client": "Client",
    "case.facts.sector": "Sector",
    "case.facts.platform": "Platform",
    "case.facts.services": "Services",
    "case.facts.since": "Working together",
    "case.challenge.title": "The challenge",
    "case.work.title": "What we do",
    "case.value.title": "What it brings",
    "case.challenge.label": "// context",
    "case.work.label": "// our work",
    "case.value.label": "// results",
    "case.visit": "Visit the online store",
    "case.cta.title": "Got a platform that needs a team to look after it?",
    "case.cta.text":
      "We take over projects that are already running, even on complex technology like SAP Commerce. Tell us what you have and we'll tell you how we can help.",
    "case.cta.button": "Write to us",
    "case.cta.subject": "Support and development for my platform",
    "case.facts.location": "Location",
    "case.visit.web": "Visit the website",
    "case.results.title": "Results",
    "case.jovi.title": "Web design for a cocktail bar in Cuenca: Taberna Jovi",
    "case.jovi.description":
      "Redesign and development of the website of Taberna Jovi, a cocktail bar in Cuenca's old town since 1977: a new image, an up-to-date menu and better Google rankings.",
    "case.jovi.heading": "A new website for a historic cocktail bar in Cuenca",
    "case.jovi.intro":
      "Taberna Jovi is a British-style pub in the old town of Cuenca, open since 1977 and known for its classic cocktails. We designed and built its new website, and we've been working with them for years.",
    "case.jovi.sector": "Hospitality · cocktail bar",
    "case.jovi.services": "Design, development, maintenance",
    "case.jovi.since": "3+ years",
    "case.jovi.challenge.1":
      "Their previous website was badly outdated and hadn't been maintained in a long time. It didn't reflect what Taberna Jovi is, the menu was hard to find and out of date, and the site did little to help new customers find them on Google.",
    "case.jovi.challenge.2":
      "The goals were clear: an image that lives up to the bar, a visible and up-to-date menu and, above all, better rankings on Google.",
    "case.jovi.work.design.title": "New image",
    "case.jovi.work.design.text":
      "A design built from scratch that conveys the atmosphere of the bar and its history since 1977, and looks good on any phone.",
    "case.jovi.work.menu.title": "A menu you can actually find",
    "case.jovi.work.menu.text":
      "The menu has its own page, one tap away from anywhere on the site, and is kept up to date.",
    "case.jovi.work.seo.title": "Built for Google",
    "case.jovi.work.seo.text":
      "A fast website in Spanish and English, optimised for search engines so it's easy to find for anyone looking for a drink in Cuenca.",
    "case.jovi.stats.seo": "SEO in Google Lighthouse",
    "case.jovi.stats.practices": "Best practices in Google Lighthouse",
    "case.jovi.stats.performance": "Desktop performance in Google Lighthouse",
    "case.jovi.stats.note":
      "Measured with Google Lighthouse on tabernajovi.es in November 2026.",
    "case.jovi.value.1":
      "A website that finally lives up to the bar and its history.",
    "case.jovi.value.2":
      "A menu that's visible and up to date, in Spanish and English.",
    "case.jovi.value.3":
      "A relationship that goes on: years later, we're still looking after their website.",
    "case.centauro.title":
      "SAP Commerce support for B2B e-commerce: Centauro case study",
    "case.centauro.description":
      "SAP Commerce (Hybris) support and maintenance for Centauro's B2B e-commerce: new features, a new design and more than 2 years keeping it running.",
    "case.centauro.heading":
      "Support and evolution of a B2B e-commerce on SAP Commerce",
    "case.centauro.intro":
      "Centauro distributes veterinary products, accessories and equipment to vet clinics, and its online store is where those clinics place their orders. For more than two years we've been keeping it running, making it grow and renewing its design.",
    "case.centauro.sector": "Veterinary distribution (B2B)",
    "case.centauro.services": "Support, new features, redesign",
    "case.centauro.since": "More than 2 years",
    "case.centauro.challenge.1":
      "We didn't start from scratch. The store was already up and running on SAP Commerce (formerly SAP Hybris), an enterprise commerce platform that is as powerful as it is complex.",
    "case.centauro.challenge.2":
      "It's also a critical part of the business: if the store stops, clinics can't order. The challenge was to take over a system we hadn't built, understand it inside out and keep evolving it without ever interrupting daily operations.",
    "case.centauro.work.support.title": "Support and maintenance",
    "case.centauro.work.support.text":
      "We fix incidents, keep the platform stable and up to date, and are the team Centauro calls when something needs attention.",
    "case.centauro.work.features.title": "New features",
    "case.centauro.work.features.text":
      "We build the features the business needs as it grows, working within everything a platform like SAP Commerce involves.",
    "case.centauro.work.design.title": "New design",
    "case.centauro.work.design.text":
      "We're renewing the store's interface so that clinics find what they need and place their orders more easily.",
    "case.centauro.value.1":
      "A long-term relationship: more than two years working side by side.",
    "case.centauro.value.2":
      "A single team that knows the platform end to end, from the code to the business.",
    "case.centauro.value.3":
      "Continuous evolution without stopping the store clinics rely on every day.",
    "section.process.label": "// how we work",
    "section.testimonials.label": "// testimonials",
    "section.testimonials.title": "What our clients say",
    "about.highlight":
      "You talk directly to the person who codes your website.",
    "about.role.omar": "Software engineer · e-commerce",
    "about.role.misha": "Software engineer · e-commerce",
    "about.role.jose": "Frontend developer · websites & e-commerce",
    "about.linkedin": "LinkedIn",
    "about.linkedin.label": "LinkedIn profile of",
    "section.faq.label": "// faq",
    "faq.price.q": "How much does a website cost?",
    "faq.price.a":
      "Every project is different, so we do not work with fixed rates. We talk to you, understand what you need and prepare a detailed, personalised quote, no strings attached.",
    "faq.code.q": "Do you use WordPress or templates?",
    "faq.code.a":
      "No. We code every website from scratch, so it is faster, more secure and does not depend on plugins that need constant updates. And if you need it, you can still edit texts and images yourself.",
    "faq.maintenance.q": "What happens once the website is live?",
    "faq.maintenance.a":
      "We stay by your side. If you want, we take care of maintenance: updates, backups, content changes and support. And if you prefer to manage it yourself, we leave everything ready for you.",
    "section.contact.label": "// contact",
    "section.contact.title": "Shall we talk about your project?",
    "section.contact.text":
      "Tell us what you have in mind, even if it is not fully clear yet. We will get back to you with ideas and a first proposal, no strings attached.",
    "contact.email.subject": "Quote request",
    "service.web.link": "Web design for businesses",
    "webdesign.title":
      "Web design for businesses and shops in Spain | Kaizencode",
    "webdesign.description":
      "Web design for businesses: fast websites, custom-coded with no templates and built to rank on Google. Direct contact with the developers.",
    "webdesign.badge": "Web design",
    "webdesign.heading":
      "Website design for businesses that want more customers",
    "webdesign.intro":
      "We are three partner developers based in Cuenca, Valencia and Málaga. We code every website from scratch, with no templates, so your business shows up on Google, explains clearly what it offers and turns visits into calls, bookings or sales. And you talk directly to the people who build it.",
    "webdesign.includes.title": "What your website includes",
    "webdesign.includes.label": "// your website",
    "webdesign.includes.1.title": "Custom design",
    "webdesign.includes.1.text":
      "No templates: we design your website around your brand and your customers, starting with mobile.",
    "webdesign.includes.2.title": "SEO from day one",
    "webdesign.includes.2.text":
      "Clean structure, optimized titles and descriptions, sitemap and Google Search Console setup from day one, so your customers can find you.",
    "webdesign.includes.3.title": "Truly fast",
    "webdesign.includes.3.text":
      "Our own code, with no plugins or bloat. Your website loads fast, which improves both your Google ranking and your sales.",
    "webdesign.includes.4.title": "Maintenance and support",
    "webdesign.includes.4.text":
      "Updates, content changes and backups, so you can focus on your business.",
    "webdesign.process.title": "How we work",
    "webdesign.process.1":
      "You tell us about your business and what you want to achieve, by phone or in person.",
    "webdesign.process.2":
      "We send you a clear proposal: scope, timeline and budget.",
    "webdesign.process.3":
      "We design and build your website, and you see and review it at every step.",
    "webdesign.process.4":
      "We launch it, set it up on Google and stay by your side.",
    "webdesign.projects.title": "Some of our work",
    "webdesign.projects.agora":
      "Maths academy in Cuenca. It ranks first on Google when searching for maths academies in the city.",
    "webdesign.projects.albinana":
      "Bilingual, Google-optimized website for a pharmacy and orthopaedics store in Bétera (Valencia).",
    "webdesign.projects.jovi":
      "Cocktail bar in the old town of Cuenca since 1977, with its menu, gallery and opening hours in Spanish and English.",
    "webdesign.faq.title": "Frequently asked questions",
    "webdesign.faq.1.q": "How long does it take to build a website?",
    "webdesign.faq.1.a":
      "It depends on the size of the project. Our proposal includes specific dates, and a website for a local business is usually ready within a few weeks once we have the content.",
    "faq.remote.q": "Do you work with businesses anywhere in Spain?",
    "faq.remote.a":
      "Yes. We are based in Cuenca, Valencia and Málaga, and we work remotely with businesses all over Spain. If you are near one of these cities, we can meet in person.",
    "webdesign.faq.2.q": "Can I update the content myself?",
    "webdesign.faq.2.a":
      "Yes. If you need it, we set up an easy way to edit texts, images or news. Or we take care of it as part of maintenance.",
    "webdesign.faq.3.q": "Will my website look good on mobile?",
    "webdesign.faq.3.a":
      "Yes. We design for mobile first, since that is where most of your customers come from, and we test the website on different screen sizes before launch.",
    "webdesign.cta.title": "Shall we talk about your website?",
    "webdesign.cta.text":
      "Tell us about your business and we will reply within 24 hours with a first proposal, no strings attached.",
    "webdesign.cta.button": "Ask for a quote",
    "webdesign.cta.subject": "Website quote",
    "webdesign.back": "Back to home",
  },
  es: {
    "site.title": "Diseño web, tiendas online y software a medida | Kaizencode",
    "site.description":
      "Diseñamos y programamos webs, tiendas online y software a medida para negocios de toda España. Código propio, sin plantillas, y trato directo con los desarrolladores.",
    "nav.projects": "Nuestros proyectos",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "hero.badge": "Estudio de software y e-commerce",
    "hero.heading": "Webs y tiendas online que traen clientes a tu negocio",
    "hero.tagline":
      "Creamos soluciones e-commerce, software personalizado y webs modernas y atractivas",
    "hero.carousel.prefix": "Creamos",
    "hero.carousel.words":
      "soluciones e-commerce,software personalizado,webs modernas y atractivas",
    "hero.carousel.suffix": "",
    "contact.description": "Envíanos un correo a",
    "section.projects.label": "// nuestros proyectos",
    "section.projects.title": "Lo que hemos hecho",
    "section.services.label": "// lo que hacemos",
    "section.services.title": "En qué te ayudamos",
    "service.ecommerce.title": "Tiendas online",
    "service.ecommerce.description":
      "Tu tienda vendiendo desde el primer día: catálogo, pagos y envíos, en Shopify o a medida. Hemos programado e-commerce para grandes empresas y lo aplicamos a tu negocio.",
    "service.ecommerce.badge": "Shopify | personalizado",
    "service.custom.title": "Software a medida e IA",
    "service.custom.description":
      "Si en tu empresa se pierden horas en tareas repetitivas o pasando datos de un programa a otro, lo automatizamos con IA: desde flujos con n8n que conectan tus herramientas hasta agentes personalizados que hacen el trabajo por ti.",
    "service.custom.badge": "Agentes IA | n8n | APIs",
    "service.web.title": "Webs para negocios",
    "service.web.description":
      "Una web rápida y hecha a tu medida, pensada para que te encuentren en Google y para que cada visita acabe en una llamada, una reserva o un pedido.",
    "service.web.badge": "Diseño | desarrollo",
    "project.centauro": "Centauro e-commerce",
    "project.agora": "Academia Ágora",
    "project.albinana": "Farmacia Albiñana",
    "project.jovi": "Taberna Jovi",
    "folder.projects": "proyectos",
    "code.filename": "kaizencode.sh",
    "code.content": `./kaizencode.sh build-my-project\n\nfunciona en mi máquina...\neh, suficiente 🚀\ndesplegado`,
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "años de experiencia",
    "hero3.stat.projects": "20+",
    "hero3.stat.projects.label": "proyectos realizados",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "desarrolladores",
    "about.label": "// sobre nosotros",
    "about.title": "Sobre nosotros",
    "about.description":
      "Somos Omar, Misha y José María, tres desarrolladores y socios en Cuenca, Valencia y Málaga. Llevamos más de 10 años programando webs, tiendas online y software, también e-commerce para grandes empresas con SAP Commerce Cloud y Adobe Experience Manager. Nos encanta lo que hacemos y estamos siempre al día, así que tu proyecto se construye con lo que mejor funciona hoy.",
    "about.member.omar": "Omar",
    "about.member.misha": "Misha",
    "about.member.jose": "José María",
    "footer.copyright": "kaizencode",
    "footer.developed.with": "Desarrollado con",
    "footer.developed.by": "por",
    "nav.contact": "Contacto",
    "nav.menu": "Abrir menú",
    "nav.menu.close": "Cerrar menú",
    "nav.theme": "Cambiar entre modo claro y oscuro",
    "city.cuenca": "Cuenca",
    "city.valencia": "Valencia",
    "city.malaga": "Málaga",
    "city.cuenca.title": "Diseño web en Cuenca | Kaizencode",
    "city.cuenca.description":
      "Webs y tiendas online para negocios de Cuenca. Reúnete en persona con Omar, uno de nuestros socios, en la ciudad, con todo el equipo trabajando en tu proyecto.",
    "city.cuenca.heading": "Diseño de páginas web en Cuenca",
    "city.cuenca.intro":
      "Omar, uno de los tres socios de Kaizencode, vive en Cuenca. Si tu negocio está en la ciudad o en la provincia, podéis veros en persona para que le cuentes lo que necesitas, mientras el resto del equipo trabaja contigo en remoto. Conocemos bien la ciudad: hemos hecho la web de la Taberna Jovi, en el casco antiguo, y la de la academia de matemáticas Ágora, que aparece hoy la primera en Google en su sector.",
    "city.valencia.title": "Diseño web en Valencia | Kaizencode",
    "city.valencia.description":
      "Webs y tiendas online para negocios de Valencia y su área metropolitana. Reúnete en persona con José María, uno de nuestros socios, con todo el equipo trabajando en tu proyecto.",
    "city.valencia.heading": "Diseño de páginas web en Valencia",
    "city.valencia.intro":
      "José María, uno de los tres socios de Kaizencode, vive en Valencia. Si tu negocio está en la ciudad o en el área metropolitana, podéis veros en persona para que le cuentes lo que necesitas, mientras el resto del equipo trabaja contigo en remoto. Hemos trabajado con negocios de la zona, como la Farmacia Ortopedia Albiñana de Bétera.",
    "city.malaga.title": "Diseño web en Málaga | Kaizencode",
    "city.malaga.description":
      "Webs y tiendas online para negocios de Málaga y la Costa del Sol, también multiidioma para clientes internacionales. Reúnete en persona con Misha, uno de nuestros socios.",
    "city.malaga.heading": "Diseño de páginas web en Málaga",
    "city.malaga.intro":
      "Misha, uno de los tres socios de Kaizencode, vive en Málaga. Si tu negocio está en Málaga o en la Costa del Sol, podéis veros en persona para que le cuentes lo que necesitas, mientras el resto del equipo trabaja contigo en remoto. Hacemos webs multiidioma, muy útiles si atiendes a turistas y clientes internacionales.",
    "city.contact.title": "Tu contacto en {city}",
    "city.contact.text":
      "{name} es uno de los tres socios de Kaizencode. Podéis reuniros en persona en {city} o por videollamada, como prefieras.",
    "city.others.title": "También trabajamos en",
    "city.others.label": "// dónde estamos",
    "city.others.spain": "Toda España (en remoto)",
    "hero.support":
      "Programamos cada proyecto desde cero, sin plantillas, y hablas directamente con quien lo construye. Sin comerciales ni intermediarios.",
    "hero.cta.primary": "Pide presupuesto",
    "hero.cta.secondary": "Ver proyectos",
    "project.centauro.type": "Tienda online B2B",
    "project.centauro.description":
      "Soporte, nuevos desarrollos y nuevo diseño para la tienda online B2B de un distribuidor zoosanitario, construida sobre SAP Commerce.",
    "project.centauro.tags": "E-commerce,B2B,SAP Commerce",
    "project.agora.type": "Academia",
    "project.agora.description":
      "Web para una academia de matemáticas de Cuenca. Hoy aparece la primera en Google al buscar academias de matemáticas en la ciudad.",
    "project.agora.tags": "Diseño web,móvil y escritorio,contenido",
    "project.albinana.type": "Farmacia",
    "project.albinana.description":
      "Web en dos idiomas para una farmacia y ortopedia de Bétera (Valencia), optimizada para que sus clientes la encuentren en Google.",
    "project.albinana.tags": "Multiidioma,SEO,contenido",
    "project.jovi.type": "Coctelería",
    "project.jovi.description":
      "Web para una coctelería del casco antiguo de Cuenca abierta desde 1977: carta, galería y cómo llegar, en español e inglés.",
    "project.jovi.tags": "Hostelería,multiidioma,carta digital",
    "project.image.alt": "Captura de la web de",
    "project.visit": "Ver web",
    "projects.prev": "Proyectos anteriores",
    "projects.next": "Siguientes proyectos",
    "projects.goto": "Ir al proyecto",
    "project.case": "Ver caso de estudio",
    "case.badge": "Caso de estudio",
    "case.back": "Volver a proyectos",
    "case.facts.client": "Cliente",
    "case.facts.sector": "Sector",
    "case.facts.platform": "Plataforma",
    "case.facts.services": "Servicios",
    "case.facts.since": "Trabajando juntos",
    "case.challenge.title": "El reto",
    "case.work.title": "Qué hacemos",
    "case.value.title": "Qué aporta",
    "case.challenge.label": "// contexto",
    "case.work.label": "// nuestro trabajo",
    "case.value.label": "// resultados",
    "case.visit": "Ver la tienda online",
    "case.cta.title":
      "¿Tienes una plataforma que necesita un equipo que la cuide?",
    "case.cta.text":
      "Nos hacemos cargo de proyectos que ya están en marcha, incluso sobre tecnologías complejas como SAP Commerce. Cuéntanos qué tienes y te decimos cómo podemos ayudarte.",
    "case.cta.button": "Escríbenos",
    "case.cta.subject": "Soporte y desarrollo para mi plataforma",
    "case.facts.location": "Ubicación",
    "case.visit.web": "Ver la web",
    "case.results.title": "Resultados",
    "case.jovi.title":
      "Diseño web para coctelería en Cuenca: caso Taberna Jovi",
    "case.jovi.description":
      "Rediseño y desarrollo de la web de Taberna Jovi, coctelería del casco antiguo de Cuenca desde 1977: nueva imagen, carta siempre actualizada y mejor posicionamiento en Google.",
    "case.jovi.heading": "Nueva web para una coctelería histórica de Cuenca",
    "case.jovi.intro":
      "Taberna Jovi es un pub de estilo británico en el casco antiguo de Cuenca, abierto desde 1977 y conocido por su coctelería clásica. Diseñamos y desarrollamos su nueva web, y llevamos años trabajando con ellos.",
    "case.jovi.sector": "Hostelería · coctelería",
    "case.jovi.services": "Diseño, desarrollo, mantenimiento",
    "case.jovi.since": "+3 años",
    "case.jovi.challenge.1":
      "Su web anterior estaba muy desactualizada y llevaba tiempo sin ningún mantenimiento. No reflejaba lo que es Taberna Jovi, la carta era difícil de encontrar y no estaba al día, y la web apenas ayudaba a que nuevos clientes los encontraran en Google.",
    "case.jovi.challenge.2":
      "Los objetivos estaban claros: una imagen a la altura del local, una carta visible y actualizada y, sobre todo, mejorar su posicionamiento en Google.",
    "case.jovi.work.design.title": "Nueva imagen",
    "case.jovi.work.design.text":
      "Un diseño hecho desde cero que transmite el ambiente del local y su historia desde 1977, y que se ve bien en cualquier móvil.",
    "case.jovi.work.menu.title": "Una carta que se encuentra",
    "case.jovi.work.menu.text":
      "La carta tiene su propia página, a un toque desde cualquier parte de la web, y se mantiene al día.",
    "case.jovi.work.seo.title": "Pensada para Google",
    "case.jovi.work.seo.text":
      "Una web rápida, en español e inglés y optimizada para buscadores, para que la encuentre cualquiera que busque dónde tomar algo en Cuenca.",
    "case.jovi.stats.seo": "SEO en Google Lighthouse",
    "case.jovi.stats.practices": "Buenas prácticas en Google Lighthouse",
    "case.jovi.stats.performance":
      "Rendimiento en escritorio en Google Lighthouse",
    "case.jovi.stats.note":
      "Medido con Google Lighthouse sobre tabernajovi.es en noviembre de 2026.",
    "case.jovi.value.1":
      "Una web que por fin está a la altura del local y de su historia.",
    "case.jovi.value.2":
      "Una carta visible y actualizada, en español y en inglés.",
    "case.jovi.value.3":
      "Una relación que continúa: años después, seguimos cuidando su web.",
    "case.centauro.title":
      "Soporte SAP Commerce para e-commerce B2B: caso Centauro",
    "case.centauro.description":
      "Soporte y mantenimiento SAP Commerce (Hybris) del e-commerce B2B de Centauro: nuevos desarrollos, nuevo diseño y más de 2 años manteniéndolo en marcha.",
    "case.centauro.heading":
      "Soporte y evolución de un e-commerce B2B en SAP Commerce",
    "case.centauro.intro":
      "Centauro distribuye productos zoosanitarios, accesorios y equipamiento para clínicas veterinarias, y su tienda online es donde esas clínicas hacen sus pedidos. Desde hace más de dos años nos encargamos de mantenerla, hacerla crecer y renovar su diseño.",
    "case.centauro.sector": "Distribución veterinaria (B2B)",
    "case.centauro.services": "Soporte, nuevos desarrollos, rediseño",
    "case.centauro.since": "Más de 2 años",
    "case.centauro.challenge.1":
      "No partimos de cero. La tienda ya estaba en marcha sobre SAP Commerce (antes SAP Hybris), una plataforma de comercio empresarial tan potente como compleja.",
    "case.centauro.challenge.2":
      "Además, es una pieza crítica del negocio: si la tienda se para, las clínicas no pueden pedir. El reto era hacernos cargo de un sistema que no habíamos construido, entenderlo a fondo y seguir haciéndolo evolucionar sin interrumpir nunca la operación diaria.",
    "case.centauro.work.support.title": "Soporte y mantenimiento",
    "case.centauro.work.support.text":
      "Resolvemos incidencias, mantenemos la plataforma estable y al día, y somos el equipo al que Centauro llama cuando algo necesita atención.",
    "case.centauro.work.features.title": "Nuevos desarrollos",
    "case.centauro.work.features.text":
      "Construimos las funcionalidades que el negocio necesita a medida que crece, trabajando con todo lo que implica una plataforma como SAP Commerce.",
    "case.centauro.work.design.title": "Nuevo diseño",
    "case.centauro.work.design.text":
      "Estamos renovando la interfaz de la tienda para que las clínicas encuentren lo que buscan y hagan sus pedidos con más facilidad.",
    "case.centauro.value.1":
      "Una relación a largo plazo: más de dos años trabajando codo con codo.",
    "case.centauro.value.2":
      "Un único equipo que conoce la plataforma de punta a punta, del código al negocio.",
    "case.centauro.value.3":
      "Evolución continua sin parar la tienda de la que dependen las clínicas cada día.",
    "section.process.label": "// cómo trabajamos",
    "section.testimonials.label": "// opiniones",
    "section.testimonials.title": "Lo que dicen nuestros clientes",
    "about.highlight": "Hablas directamente con quien programa tu web.",
    "about.role.omar": "Ingeniero de software · e-commerce",
    "about.role.misha": "Ingeniero de software · e-commerce",
    "about.role.jose": "Desarrollador frontend · webs y e-commerce",
    "about.linkedin": "LinkedIn",
    "about.linkedin.label": "Perfil de LinkedIn de",
    "section.faq.label": "// preguntas frecuentes",
    "faq.price.q": "¿Cuánto cuesta una web?",
    "faq.price.a":
      "Cada proyecto es distinto, así que no trabajamos con tarifas cerradas. Hablamos contigo, entendemos lo que necesitas y te preparamos un presupuesto personalizado y detallado, sin compromiso.",
    "faq.code.q": "¿Usáis WordPress o plantillas?",
    "faq.code.a":
      "No. Programamos cada web desde cero, así que es más rápida, más segura y no depende de plugins que hay que ir actualizando. Y aun así, si lo necesitas, podrás editar los textos y las imágenes tú mismo.",
    "faq.maintenance.q": "¿Qué pasa cuando la web ya está publicada?",
    "faq.maintenance.a":
      "Seguimos a tu lado. Si quieres, nos encargamos del mantenimiento: actualizaciones, copias de seguridad, cambios de contenido y soporte. Y si prefieres gestionarla tú, te lo dejamos todo preparado.",
    "section.contact.label": "// contacto",
    "section.contact.title": "¿Hablamos de tu proyecto?",
    "section.contact.text":
      "Cuéntanos qué tienes en mente, aunque todavía no lo tengas del todo claro. Te respondemos con ideas y una primera propuesta, sin compromiso.",
    "contact.email.subject": "Solicitud de presupuesto",
    "service.web.link": "Diseño web para negocios",
    "webdesign.title": "Diseño web para negocios y comercios | Kaizencode",
    "webdesign.description":
      "Diseño web para negocios: webs rápidas, programadas a medida y sin plantillas, pensadas para aparecer en Google. Trato directo con los desarrolladores.",
    "webdesign.badge": "Diseño web",
    "webdesign.heading":
      "Diseño de páginas web para negocios que quieren más clientes",
    "webdesign.intro":
      "Somos tres socios desarrolladores en Cuenca, Valencia y Málaga. Programamos cada web desde cero, sin plantillas, para que tu negocio aparezca en Google, explique bien lo que ofrece y convierta visitas en llamadas, reservas o ventas. Y hablas directamente con quien la construye.",
    "webdesign.includes.title": "Qué incluye tu web",
    "webdesign.includes.label": "// tu web",
    "webdesign.includes.1.title": "Diseño a medida",
    "webdesign.includes.1.text":
      "Nada de plantillas: diseñamos tu web para tu marca y tus clientes, empezando por el móvil.",
    "webdesign.includes.2.title": "SEO desde el primer día",
    "webdesign.includes.2.text":
      "Estructura limpia, títulos y descripciones optimizados, sitemap y alta en Google Search Console desde el primer día, para que tus clientes te encuentren.",
    "webdesign.includes.3.title": "Rápida de verdad",
    "webdesign.includes.3.text":
      "Código propio, sin plugins ni nada que sobre. Tu web carga rápido, y eso mejora tu posición en Google y tus ventas.",
    "webdesign.includes.4.title": "Mantenimiento y soporte",
    "webdesign.includes.4.text":
      "Actualizaciones, cambios de contenido y copias de seguridad, para que tú te centres en tu negocio.",
    "webdesign.process.title": "Cómo trabajamos",
    "webdesign.process.1":
      "Nos cuentas tu negocio y qué quieres conseguir, por llamada o en persona.",
    "webdesign.process.2":
      "Te enviamos una propuesta clara: qué incluye, plazos y presupuesto.",
    "webdesign.process.3":
      "Diseñamos y programamos tu web, y la vas viendo y revisando en cada paso.",
    "webdesign.process.4":
      "La publicamos, la damos de alta en Google y seguimos a tu lado.",
    "webdesign.projects.title": "Algunos de nuestros trabajos",
    "webdesign.projects.agora":
      "Academia de matemáticas de Cuenca. Aparece la primera en Google al buscar academias de matemáticas en la ciudad.",
    "webdesign.projects.albinana":
      "Web en dos idiomas y optimizada para Google de una farmacia y ortopedia en Bétera (Valencia).",
    "webdesign.projects.jovi":
      "Coctelería del casco antiguo de Cuenca desde 1977, con su carta, galería y horarios en español e inglés.",
    "webdesign.faq.title": "Preguntas frecuentes",
    "webdesign.faq.1.q": "¿Cuánto se tarda en hacer una web?",
    "webdesign.faq.1.a":
      "Depende del tamaño del proyecto. En la propuesta te damos fechas concretas, y la web de un negocio local suele estar lista en pocas semanas desde que tenemos el contenido.",
    "faq.remote.q": "¿Trabajáis con negocios de cualquier parte de España?",
    "faq.remote.a":
      "Sí. Estamos en Cuenca, Valencia y Málaga, y trabajamos en remoto con negocios de toda España. Si estás cerca de alguna de estas ciudades, podemos reunirnos en persona.",
    "webdesign.faq.2.q": "¿Podré actualizar el contenido yo mismo?",
    "webdesign.faq.2.a":
      "Sí. Si lo necesitas, preparamos una forma sencilla de editar textos, imágenes o noticias. O nos encargamos nosotros dentro del mantenimiento.",
    "webdesign.faq.3.q": "¿Mi web se verá bien en el móvil?",
    "webdesign.faq.3.a":
      "Sí. Diseñamos primero para móvil, que es desde donde llega la mayoría de tus clientes, y probamos la web en distintos tamaños de pantalla antes de publicarla.",
    "webdesign.cta.title": "¿Hablamos de tu web?",
    "webdesign.cta.text":
      "Cuéntanos sobre tu negocio y te respondemos en menos de 24 horas con una primera propuesta, sin compromiso.",
    "webdesign.cta.button": "Pide presupuesto",
    "webdesign.cta.subject": "Presupuesto web",
    "webdesign.back": "Volver al inicio",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
