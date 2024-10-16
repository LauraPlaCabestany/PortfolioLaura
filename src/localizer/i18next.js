import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'ca',
    debug: false,
    resources: {
      ca: {
        "translation": {
          "home": "Inici",
          "about": "Sobre Mi",
          "portfolio": "Portfolio",
          "chronology": "Cronologia",
          "contact": "Contactar",
          "contact_me": "Contacta'm",
          "hello": "Hola",
          "I'm": "Sóc",
          "software_developer": "Politòleg",
          "description_intro": "Sóc un politòleg amb experiència en",
          "description_intro2": "l'anàlisi i la formulació de polítiques efectives.",
          "download_cv": "Descarregar CV",
          "my": "El meu",
          "my_chronology": "La meva Cronologia",
          "description_chronology": "He tingut l'oportunitat de treballar amb un grup divers d'organitzacions.",
          "description_chronology2": "Algunes de les organitzacions destacades amb les que he treballat inclouen",
          "form_request": "Si us plau, ompliu el formulari a continuació per discutir qualsevol oportunitat de feina.",
          "submit": "Enviar",
          "footer_desc": "Aquesta obra és dedicada al domini públic per David Martin. No es reservan drets.",
          "your_name": "El Teu Nom",
          "your_email": "El Teu Correu",
          "your_message": "El Teu Missatge",
          "works_desc": "Sóc apassionat de l'anàlisi política i el desenvolupament de polítiques, amb un enfocament meticulós als detalls. El meu objectiu és assegurar que cada iniciativa no només compleixi, sinó que superi les expectatives. Estic compromès a utilitzar les meves habilitats i experiència per ajudar les organitzacions i governs a assolir els seus objectius i crear un impacte significatiu a la societat.",
          "see_more": "Veure Més",
          "what_i_do": "El que faig",
          "skills_desc": "Sóc un científic polític hàbil i apassionat amb experiència en la investigació integral i anàlisi de polítiques. Tinc un sòlid coneixement de la teoria política i un ull agut per al detall. Soc competent en anàlisi de dades, mètodes de recerca qualitativa i quantitativa, així com en la formulació i avaluació de polítiques.",
          "skill1": "Investigació i Anàlisi de Polítiques",
          "skill2": "Desenvolupament i Implementació de Polítiques",
          "skill3": "Consultoria i Gestió de Projectes",
          "skill1_desc": "Realització d'investigacions i anàlisis exhaustius sobre temes polítics, proporcionant informació basada en evidència per a decisions polítiques efectives.",
          "skill2_desc": "Desenvolupament, implementació i avaluació de polítiques públiques, assegurant-ne l'alineació amb els objectius socials, econòmics i polítics.",
          "skill3_desc": "Proporcionar assessorament expert en estratègies polítiques, gestionant projectes polítics des de la planificació fins a l'execució i assegurant-ne l'alineació amb els objectius de l'organització o govern.",
          "error_empty_fields": "Si us plau, ompliu tots els camps",
          "success_email": "El vostre missatge s'ha enviat amb èxit. Em posaré en contacte amb vosaltres aviat.",
          "error_send_email": "No s'ha pogut enviar l'email... Torneu-ho a intentar més tard!",
          "title_ehu": "Euskal Herriko Unibertsitatea / Universitat del País Basc",
          "title_zucchetti": "Zucchetti Espanya",
          "text_ehu": "He completat el meu grau en Enginyeria de Programari a Euskal Herriko Unibertsitatea (EHU). La universitat és coneguda pels seus complets programes educatius i oportunitats de recerca. Durant els meus estudis, vaig adquirir una sòlida base en programació, desenvolupament de programari i resolució de problemes, la qual cosa ha donat una forma significativa a les meves habilitats professionals. L'entorn també fomentava la innovació i la col·laboració, cosa que ha estat inavaluable en la meva carrera.",
          "text_zucchetti": "Zucchetti Espanya és una empresa de programari líder especialitzada en solucions ERP i de gestió empresarial. He treballat amb ells en diversos projectes innovadors, enfocant-me en el desenvolupament de programari i solucions d'integració per als clients. L'experiència em va permetre aplicar i ampliar les meves habilitats en un entorn professional, col·laborant amb un equip altament qualificat. Zucchetti és molt reconeguda per les seves solucions tecnològiques d'avantguarda i té una forta presència al mercat espanyol."
        }
      },
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",
          "chronology": "Chronology",
          "contact": "Contact",
          "contact_me": "Contact Me",
          "hello": "Hello",
          "I'm": "I'm",
          "software_developer": "political scientist",
          "description_intro": "I am a skilled political scientist with experience in",
          "description_intro2": "analyzing and formulating effective policies.",
          "download_cv": "Download CV",
          "my": "My",
          "my_chronology": "My Chronology",
          "description_chronology": "I have had the opportunity to work with a diverse group of organizations. ",
          "description_chronology2": "Some of the notable organizations I have worked with includes",
          "form_request": "Please fill out the form below to discuss any work opportunities.",
          "submit": "Submit",
          "footer_desc": "This work is dedicated to the public domain by David Martin. No rights reserved.",
          "your_name": "Your Name",
          "your_email": "Your Email",
          "your_message": "Your Message",
          "works_desc": "I am passionate about political analysis and policy development, with a meticulous focus on details. My goal is to ensure that each initiative not only meets, but exceeds expectations. I am committed to using my skills and expertise to help organizations and governments achieve their goals and create a meaningful impact in society",
          "see_more": "See More",
          "what_i_do": "What I do",
          "skills_desc": "I am a skilled and passionate political scientist with experience in conducting comprehensive research and policy analysis. I have a strong understanding of political theory and a keen eye for detail. I am proficient in data analysis, qualitative and quantitative research methods, as well as policy formulation and evaluation.",
          "skill1": "Policy Research & Analysis",
          "skill2": "Policy Development & Implementation",
          "skill3": "Consulting & Project Management",
          "skill1_desc": "Conducting thorough research and analysis on political issues, providing evidence-based insights for effective policy decisions.",
          "skill2_desc": "Developing, implementing, and evaluating public policies, ensuring alignment with social, economic, and political goals.",
          "skill3_desc": "Providing expert advice on policy strategies, managing political projects from planning to execution, and ensuring alignment with organizational or governmental objectives.",
          "error_empty_fields": "Please fill out all fields",
          "success_email": "Your message has been sent successfully. I will get back to you soon.",
          "error_send_email": "Not able to send email... Try again later!",
          "title_ehu": "University of the Basque Country",
          "title_zucchetti": "Zucchetti Spain",
          "text_ehu": "I completed my Software Engineering degree at Euskal Herriko Unibertsitatea (EHU). \nThe university is known for its comprehensive educational programs and research opportunities. \nDuring my studies, I gained a strong foundation in programming, software development, and problem-solving, \nwhich has significantly shaped my professional skills. The environment also encouraged innovation \nand collaboration, which has been invaluable in my career.",
          "text_zucchetti": "Zucchetti Spain is a leading software company specializing in ERP and business management solutions. \nI worked with them on various innovative projects, focusing on software development and integration \nsolutions for clients. The experience allowed me to apply and expand my skills in a professional setting, \ncollaborating with a highly skilled team. Zucchetti is well-regarded for its cutting-edge technology \nsolutions and has a strong presence in the Spanish market."
      }
      },
      es: {
        translation: {
          "home": "Inicio",
          "about": "Sobre Mí",
          "portfolio": "Portfolio",
          "chronology": "Cronología",
          "contact": "Contactar",
          "contact_me": "Contáctame",
          "hello": "Hola",
          "I'm": "Soy",
          "software_developer": "Politóloga",
          "description_intro": "Soy una politóloga con experiencia en",
          "description_intro2": "el análisis y la formulación de políticas efectivas.",
          "download_cv": "Descargar CV",
          "my": "Mi",
          "my_chronology": "Mi Cronología",
          "description_chronology": "He tenido la oportunidad de trabajar con un grupo diverso de organizaciones.",
          "description_chronology2": "Algunas de las organizaciones destacadas con las que he trabajado incluyen",
          "form_request": "Por favor, complete el formulario a continuación para discutir cualquier oportunidad laboral.",
          "submit": "Enviar",
          "footer_desc": "Este trabajo está dedicado al dominio público por David Martin. No se reservan derechos.",
          "your_name": "Tu Nombre",
          "your_email": "Tu Correo",
          "your_message": "Tu Mensaje",
          "works_desc": "Soy un apasionado del análisis político y el desarrollo de políticas, con un enfoque meticuloso en los detalles. Mi objetivo es asegurar que cada iniciativa no solo cumpla, sino que supere las expectativas. Estoy comprometido a utilizar mis habilidades y experiencia para ayudar a las organizaciones y gobiernos a alcanzar sus metas y crear un impacto significativo en la sociedad.",
          "see_more": "Ver Más",
          "what_i_do": "Lo que hago",
          "skills_desc": "Soy un científico político hábil y apasionado con experiencia en la investigación integral y análisis de políticas. Tengo un sólido conocimiento de la teoría política y un ojo agudo para el detalle. Soy competente en análisis de datos, métodos de investigación cualitativa y cuantitativa, así como en la formulación y evaluación de políticas.",
          "skill1": "Investigación y Análisis de Políticas",
          "skill2": "Desarrollo e Implementación de Políticas",
          "skill3": "Consultoría y Gestión de Proyectos",
          "skill1_desc": "Realización de investigaciones y análisis exhaustivos sobre temas políticos, proporcionando información basada en evidencia para decisiones políticas efectivas.",
          "skill2_desc": "Desarrollo, implementación y evaluación de políticas públicas, asegurando su alineación con los objetivos sociales, económicos y políticos.",
          "skill3_desc": "Proporcionar asesoramiento experto en estrategias políticas, gestionando proyectos políticos desde la planificación hasta su ejecución y asegurando la alineación con los objetivos de la organización o gobierno.",
          "error_empty_fields": "Por favor complete todos los campos",
          "success_email": "Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",
          "error_send_email": "No se pudo enviar el correo electrónico... ¡Inténtalo de nuevo más tarde!",
          "title_ehu": "Euskal Herriko Unibertsitatea / Universidad del País Vasco",
          "title_zucchetti": "Zucchetti España",
          "text_ehu": "Completé mi grado en Ingeniería de Software en Euskal Herriko Unibertsitatea (EHU). La universidad es conocida por sus completos programas educativos y oportunidades de investigación. Durante mis estudios, adquirí una sólida base en programación, desarrollo de software y resolución de problemas, lo que ha dado forma significativa a mis habilidades profesionales. El entorno también fomentaba la innovación y la colaboración, lo que ha sido invaluable en mi carrera.",
          "text_zucchetti": "Zucchetti España es una empresa de software líder especializada en soluciones ERP y de gestión empresarial. Trabajé con ellos en varios proyectos innovadores, enfocándome en el desarrollo de software e integración de soluciones para los clientes. La experiencia me permitió aplicar y ampliar mis habilidades en un entorno profesional, colaborando con un equipo altamente cualificado. Zucchetti es muy reconocida por sus soluciones tecnológicas de vanguardia y tiene una fuerte presencia en el mercado español."
        }
      },      
    }
  });

export default i18n;
