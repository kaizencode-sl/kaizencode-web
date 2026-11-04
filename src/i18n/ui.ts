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
    "section.projects.title": "What we have built",
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
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "years experience",
    "hero3.stat.projects": "20+",
    "hero3.stat.projects.label": "projects shipped",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "developers",
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
    "nav.home": "Kaizencode, home",
    "nav.menu": "Open menu",
    "nav.menu.close": "Close menu",
    "nav.theme": "Toggle light and dark mode",
    "a11y.skip": "Skip to content",
    "a11y.top": "Back to top",
    "a11y.newTab": "(opens in a new tab)",
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
    "case.visit": "Visit the online store",
    "case.cta.title": "Got a platform that needs a team to look after it?",
    "case.cta.text":
      "We take over projects that are already running, even on complex technology like SAP Commerce. Tell us what you have and we’ll tell you how we can help.",
    "case.cta.button": "Write to us",
    "case.cta.subject": "Support and development for my platform",
    "case.facts.location": "Location",
    "case.visit.web": "Visit the website",
    "case.results.title": "Results",
    "case.jovi.title": "Web design for a cocktail bar in Cuenca: Taberna Jovi",
    "case.jovi.description":
      "Redesign and development of the website of Taberna Jovi, a cocktail bar in Cuenca’s old town since 1977: a new image, an up-to-date menu and better Google rankings.",
    "case.jovi.heading": "A new website for a historic cocktail bar in Cuenca",
    "case.jovi.intro":
      "Taberna Jovi is a British-style pub in the old town of Cuenca, open since 1977 and known for its classic cocktails. We designed and built its new website, and we’ve been working with them for years.",
    "case.jovi.sector": "Hospitality · cocktail bar",
    "case.jovi.services": "Design, development, maintenance",
    "case.jovi.since": "3+ years",
    "case.jovi.challenge.1":
      "Their previous website was badly outdated and hadn’t been maintained in a long time. It didn’t reflect what Taberna Jovi is, the menu was hard to find and out of date, and the site did little to help new customers find them on Google.",
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
      "A fast website in Spanish and English, optimised for search engines so it’s easy to find for anyone looking for a drink in Cuenca.",
    "case.jovi.stats.seo": "SEO in Google Lighthouse",
    "case.jovi.stats.practices": "Best practices in Google Lighthouse",
    "case.jovi.stats.performance": "Desktop performance in Google Lighthouse",
    "case.jovi.stats.note":
      "Measured with Google Lighthouse on tabernajovi.es in November 2026.",
    "case.jovi.value.1":
      "A website that finally lives up to the bar and its history.",
    "case.jovi.value.2":
      "A menu that’s visible and up to date, in Spanish and English.",
    "case.jovi.value.3":
      "A relationship that goes on: years later, we’re still looking after their website.",
    "case.agora.title":
      "AI-generated study materials for an academy: Ágora Academy",
    "case.agora.description":
      "Website with online resources and an AI workflow for Ágora Academy in Cuenca: notes, exercises and exams are generated automatically, on the website and as PDFs.",
    "case.agora.heading":
      "Notes, exercises and exams that write themselves",
    "case.agora.intro":
      "For Ágora Academy, a maths academy in Cuenca, we built a website with online resources for its students and an automated process that creates the content: the academy describes what it needs and for which level, and the materials appear on the website and as PDFs.",
    "case.agora.sector": "Education · tutoring",
    "case.agora.services": "Web, AI automation",
    "case.agora.since": "1+ year",
    "case.agora.challenge.1":
      "Preparing notes, exercise sheets and exams for every level takes hours that teachers would rather spend in class. And once written, each document had to be laid out, exported and uploaded by hand.",
    "case.agora.challenge.2":
      "The goal was for the academy to offer a complete, always up-to-date resource library to its students without turning teachers into editors.",
    "case.agora.work.describe.title": "Describe it, and it’s done",
    "case.agora.work.describe.text":
      "The academy only says what it needs and for which level, for example “exercises on quadratic equations for 3rd of ESO”, and AI writes the notes, exercises or exam.",
    "case.agora.work.publish.title": "On the website and as a PDF",
    "case.agora.work.publish.text":
      "Each piece of content is published automatically on the website, organised by level and subject, and turned into a print-ready PDF with the academy’s design.",
    "case.agora.work.seo.title": "Found on Google",
    "case.agora.work.seo.text":
      "A fast website designed for mobile and desktop, with content that keeps growing, which helps it rank first when searching for maths academies in Cuenca.",
    "case.agora.value.1":
      "Teachers create a full set of materials in minutes instead of hours.",
    "case.agora.value.2":
      "Students have notes, exercises and exams for their level, online and to print.",
    "case.agora.value.3":
      "The academy ranks first on Google when searching for maths academies in Cuenca.",
    "case.agora.cta.title": "Want to automate your content?",
    "case.agora.cta.text":
      "Tell us which materials take up your time and we’ll design a process that creates them for you.",
    "case.agora.cta.subject": "Automating my content",
    "case.albinana.title":
      "n8n automation for a pharmacy website: Farmacia Albiñana",
    "case.albinana.description":
      "Website and n8n automation for Farmacia Albiñana in Bétera (Valencia): the pharmacy publishes blog posts and offers by sending a Telegram message or an email.",
    "case.albinana.heading":
      "A website that updates itself with a Telegram message or an email",
    "case.albinana.intro":
      "For Farmacia Ortopedia Albiñana, in Bétera (Valencia), we built a bilingual website and an n8n automation so the team can publish and edit content without touching an admin panel.",
    "case.albinana.sector": "Pharmacy · orthopaedics",
    "case.albinana.services": "Web, n8n automation",
    "case.albinana.since": "1+ year",
    "case.albinana.challenge.1":
      "Behind the counter there’s no time to learn a content manager. Every new blog post or offer meant writing to someone, waiting, and often the content never made it to the website.",
    "case.albinana.challenge.2":
      "The goal was for the pharmacy to keep its website alive on its own, using tools the team already uses every day: Telegram and email.",
    "case.albinana.work.messages.title": "Publish with a message",
    "case.albinana.work.messages.text":
      "The team sends the text and photos of a blog post or an offer through a Telegram chat or by email, just as they would to a colleague.",
    "case.albinana.work.layout.title": "Automatic layout",
    "case.albinana.work.layout.text":
      "An n8n workflow receives the message, organises the content, places the images and publishes a page that matches the rest of the website.",
    "case.albinana.work.edit.title": "Edits on the go",
    "case.albinana.work.edit.text":
      "Changing a price, fixing a typo or removing an expired offer is another message, with no admin panel and no waiting.",
    "case.albinana.value.1":
      "The pharmacy publishes blog posts and offers itself, in minutes, from its phone.",
    "case.albinana.value.2":
      "Content stays up to date, which helps customers find the pharmacy on Google.",
    "case.albinana.value.3":
      "No new tools to learn: the website is managed from Telegram and email.",
    "case.albinana.cta.title": "Want your website to update itself?",
    "case.albinana.cta.text":
      "Tell us how you work today and we’ll automate the tasks that take up your time.",
    "case.albinana.cta.subject": "Automating my website",
    "case.centauro.title":
      "SAP Commerce support for B2B e-commerce: Centauro case study",
    "case.centauro.description":
      "SAP Commerce (Hybris) support and maintenance for Centauro’s B2B e-commerce: new features, a new design and more than 2 years keeping it running.",
    "case.centauro.heading":
      "Support and evolution of a B2B e-commerce on SAP Commerce",
    "case.centauro.intro":
      "Centauro distributes veterinary products, accessories and equipment to vet clinics, and its online store is where those clinics place their orders. For more than two years we’ve been keeping it running, making it grow and renewing its design.",
    "case.centauro.sector": "Veterinary distribution (B2B)",
    "case.centauro.services": "Support, new features, redesign",
    "case.centauro.since": "2+ years",
    "case.centauro.challenge.1":
      "We didn’t start from scratch. The store was already up and running on SAP Commerce (formerly SAP Hybris), an enterprise commerce platform that is as powerful as it is complex.",
    "case.centauro.challenge.2":
      "It’s also a critical part of the business: if the store stops, clinics can’t order. The challenge was to take over a system we hadn’t built, understand it inside out and keep evolving it without ever interrupting daily operations.",
    "case.centauro.work.support.title": "Support and maintenance",
    "case.centauro.work.support.text":
      "We fix incidents, keep the platform stable and up to date, and are the team Centauro calls when something needs attention.",
    "case.centauro.work.features.title": "New features",
    "case.centauro.work.features.text":
      "We build the features the business needs as it grows, working within everything a platform like SAP Commerce involves.",
    "case.centauro.work.design.title": "New design",
    "case.centauro.work.design.text":
      "We’re renewing the store’s interface so that clinics find what they need and place their orders more easily.",
    "case.centauro.value.1":
      "A long-term relationship: more than two years working side by side.",
    "case.centauro.value.2":
      "A single team that knows the platform end to end, from the code to the business.",
    "case.centauro.value.3":
      "Continuous evolution without stopping the store clinics rely on every day.",
    "section.testimonials.title": "What our clients say",
    "about.highlight":
      "You talk directly to the person who codes your website.",
    "about.role.omar": "Software engineer · e-commerce",
    "about.role.misha": "Software engineer · e-commerce",
    "about.role.jose": "Frontend developer · websites & e-commerce",
    "about.linkedin": "LinkedIn",
    "about.linkedin.label": "LinkedIn profile of",
    "faq.price.q": "How much does a website cost?",
    "faq.price.a":
      "Every project is different, so we do not work with fixed rates. We talk to you, understand what you need and prepare a detailed, personalised quote, no strings attached.",
    "faq.code.q": "Do you use WordPress or templates?",
    "faq.code.a":
      "No. We code every website from scratch, so it is faster, more secure and does not depend on plugins that need constant updates. And if you need it, you can still edit texts and images yourself.",
    "faq.maintenance.q": "What happens once the website is live?",
    "faq.maintenance.a":
      "We stay by your side. If you want, we take care of maintenance: updates, backups, content changes and support. And if you prefer to manage it yourself, we leave everything ready for you.",
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
    "service.custom.link": "Process automation with AI",
    "case.automation.link": "How we automate processes with AI",
    "service.mobile.title": "Mobile apps",
    "service.mobile.description":
      "Custom apps that put your business in your pocket: clients, bookings, payments or whatever you need, with Face ID, widgets and the same data as your website.",
    "service.mobile.badge": "iOS | SwiftUI | Supabase",
    "service.mobile.link": "See the app we built for Ágora",
    "project.appAgora": "Ágora management app",
    "project.appAgora.type": "iPhone app",
    "project.appAgora.description":
      "Native iPhone app for Ágora Academy: students, timetable, monthly fees and accounting, from the phone and between classes.",
    "project.appAgora.tags": "iOS,SwiftUI,Supabase",
    "project.appAgora.image.alt": "Screens of the Ágora management app",
    "case.appAgora.title": "Custom iOS app to run an academy: Ágora",
    "case.appAgora.description":
      "Native iPhone app built for Ágora Academy in Cuenca: students, timetable, monthly fees and accounting, with Face ID and home screen widgets.",
    "case.appAgora.heading": "The whole academy in your pocket",
    "case.appAgora.intro":
      "For Ágora Academy, in Cuenca, we built a native iPhone app that brings together students, timetable, payments and accounting. “Who’s coming at 19:00 today?” and “who still owes this month?” are answered in seconds, from anywhere.",
    "case.appAgora.sector": "Education · tutoring",
    "case.appAgora.services": "iOS app, web dashboard",
    "case.appAgora.since": "1+ year",
    "case.appAgora.challenge.1":
      "The academy ran on spreadsheets and memory: who comes each day, who has paid this month, which bills are due. Between classes there’s no time to open a laptop.",
    "case.appAgora.challenge.2":
      "It needed a tool built around this academy’s own rules (one-hour slots, fees that follow weekly hours, one contact per family) that works just as well from the phone.",
    "case.appAgora.work.today.title": "Today at a glance",
    "case.appAgora.work.today.text":
      "The home screen shows who’s coming today by time slot, pending payments that are marked as paid with one tap, and the month’s balance.",
    "case.appAgora.work.money.title": "Fees and accounting",
    "case.appAgora.work.money.text":
      "Fees are calculated from each student’s weekly hours. Income and expenses are tracked month by month, with real and expected balance.",
    "case.appAgora.work.native.title": "Native and secure",
    "case.appAgora.work.native.text":
      "Built in SwiftUI following Apple’s guidelines, with Face ID lock, home screen widgets and the same data as the web dashboard.",
    "case.screens.title": "Inside the app",
    "case.screens.note": "Screenshots and video with test data.",
    "case.appAgora.screens.video": "Video browsing the app’s tabs",
    "case.appAgora.screens.students":
      "Students list with paid and pending badges",
    "case.appAgora.screens.student":
      "Student form with school, course and contact",
    "case.appAgora.screens.accounting":
      "Accounting in dark mode, with monthly real and expected balance",
    "case.appAgora.value.1":
      "Answering “who’s coming today?” or “who owes this month?” takes seconds, from anywhere.",
    "case.appAgora.value.2":
      "Fees and pending payments are calculated automatically: fewer mistakes, nothing to remember.",
    "case.appAgora.value.3":
      "Students’ data stays protected behind Face ID and private access.",
    "case.appAgora.cta.title": "Need an app for your business?",
    "case.appAgora.cta.text":
      "Tell us how you work today and we’ll propose an app built around it.",
    "case.appAgora.cta.subject": "Custom mobile app",
    "demo.title": "Try it yourself",
    "demo.text":
      "This is the Ágora app running right here, with test data. Tap around: nothing is saved.",
    "demo.hint.1": "Mark a payment on Home and watch the balance update.",
    "demo.hint.2": "Switch days in Schedule to see who comes at each hour.",
    "demo.hint.3": "Filter students and check each month’s accounts.",
    "demo.cta.text": "Can you picture your business like this?",
    "demo.cta.button": "Tell us about your app",
    "demo.app.label": "Interactive demo of the Ágora app",
    "demo.live": "Live demo · tap it",
    "demo.tap": "Tap to try it",
    "demo.caption":
      "This isn’t a screenshot: it’s the app running in your browser.",
    "demo.app.tab.home": "Home",
    "demo.app.tab.schedule": "Schedule",
    "demo.app.tab.students": "Students",
    "demo.app.tab.accounting": "Accounts",
    "demo.app.days": "Monday,Tuesday,Wednesday,Thursday",
    "demo.app.dayLetters": "M,T,W,T",
    "demo.app.months": "September,October,November,December",
    "demo.app.numbers": "One,Two,Three,Four,Five,Six,Seven,Eight,Nine",
    "demo.app.student": "Student",
    "demo.app.studentOne": "student",
    "demo.app.studentMany": "students",
    "demo.app.today": "Today",
    "demo.app.nobody": "No one at this time",
    "demo.app.pending": "Pending payments",
    "demo.app.toCollect": "to collect",
    "demo.app.allPaid": "Everyone has paid this month.",
    "demo.app.markPaid": "Mark as paid",
    "demo.app.paid": "Paid",
    "demo.app.pendingOne": "Pending",
    "demo.app.undo": "Undo",
    "demo.app.balance": "Actual balance",
    "demo.app.forecast": "Expected balance",
    "demo.app.income": "Income",
    "demo.app.expenses": "Expenses",
    "demo.app.fees": "Monthly fees",
    "demo.app.automatic": "Automatic",
    "demo.app.of": "of",
    "demo.app.expected": "expected",
    "demo.app.expenseNames": "Rent,Electricity,Supplies",
    "demo.app.monthly": "Monthly",
    "demo.app.once": "This month only",
    "demo.app.addExpense": "Add expense",
    "demo.app.filters": "Active,Inactive,All",
    "demo.app.activeStudents": "Active students",
    "demo.app.pendingMonth": "Pending this month",
    "automation.title": "Process automation with AI and n8n | Kaizencode",
    "automation.description":
      "We automate the repetitive tasks in your business with n8n and AI agents that read, decide and do the work, and only publish when you approve.",
    "automation.badge": "Automation and AI",
    "automation.heading": "Let the repetitive work get done on its own",
    "automation.intro":
      "We connect the tools you already use with n8n and add AI agents that read, decide and do the work. You keep the final say: nothing important happens without your approval.",
    "automation.includes.title": "How we automate your processes",
    "automation.includes.1.title": "We find what eats your time",
    "automation.includes.1.text":
      "We look at how you work today and spot what’s repeated every day: copying data, answering the same emails, updating your website.",
    "automation.includes.2.title": "We connect your tools",
    "automation.includes.2.text":
      "With n8n we connect email, Telegram, spreadsheets, your CRM or your website, so information flows on its own from one to another.",
    "automation.includes.3.title": "AI agents that understand",
    "automation.includes.3.text":
      "An AI agent reads messages and documents the way a person would, understands what’s being asked and decides what to do.",
    "automation.includes.4.title": "You approve before anything happens",
    "automation.includes.4.text":
      "Before something important goes live, you see it and approve it. Automation saves you time without taking away control.",
    "automation.process.1":
      "We talk about your processes and choose the one that costs you the most time.",
    "automation.process.2":
      "We send you a clear proposal: what we automate, timeline and budget.",
    "automation.process.3":
      "We build the workflow and test it with your real cases.",
    "automation.process.4":
      "We launch it and adjust it as your business changes.",
    "automation.case.title": "A real case: a website that updates itself",
    "automation.case.intro":
      "For Farmacia Albiñana, in Bétera (Valencia), we built an n8n workflow so the pharmacy publishes blog posts and offers by sending an email or a Telegram message. This is how it works:",
    "automation.flow.label": "Animated diagram of the n8n workflow",
    "automation.flow.example": "Live example: the pharmacy sends an offer",
    "automation.flow.pause": "Pause animation",
    "automation.flow.play": "Play animation",
    "automation.flow.step.1": "Message",
    "automation.flow.step.2": "AI agent",
    "automation.flow.step.3": "Preview",
    "automation.flow.step.4": "Your approval",
    "automation.flow.step.5": "Live",
    "automation.flow.loop": "Asks for changes",
    "automation.flow.hint": "Tap a step to jump to it",
    "automation.flow.scene.1":
      "The pharmacy sends the offer by Telegram or email, as it would to a colleague.",
    "automation.flow.scene.2":
      "An AI agent reads it and decides what it is and where it goes on the website.",
    "automation.flow.scene.3":
      "It builds the page and shows it on a private website, only for the client.",
    "automation.flow.scene.4":
      "The client decides: approve it, or ask for changes with another message.",
    "automation.flow.scene.5":
      "Once approved, it goes live on the real website. No admin panel involved.",
    "automation.flow.mock.message": "New offer: sunscreen 2 for 1",
    "automation.flow.mock.channels": "Telegram or email",
    "automation.flow.mock.tag.1": "It’s an offer",
    "automation.flow.mock.tag.2": "Offers page",
    "automation.flow.mock.tag.3": "2 photos",
    "automation.flow.mock.private": "Private preview",
    "automation.flow.mock.product": "Sunscreen 2 for 1",
    "automation.flow.mock.price.old": "€12.95",
    "automation.flow.mock.price": "€9.95",
    "automation.flow.mock.change": "Ask for changes",
    "automation.flow.mock.approve": "Approve",
    "automation.flow.mock.reply": "Make the price €9.95",
    "automation.flow.mock.live": "Live",
    "automation.case.link": "See the full case study",
    "automation.faq.1.q": "What is n8n?",
    "automation.faq.1.a":
      "An open-source automation tool that connects apps and services through workflows. It can run on your own servers, so your data stays under your control.",
    "automation.faq.2.q": "Do I need technical knowledge to use it?",
    "automation.faq.2.a":
      "No. We design the automations around the tools you already use, like email or Telegram, so you don’t have to learn anything new.",
    "automation.faq.3.q": "What if the AI makes a mistake?",
    "automation.faq.3.a":
      "For anything that matters, the workflow asks for your approval before acting, as in the pharmacy case. You always see the result before it’s published.",
    "automation.cta.title": "What would you like to automate?",
    "automation.cta.text":
      "Tell us which task takes up your time and we’ll explain how we’d automate it, no strings attached.",
    "automation.cta.subject": "Automating a process",
    "ecommerce.title": "Shopify store development | Kaizencode",
    "ecommerce.description":
      "We build and customise Shopify stores: setup, custom themes, apps and integrations, and migration from your current platform. Backed by enterprise e-commerce experience.",
    "ecommerce.badge": "Online stores · Shopify",
    "ecommerce.heading": "Your Shopify store, built by people who know e-commerce",
    "ecommerce.intro":
      "We set up, design and develop Shopify stores that sell from day one. We bring the experience of keeping a large company’s e-commerce running, scaled to the size of your business.",
    "ecommerce.includes.title": "What we do on Shopify",
    "ecommerce.includes.1.title": "Your store, ready to sell",
    "ecommerce.includes.1.text":
      "We set up Shopify end to end: catalogue, payments, shipping, taxes and legal pages, so you can start selling without fighting the admin panel.",
    "ecommerce.includes.2.title": "A custom theme, not a template",
    "ecommerce.includes.2.text":
      "We design and code your theme in Liquid so the store looks like your brand, loads fast and makes buying easy on mobile.",
    "ecommerce.includes.3.title": "Apps and integrations",
    "ecommerce.includes.3.text":
      "We connect Shopify to your ERP, invoicing, stock or marketing tools, and build custom apps when an off-the-shelf one isn’t enough.",
    "ecommerce.includes.4.title": "Migration and growth",
    "ecommerce.includes.4.text":
      "We move your store from WooCommerce, PrestaShop or another platform without losing products, customers or rankings, and keep improving it afterwards.",
    "ecommerce.case.title": "Our experience: Centauro’s B2B e-commerce",
    "ecommerce.case.intro":
      "For more than two years we’ve been running and evolving Centauro’s B2B store, where vet clinics place their orders every day. It runs on SAP Commerce, an enterprise platform where a stop means lost sales.",
    "ecommerce.case.shopify":
      "Centauro isn’t on Shopify, but what we learn there goes into building your Shopify store: large catalogues, orders that can’t fail and integrations with the company’s systems.",
    "ecommerce.process.1":
      "We talk about your products, your customers and how you sell today.",
    "ecommerce.process.2":
      "We propose the setup, design and integrations, with a closed budget.",
    "ecommerce.process.3":
      "We build the store and you review it on a private preview before launch.",
    "ecommerce.process.4":
      "We launch, train you to manage it and stay on hand for whatever comes next.",
    "ecommerce.faq.1.q": "Why Shopify?",
    "ecommerce.faq.1.a":
      "Shopify takes care of hosting, security and payments, so you can focus on selling. It scales from your first orders to thousands a day, and you manage it from an easy panel.",
    "ecommerce.faq.2.q": "Can you migrate my current store to Shopify?",
    "ecommerce.faq.2.a":
      "Yes. We move products, customers and orders, and set up redirects so you don’t lose your Google rankings.",
    "ecommerce.faq.3.q": "What if I need something Shopify doesn’t do?",
    "ecommerce.faq.3.a":
      "We develop it: a custom app, an integration with your systems or a fully custom store when Shopify isn’t the right fit.",
    "ecommerce.faq.4.q": "Will I be able to manage the store myself?",
    "ecommerce.faq.4.a":
      "Yes. You add products, change prices and handle orders from Shopify’s panel, and we train you before launch.",
    "ecommerce.cta.title": "Shall we build your Shopify store?",
    "ecommerce.cta.text":
      "Tell us what you sell and how you sell it today, and we’ll suggest the best way to take it online, no strings attached.",
    "ecommerce.cta.subject": "Shopify store",
    "service.ecommerce.link": "Shopify store development",
    "case.ecommerce.link": "How we build online stores",
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
    "section.projects.title": "Lo que hemos hecho",
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
    "hero3.stat.experience": "10+",
    "hero3.stat.experience.label": "años de experiencia",
    "hero3.stat.projects": "20+",
    "hero3.stat.projects.label": "proyectos realizados",
    "hero3.stat.members": "3",
    "hero3.stat.members.label": "desarrolladores",
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
    "nav.home": "Kaizencode, inicio",
    "nav.menu": "Abrir menú",
    "nav.menu.close": "Cerrar menú",
    "nav.theme": "Cambiar entre modo claro y oscuro",
    "a11y.skip": "Saltar al contenido",
    "a11y.top": "Volver arriba",
    "a11y.newTab": "(se abre en una pestaña nueva)",
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
    "case.agora.title":
      "Material didáctico generado con IA para una academia: Academia Ágora",
    "case.agora.description":
      "Web con recursos online y un proceso con IA para la Academia Ágora de Cuenca: apuntes, ejercicios y exámenes se generan automáticamente, en la web y en PDF.",
    "case.agora.heading":
      "Apuntes, ejercicios y exámenes que se escriben solos",
    "case.agora.intro":
      "Para la Academia Ágora, una academia de matemáticas de Cuenca, creamos una web con recursos online para sus alumnos y un proceso automatizado que genera el contenido: la academia describe qué necesita y para qué nivel, y el material aparece en la web y en PDF.",
    "case.agora.sector": "Educación · clases de apoyo",
    "case.agora.services": "Web, automatización con IA",
    "case.agora.since": "+1 año",
    "case.agora.challenge.1":
      "Preparar apuntes, hojas de ejercicios y exámenes para cada nivel lleva horas que los profesores prefieren dedicar a clase. Y, una vez escrito, cada documento había que maquetarlo, exportarlo y subirlo a mano.",
    "case.agora.challenge.2":
      "El objetivo era que la academia ofreciera a sus alumnos una biblioteca de recursos completa y siempre al día, sin convertir a los profesores en editores.",
    "case.agora.work.describe.title": "Lo describes y está hecho",
    "case.agora.work.describe.text":
      "La academia solo indica qué necesita y para qué nivel, por ejemplo «ejercicios de ecuaciones de segundo grado para 3.º de ESO», y la IA redacta los apuntes, los ejercicios o el examen.",
    "case.agora.work.publish.title": "En la web y en PDF",
    "case.agora.work.publish.text":
      "Cada contenido se publica automáticamente en la web, ordenado por nivel y materia, y se convierte en un PDF listo para imprimir con el diseño de la academia.",
    "case.agora.work.seo.title": "Visible en Google",
    "case.agora.work.seo.text":
      "Una web rápida, pensada para móvil y escritorio, con contenido que no deja de crecer, lo que la ayuda a aparecer la primera al buscar academias de matemáticas en Cuenca.",
    "case.agora.value.1":
      "Los profesores crean un bloque completo de material en minutos en lugar de horas.",
    "case.agora.value.2":
      "Los alumnos tienen apuntes, ejercicios y exámenes de su nivel, online y para imprimir.",
    "case.agora.value.3":
      "La academia aparece la primera en Google al buscar academias de matemáticas en Cuenca.",
    "case.agora.cta.title": "¿Quieres automatizar tu contenido?",
    "case.agora.cta.text":
      "Cuéntanos qué material te quita tiempo y diseñamos un proceso que lo cree por ti.",
    "case.agora.cta.subject": "Automatizar mi contenido",
    "case.albinana.title":
      "Automatización con n8n para la web de una farmacia: Farmacia Albiñana",
    "case.albinana.description":
      "Web y automatización con n8n para la Farmacia Albiñana de Bétera (Valencia): la farmacia publica artículos de blog y ofertas enviando un mensaje de Telegram o un email.",
    "case.albinana.heading":
      "Una web que se actualiza con un mensaje de Telegram o un email",
    "case.albinana.intro":
      "Para la Farmacia Ortopedia Albiñana, en Bétera (Valencia), creamos una web en dos idiomas y una automatización con n8n para que el equipo publique y edite contenido sin entrar en ningún panel de administración.",
    "case.albinana.sector": "Farmacia · ortopedia",
    "case.albinana.services": "Web, automatización con n8n",
    "case.albinana.since": "+1 año",
    "case.albinana.challenge.1":
      "Detrás del mostrador no hay tiempo para aprender a usar un gestor de contenidos. Cada artículo o cada oferta nueva suponía escribir a alguien, esperar y, muchas veces, que el contenido no llegara nunca a la web.",
    "case.albinana.challenge.2":
      "El objetivo era que la farmacia mantuviera su web viva por su cuenta, con las herramientas que el equipo ya usa cada día: Telegram y el email.",
    "case.albinana.work.messages.title": "Publicar con un mensaje",
    "case.albinana.work.messages.text":
      "El equipo envía el texto y las fotos de un artículo o de una oferta por un chat de Telegram o por email, igual que se lo mandaría a un compañero.",
    "case.albinana.work.layout.title": "Maquetación automática",
    "case.albinana.work.layout.text":
      "Un flujo de n8n recibe el mensaje, ordena el contenido, coloca las imágenes y publica una página con el mismo diseño que el resto de la web.",
    "case.albinana.work.edit.title": "Cambios al momento",
    "case.albinana.work.edit.text":
      "Cambiar un precio, corregir una errata o quitar una oferta caducada es otro mensaje, sin panel de administración y sin esperas.",
    "case.albinana.value.1":
      "La farmacia publica sus artículos y ofertas ella misma, en minutos y desde el móvil.",
    "case.albinana.value.2":
      "El contenido está siempre al día, lo que ayuda a que sus clientes la encuentren en Google.",
    "case.albinana.value.3":
      "Sin herramientas nuevas que aprender: la web se gestiona desde Telegram y el email.",
    "case.albinana.cta.title": "¿Quieres que tu web se actualice sola?",
    "case.albinana.cta.text":
      "Cuéntanos cómo trabajas hoy y automatizamos las tareas que te quitan tiempo.",
    "case.albinana.cta.subject": "Automatizar mi web",
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
    "case.centauro.since": "+2 años",
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
    "section.testimonials.title": "Lo que dicen nuestros clientes",
    "about.highlight": "Hablas directamente con quien programa tu web.",
    "about.role.omar": "Ingeniero de software · e-commerce",
    "about.role.misha": "Ingeniero de software · e-commerce",
    "about.role.jose": "Desarrollador frontend · webs y e-commerce",
    "about.linkedin": "LinkedIn",
    "about.linkedin.label": "Perfil de LinkedIn de",
    "faq.price.q": "¿Cuánto cuesta una web?",
    "faq.price.a":
      "Cada proyecto es distinto, así que no trabajamos con tarifas cerradas. Hablamos contigo, entendemos lo que necesitas y te preparamos un presupuesto personalizado y detallado, sin compromiso.",
    "faq.code.q": "¿Usáis WordPress o plantillas?",
    "faq.code.a":
      "No. Programamos cada web desde cero, así que es más rápida, más segura y no depende de plugins que hay que ir actualizando. Y aun así, si lo necesitas, podrás editar los textos y las imágenes tú mismo.",
    "faq.maintenance.q": "¿Qué pasa cuando la web ya está publicada?",
    "faq.maintenance.a":
      "Seguimos a tu lado. Si quieres, nos encargamos del mantenimiento: actualizaciones, copias de seguridad, cambios de contenido y soporte. Y si prefieres gestionarla tú, te lo dejamos todo preparado.",
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
    "service.custom.link": "Automatización de procesos con IA",
    "case.automation.link": "Cómo automatizamos procesos con IA",
    "service.mobile.title": "Apps móviles",
    "service.mobile.description":
      "Apps a medida que ponen tu negocio en el bolsillo: clientes, citas, cobros o lo que necesites, con Face ID, widgets y los mismos datos que tu web.",
    "service.mobile.badge": "iOS | SwiftUI | Supabase",
    "service.mobile.link": "Ver la app que hicimos para Ágora",
    "project.appAgora": "App de gestión Ágora",
    "project.appAgora.type": "App para iPhone",
    "project.appAgora.description":
      "App nativa para iPhone de la Academia Ágora: alumnos, horario, cuotas y contabilidad, desde el móvil y entre clase y clase.",
    "project.appAgora.tags": "iOS,SwiftUI,Supabase",
    "project.appAgora.image.alt": "Pantallas de la app de gestión Ágora",
    "case.appAgora.title":
      "App iOS a medida para gestionar una academia: Ágora",
    "case.appAgora.description":
      "App nativa para iPhone hecha a medida para la Academia Ágora de Cuenca: alumnos, horario, cuotas mensuales y contabilidad, con Face ID y widgets.",
    "case.appAgora.heading": "Toda la academia en el bolsillo",
    "case.appAgora.intro":
      "Para la Academia Ágora, en Cuenca, desarrollamos una app nativa para iPhone que reúne alumnos, horario, pagos y contabilidad. «¿Quién viene hoy a las 19:00?» y «¿quién falta por pagar este mes?» se responden en segundos, desde cualquier sitio.",
    "case.appAgora.sector": "Educación · clases de apoyo",
    "case.appAgora.services": "App iOS, panel web",
    "case.appAgora.since": "+1 año",
    "case.appAgora.challenge.1":
      "La academia se llevaba con hojas de cálculo y memoria: quién viene cada día, quién ha pagado el mes, qué gastos hay. Entre clase y clase no hay tiempo para abrir el portátil.",
    "case.appAgora.challenge.2":
      "Hacía falta una herramienta hecha con las reglas de esta academia (franjas de una hora, cuotas según las horas semanales, un contacto por familia) y que funcionara igual de bien desde el móvil.",
    "case.appAgora.work.today.title": "Hoy, de un vistazo",
    "case.appAgora.work.today.text":
      "La pantalla de inicio muestra quién viene hoy por franja horaria, los pagos pendientes, que se marcan como pagados con un toque, y el balance del mes.",
    "case.appAgora.work.money.title": "Cuotas y contabilidad",
    "case.appAgora.work.money.text":
      "Las cuotas se calculan solas según las horas semanales de cada alumno. Ingresos y gastos se registran por meses, con balance real y previsto.",
    "case.appAgora.work.native.title": "Nativa y segura",
    "case.appAgora.work.native.text":
      "Hecha en SwiftUI siguiendo las guías de Apple, con bloqueo por Face ID, widgets en la pantalla de inicio y los mismos datos que el panel web.",
    "case.screens.title": "La app por dentro",
    "case.screens.note": "Capturas y vídeo con datos de prueba.",
    "case.appAgora.screens.video": "Vídeo recorriendo las pestañas de la app",
    "case.appAgora.screens.students":
      "Lista de alumnos con etiquetas de pagado y pendiente",
    "case.appAgora.screens.student":
      "Ficha de alumno con centro, curso y contacto",
    "case.appAgora.screens.accounting":
      "Contabilidad en modo oscuro, con balance real y previsto del mes",
    "case.appAgora.value.1":
      "Responder «¿quién viene hoy?» o «¿quién debe este mes?» lleva segundos, desde cualquier sitio.",
    "case.appAgora.value.2":
      "Las cuotas y los pagos pendientes se calculan solos: menos errores y nada que recordar.",
    "case.appAgora.value.3":
      "Los datos de los alumnos quedan protegidos con Face ID y acceso privado.",
    "case.appAgora.cta.title": "¿Necesitas una app para tu negocio?",
    "case.appAgora.cta.text":
      "Cuéntanos cómo trabajas hoy y te proponemos una app hecha a tu medida.",
    "case.appAgora.cta.subject": "App móvil a medida",
    "demo.title": "Pruébala tú mismo",
    "demo.text":
      "Esta es la app de Ágora funcionando aquí mismo, con datos de prueba. Toca lo que quieras: no se guarda nada.",
    "demo.hint.1": "Marca un pago en Inicio y mira cómo cambia el balance.",
    "demo.hint.2": "Cambia de día en Horario para ver quién viene a cada hora.",
    "demo.hint.3": "Filtra alumnos y revisa las cuentas de cada mes.",
    "demo.cta.text": "¿Te imaginas tu negocio así?",
    "demo.cta.button": "Cuéntanos tu app",
    "demo.app.label": "Demo interactiva de la app de Ágora",
    "demo.live": "Demo en vivo · tócala",
    "demo.tap": "Toca para probarla",
    "demo.caption": "No es una captura: es la app funcionando en tu navegador.",
    "demo.app.tab.home": "Inicio",
    "demo.app.tab.schedule": "Horario",
    "demo.app.tab.students": "Alumnos",
    "demo.app.tab.accounting": "Cuentas",
    "demo.app.days": "Lunes,Martes,Miércoles,Jueves",
    "demo.app.dayLetters": "L,M,X,J",
    "demo.app.months": "Septiembre,Octubre,Noviembre,Diciembre",
    "demo.app.numbers": "Uno,Dos,Tres,Cuatro,Cinco,Seis,Siete,Ocho,Nueve",
    "demo.app.student": "Alumno",
    "demo.app.studentOne": "alumno",
    "demo.app.studentMany": "alumnos",
    "demo.app.today": "Hoy",
    "demo.app.nobody": "Nadie a esta hora",
    "demo.app.pending": "Pendientes de pago",
    "demo.app.toCollect": "por cobrar",
    "demo.app.allPaid": "Todos han pagado este mes.",
    "demo.app.markPaid": "Marcar pagado",
    "demo.app.paid": "Pagado",
    "demo.app.pendingOne": "Pendiente",
    "demo.app.undo": "Deshacer",
    "demo.app.balance": "Balance real",
    "demo.app.forecast": "Balance previsto",
    "demo.app.income": "Ingresos",
    "demo.app.expenses": "Gastos",
    "demo.app.fees": "Mensualidades",
    "demo.app.automatic": "Automático",
    "demo.app.of": "de",
    "demo.app.expected": "previstos",
    "demo.app.expenseNames": "Alquiler,Luz,Material",
    "demo.app.monthly": "Mensual",
    "demo.app.once": "Solo este mes",
    "demo.app.addExpense": "Añadir gasto",
    "demo.app.filters": "Activos,Inactivos,Todos",
    "demo.app.activeStudents": "Alumnos activos",
    "demo.app.pendingMonth": "Pendientes este mes",
    "automation.title": "Automatización de procesos con IA y n8n | Kaizencode",
    "automation.description":
      "Automatizamos las tareas repetitivas de tu negocio con n8n y agentes de IA que leen, deciden y hacen el trabajo, y solo publican cuando tú lo apruebas.",
    "automation.badge": "Automatización e IA",
    "automation.heading": "Que el trabajo repetitivo se haga solo",
    "automation.intro":
      "Conectamos las herramientas que ya usas con n8n y añadimos agentes de IA que leen, deciden y hacen el trabajo. La última palabra es tuya: nada importante pasa sin tu aprobación.",
    "automation.includes.title": "Cómo automatizamos tus procesos",
    "automation.includes.1.title": "Detectamos lo que te quita tiempo",
    "automation.includes.1.text":
      "Vemos cómo trabajas hoy y localizamos lo que se repite cada día: copiar datos, responder los mismos emails, actualizar tu web.",
    "automation.includes.2.title": "Conectamos tus herramientas",
    "automation.includes.2.text":
      "Con n8n conectamos el email, Telegram, hojas de cálculo, tu CRM o tu web, para que la información pase sola de una a otra.",
    "automation.includes.3.title": "Agentes de IA que entienden",
    "automation.includes.3.text":
      "Un agente de IA lee mensajes y documentos como lo haría una persona, entiende qué se le pide y decide qué hacer.",
    "automation.includes.4.title": "Tú apruebas antes de que pase nada",
    "automation.includes.4.text":
      "Antes de publicar algo importante, lo ves y lo apruebas. La automatización te ahorra tiempo sin quitarte el control.",
    "automation.process.1":
      "Hablamos de tus procesos y elegimos el que más tiempo te cuesta.",
    "automation.process.2":
      "Te enviamos una propuesta clara: qué automatizamos, plazos y presupuesto.",
    "automation.process.3":
      "Construimos el flujo y lo probamos con tus casos reales.",
    "automation.process.4":
      "Lo ponemos en marcha y lo ajustamos según evoluciona tu negocio.",
    "automation.case.title": "Un caso real: una web que se actualiza sola",
    "automation.case.intro":
      "Para la Farmacia Albiñana, en Bétera (Valencia), creamos un flujo con n8n para que la farmacia publique artículos de blog y ofertas enviando un email o un mensaje de Telegram. Así funciona:",
    "automation.flow.label": "Diagrama animado del flujo en n8n",
    "automation.flow.example": "Ejemplo en vivo: la farmacia envía una oferta",
    "automation.flow.pause": "Pausar animación",
    "automation.flow.play": "Reproducir animación",
    "automation.flow.step.1": "Mensaje",
    "automation.flow.step.2": "Agente IA",
    "automation.flow.step.3": "Vista previa",
    "automation.flow.step.4": "Tu aprobación",
    "automation.flow.step.5": "Publicado",
    "automation.flow.loop": "Pide cambios",
    "automation.flow.hint": "Pulsa un paso para verlo",
    "automation.flow.scene.1":
      "La farmacia envía la oferta por Telegram o email, como se la mandaría a un compañero.",
    "automation.flow.scene.2":
      "Un agente de IA lo lee y decide qué es y dónde va en la web.",
    "automation.flow.scene.3":
      "Crea la página y la enseña en una web privada, solo para el cliente.",
    "automation.flow.scene.4":
      "El cliente decide: lo aprueba o pide cambios con otro mensaje.",
    "automation.flow.scene.5":
      "Al aprobarlo, se publica en la web real. Sin tocar ningún panel.",
    "automation.flow.mock.message": "Nueva oferta: protector solar 2x1",
    "automation.flow.mock.channels": "Telegram o email",
    "automation.flow.mock.tag.1": "Es una oferta",
    "automation.flow.mock.tag.2": "Página de ofertas",
    "automation.flow.mock.tag.3": "2 fotos",
    "automation.flow.mock.private": "Vista previa privada",
    "automation.flow.mock.product": "Protector solar 2x1",
    "automation.flow.mock.price.old": "12,95 €",
    "automation.flow.mock.price": "9,95 €",
    "automation.flow.mock.change": "Pedir cambios",
    "automation.flow.mock.approve": "Aprobar",
    "automation.flow.mock.reply": "Pon el precio en 9,95 €",
    "automation.flow.mock.live": "Publicado",
    "automation.case.link": "Ver el caso de estudio completo",
    "automation.faq.1.q": "¿Qué es n8n?",
    "automation.faq.1.a":
      "Una herramienta de automatización de código abierto que conecta aplicaciones y servicios mediante flujos. Puede funcionar en tus propios servidores, así que tus datos siguen bajo tu control.",
    "automation.faq.2.q": "¿Necesito conocimientos técnicos para usarlo?",
    "automation.faq.2.a":
      "No. Diseñamos las automatizaciones alrededor de las herramientas que ya usas, como el email o Telegram, así que no tienes que aprender nada nuevo.",
    "automation.faq.3.q": "¿Y si la IA se equivoca?",
    "automation.faq.3.a":
      "Para todo lo importante, el flujo te pide aprobación antes de actuar, como en el caso de la farmacia. Siempre ves el resultado antes de que se publique.",
    "automation.cta.title": "¿Qué te gustaría automatizar?",
    "automation.cta.text":
      "Cuéntanos qué tarea te quita tiempo y te explicamos cómo la automatizaríamos, sin compromiso.",
    "automation.cta.subject": "Automatizar un proceso",
    "ecommerce.title": "Desarrollo de tiendas Shopify | Kaizencode",
    "ecommerce.description":
      "Creamos y personalizamos tiendas en Shopify: puesta en marcha, temas a medida, apps e integraciones y migración desde tu plataforma actual. Con experiencia en e-commerce de empresa.",
    "ecommerce.badge": "Tiendas online · Shopify",
    "ecommerce.heading": "Tu tienda en Shopify, hecha por quien conoce el e-commerce",
    "ecommerce.intro":
      "Montamos, diseñamos y desarrollamos tiendas en Shopify que venden desde el primer día. Aplicamos la experiencia de mantener el e-commerce de una gran empresa, a la medida de tu negocio.",
    "ecommerce.includes.title": "Qué hacemos en Shopify",
    "ecommerce.includes.1.title": "Tu tienda, lista para vender",
    "ecommerce.includes.1.text":
      "Configuramos Shopify de principio a fin: catálogo, pagos, envíos, impuestos y textos legales, para que empieces a vender sin pelearte con el panel.",
    "ecommerce.includes.2.title": "Un tema a medida, no una plantilla",
    "ecommerce.includes.2.text":
      "Diseñamos y programamos tu tema en Liquid para que la tienda tenga tu imagen, cargue rápido y sea fácil comprar desde el móvil.",
    "ecommerce.includes.3.title": "Apps e integraciones",
    "ecommerce.includes.3.text":
      "Conectamos Shopify con tu ERP, facturación, stock o herramientas de marketing, y desarrollamos apps a medida cuando una del mercado no basta.",
    "ecommerce.includes.4.title": "Migración y crecimiento",
    "ecommerce.includes.4.text":
      "Pasamos tu tienda desde WooCommerce, PrestaShop u otra plataforma sin perder productos, clientes ni posicionamiento, y la seguimos mejorando después.",
    "ecommerce.case.title": "Nuestra experiencia: el e-commerce B2B de Centauro",
    "ecommerce.case.intro":
      "Desde hace más de dos años mantenemos y evolucionamos la tienda B2B de Centauro, donde las clínicas veterinarias hacen sus pedidos cada día. Funciona sobre SAP Commerce, una plataforma de empresa donde una parada son ventas perdidas.",
    "ecommerce.case.shopify":
      "Centauro no está en Shopify, pero lo que aprendemos ahí lo aplicamos al desarrollar tu tienda en Shopify: catálogos grandes, pedidos que no pueden fallar e integraciones con los sistemas de la empresa.",
    "ecommerce.process.1":
      "Hablamos de tus productos, tus clientes y cómo vendes hoy.",
    "ecommerce.process.2":
      "Te proponemos configuración, diseño e integraciones, con un presupuesto cerrado.",
    "ecommerce.process.3":
      "Construimos la tienda y la revisas en una vista previa privada antes de publicarla.",
    "ecommerce.process.4":
      "Lanzamos, te enseñamos a gestionarla y seguimos a tu lado para lo que venga.",
    "ecommerce.faq.1.q": "¿Por qué Shopify?",
    "ecommerce.faq.1.a":
      "Shopify se encarga del alojamiento, la seguridad y los pagos, para que tú te centres en vender. Escala desde tus primeros pedidos hasta miles al día y lo gestionas desde un panel sencillo.",
    "ecommerce.faq.2.q": "¿Podéis migrar mi tienda actual a Shopify?",
    "ecommerce.faq.2.a":
      "Sí. Pasamos productos, clientes y pedidos, y configuramos las redirecciones para que no pierdas tu posicionamiento en Google.",
    "ecommerce.faq.3.q": "¿Y si necesito algo que Shopify no hace?",
    "ecommerce.faq.3.a":
      "Lo desarrollamos: una app a medida, una integración con tus sistemas o una tienda totalmente a medida cuando Shopify no es la opción adecuada.",
    "ecommerce.faq.4.q": "¿Podré gestionar la tienda por mi cuenta?",
    "ecommerce.faq.4.a":
      "Sí. Añades productos, cambias precios y gestionas pedidos desde el panel de Shopify, y te formamos antes del lanzamiento.",
    "ecommerce.cta.title": "¿Montamos tu tienda en Shopify?",
    "ecommerce.cta.text":
      "Cuéntanos qué vendes y cómo lo haces hoy, y te proponemos la mejor forma de llevarlo online, sin compromiso.",
    "ecommerce.cta.subject": "Tienda en Shopify",
    "service.ecommerce.link": "Desarrollo de tiendas Shopify",
    "case.ecommerce.link": "Cómo creamos tiendas online",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
