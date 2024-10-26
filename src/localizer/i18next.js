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
          "I'm": "Sóc la",
          "software_developer": "Politòloga",
          "description_intro": "Graduada en Ciències Polítiques i de",
          "description_intro2": "l'Administració amb interès en l'assesoria i consultoria política.",
          "download_cv": "Descarregar CV",
          "my": "El meu",
          "my_chronology": "La meva Cronologia",
          "description_chronology": "He tingut l'oportunitat de treballar amb diversos equips d'aquestes organitzacions.",
          "description_chronology2": "",
          "form_request": "Si us plau, ompliu el formulari a continuació per discutir qualsevol oportunitat de feina.",
          "submit": "Enviar",
          "footer_desc": "Aquesta obra és dedicada al domini públic per David Martin. No es reservan drets.",
          "your_name": "El Teu Nom",
          "your_email": "El Teu Correu",
          "your_message": "El Teu Missatge",
          "works_desc": "Sóc apassionat de l'anàlisi política i el desenvolupament de polítiques, amb un enfocament meticulós als detalls. El meu objectiu és assegurar que cada iniciativa no només compleixi, sinó que superi les expectatives. Estic compromès a utilitzar les meves habilitats i experiència per ajudar les organitzacions i governs a assolir els seus objectius i crear un impacte significatiu a la societat.",
          "see_more": "Veure Més",
          "what_i_do": "El que faig",
          "skills_desc": "Tinc experiència en pràctiques en l'àmbit politic local i competències en l'oratòria, el treball cooperatiu, i un sòlid coneixement en teoria política. Soc competent en mètodes de recerca qualitativa i quantitativa així com en la formulació i avaluació de polítiques públiques. Gaudeixo col·laborant en entorns interculturals especialment, durant la meva estada d'intercanvi.",
          "skill1": "Investigació i Anàlisi de Polítiques",
          "skill2": "Recerca en Teoria Política",
          "skill3": "",
          "skill1_desc": "Realització d'investigacions i anàlisis exhaustius sobre temes polítics, proporcionant informació basada en evidència per a decisions polítiques efectives. És el cas de l'estada de pràctiques universitàries a la Federació de Municips de Catalunya com a tècnica en comissions sectorials.",
          "skill2_desc": "Realització del TFG en aquest àmbit. Una anàlisis política de \"Game of Thrones\": Els paral·lelismes de Daenerys Targaryen amb la teoria política",
          "skill3_desc": "",
          "error_empty_fields": "Si us plau, ompliu tots els camps",
          "success_email": "El vostre missatge s'ha enviat amb èxit. Em posaré en contacte amb vosaltres aviat.",
          "error_send_email": "No s'ha pogut enviar l'email... Torneu-ho a intentar més tard!",
          "title_ehu": "Universitat Pompeu Fabra + Rijksuniversiteit Groningen",
          "title_zucchetti": "Federació de Municipis de Catalunya",
          "text_ehu": "Graduada en la Universitat Pompeu Fabra (UPF), una universitat dinàmica i acadèmicament rigorosa a Barcelona, reconeguda per la seva orientació internacional i el seu pla d'estudis innovador. Durant els meus estudis, també vaig tenir l’oportunitat enriquidora de participar en una estada Erasmus+ a la Universitat de Groningen, ampliant les meves perspectives acadèmiques i culturals.",
          "text_zucchetti": "Vaig realitzar pràctiques a la Federació de Municipis de Catalunya, on vaig adquirir experiència pràctica i coneixements específics en la gestió municipal i la col·laboració amb entitats locals. Aquesta oportunitat em va permetre aplicar les meves habilitats tècniques en un entorn professional, contribuint al desenvolupament de solucions orientades a millorar l'administració pública.",
          "years":"anys",
          "months":"mesos",
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
          "software_developer": "Political Scientist",
          "description_intro": "Graduated in Political Science and",
          "description_intro2": "Administration with an interest in political advising and consulting.",
          "download_cv": "Download CV",
          "my": "My",
          "my_chronology": "My Chronology",
          "description_chronology": "I have had the opportunity to work with various teams within these organizations.",
          "description_chronology2": "",
          "form_request": "Please fill out the form below to discuss any work opportunities.",
          "submit": "Submit",
          "footer_desc": "This work is dedicated to the public domain by David Martin. No rights reserved.",
          "your_name": "Your Name",
          "your_email": "Your Email",
          "your_message": "Your Message",
          "works_desc": "I am passionate about political analysis and policy development, with a meticulous focus on details. My goal is to ensure that each initiative not only meets but exceeds expectations. I am committed to using my skills and experience to help organizations and governments achieve their goals and create a significant impact in society.",
          "see_more": "See More",
          "what_i_do": "What I do",
          "skills_desc": "I have experience in local political internships, with skills in public speaking, cooperative work, and a solid knowledge of political theory. I am proficient in both qualitative and quantitative research methods as well as in public policy formulation and evaluation. I particularly enjoy collaborating in intercultural environments, especially during my exchange stay.",
          "skill1": "Policy Research & Analysis",
          "skill2": "Political Theory Research",
          "skill3": "",
          "skill1_desc": "Conducting thorough research and analysis on political issues, providing evidence-based insights for effective policy decisions. This was the case during my university internship at the Federation of Municipalities of Catalonia as a technician in sectoral commissions.",
          "skill2_desc": "Developing, implementing, and evaluating public policies, ensuring alignment with social, economic, and political objectives. I completed my undergraduate thesis in this area.",
          "skill3_desc": "",
          "error_empty_fields": "Please fill out all fields",
          "success_email": "Your message has been sent successfully. I will get back to you soon.",
          "error_send_email": "Not able to send email... Try again later!",
          "title_ehu": "Pompeu Fabra University + University of Groningen",
          "title_zucchetti": "Federation of Municipalities of Catalonia",
          "text_ehu": "Graduated from Universitat Pompeu Fabra (UPF), a vibrant and academically rigorous university in Barcelona, recognized for its international orientation and innovative curriculum. During my studies, I also had the enriching opportunity to participate in an Erasmus+ stay at the University of Groningen, broadening my academic and cultural perspectives.",
          "text_zucchetti": "I completed an internship at the Federació de Municipis de Catalunya, where I gained practical experience and specific knowledge in municipal management and collaboration with local entities. This opportunity allowed me to apply my technical skills in a professional setting, contributing to the development of solutions aimed at improving public administration.",
          "years": "years",
          "months": "months"
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
          "description_intro": "Graduada en Ciencias Políticas y de",
          "description_intro2": "la Administración con interés en la asesoría y consultoría política.",
          "download_cv": "Descargar CV",
          "my": "Mi",
          "my_chronology": "Mi Cronología",
          "description_chronology": "He tenido la oportunidad de trabajar con diversos equipos dentro de estas organizaciones.",
          "description_chronology2": "",
          "form_request": "Por favor, complete el formulario a continuación para discutir cualquier oportunidad laboral.",
          "submit": "Enviar",
          "footer_desc": "Este trabajo está dedicado al dominio público por David Martin. No se reservan derechos.",
          "your_name": "Tu Nombre",
          "your_email": "Tu Correo",
          "your_message": "Tu Mensaje",
          "works_desc": "Soy un apasionado del análisis político y el desarrollo de políticas, con un enfoque meticuloso en los detalles. Mi objetivo es asegurar que cada iniciativa no solo cumpla, sino que supere las expectativas. Estoy comprometido a utilizar mis habilidades y experiencia para ayudar a las organizaciones y gobiernos a alcanzar sus metas y crear un impacto significativo en la sociedad.",
          "see_more": "Ver Más",
          "what_i_do": "Lo que hago",
          "skills_desc": "Tengo experiencia en prácticas en el ámbito político local y habilidades en oratoria, trabajo en equipo, y un sólido conocimiento en teoría política. Soy competente en métodos de investigación cualitativa y cuantitativa, así como en la formulación y evaluación de políticas públicas. Disfruto especialmente colaborando en entornos interculturales, como durante mi estancia de intercambio.",
          "skill1": "Investigación y Análisis de Políticas",
          "skill2": "Investigación en Teoría Política",
          "skill3": "",
          "skill1_desc": "Realización de investigaciones y análisis exhaustivos sobre temas políticos, proporcionando información basada en evidencia para decisiones políticas efectivas. Es el caso de la estancia de prácticas universitarias en la Federación de Municipios de Cataluña como técnica en comisiones sectoriales.",
          "skill2_desc": "Desarrollo, implementación y evaluación de políticas públicas, asegurando su alineación con los objetivos sociales, económicos y políticos. Realización del TFG en este ámbito.",
          "skill3_desc": "",
          "error_empty_fields": "Por favor complete todos los campos",
          "success_email": "Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo pronto.",
          "error_send_email": "No se pudo enviar el correo electrónico... ¡Inténtalo de nuevo más tarde!",
          "title_ehu": "Universidad Pompeu Fabra + Rijksuniversiteit Groningen",
          "title_zucchetti": "Federación de Municipios de Cataluña",
          "text_ehu": "Graduada de la Universitat Pompeu Fabra (UPF), una universidad dinámica y académicamente rigurosa en Barcelona, reconocida por su orientación internacional y su plan de estudios innovador. Durante mis estudios, también tuve la oportunidad enriquecedora de participar en una estancia Erasmus+ en la Universidad de Groningen, ampliando mis perspectivas académicas y culturales.",
          "text_zucchetti": "Realicé prácticas en la Federació de Municipis de Catalunya, donde adquirí experiencia práctica y conocimientos específicos en el ámbito de la gestión municipal y la colaboración con entidades locales. Esta oportunidad me permitió aplicar mis habilidades técnicas en un entorno profesional, contribuyendo al desarrollo de soluciones orientadas a mejorar la administración pública.",
          "years": "años",
          "months": "meses"
        }
      },      
    }
  });

export default i18n;