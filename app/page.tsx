import Link from "next/link";
import FaqItem from "./components/FaqItem";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Methodica",
      url: "https://methodica.pe",
      description:
        "Gestión empresarial estratégica para empresas en crecimiento. Estructura organizacional, control financiero y orden administrativo sin el costo de un departamento interno.",
      telephone: "+51956285469",
      email: "hola@methodica.pe",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
      },
      areaServed: {
        "@type": "Country",
        name: "Perú",
      },
      serviceType: [
        "Estructura y Gestión Empresarial",
        "Control y Organización Financiera",
        "Implementación y Orden Administrativo",
      ],
      knowsLanguage: "es",
    },
    {
      "@type": "WebSite",
      name: "Methodica",
      url: "https://methodica.pe",
      inLanguage: "es",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo es el proceso de onboarding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comenzamos con una reunión inicial donde entendemos cómo funciona tu empresa hoy: su estructura, procesos y desafíos operativos. A partir de ese diagnóstico definimos qué áreas necesitan ordenarse primero y establecemos un plan de trabajo claro.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con empresas de cualquier tamaño?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos principalmente con startups, negocios digitales y empresas de servicios que están en etapa de crecimiento y necesitan estructura para escalar con orden. Nuestro enfoque está pensado para empresas que quieren profesionalizar su operación antes de que el desorden se convierta en un problema.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tipo de problemas ayuda a resolver Methodica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Methodica ayuda a resolver problemas comunes en empresas en crecimiento: desorden administrativo, falta de estructura operativa, procesos improvisados, riesgos legales o fiscales, falta de claridad financiera.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si ya tengo un contador?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Podemos trabajar perfectamente con los profesionales que ya forman parte de tu empresa. Methodica se encarga de coordinar la gestión empresarial para que la información financiera y operativa esté alineada con las decisiones del negocio.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <nav className="nav" aria-label="Navegación principal">
        <div className="container nav__inner">
          <Link href="/" className="nav__logo">
            methodica<span>.</span>
          </Link>
          <ul className="nav__links">
            <li>
              <Link href="#servicios">Servicios</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="btn btn--vermillion"
                style={{ padding: "0.8rem 1.8rem", fontSize: "0.65rem" }}
              >
                Agenda Tu Consulta
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__left">
              <h1 id="hero-heading" className="hero__headline animate-fade-in">
                <span className="hero__line-1">TU</span>
                <span className="hero__line-2">empresa, nuestro</span>
                <span className="hero__line-3">
                  EXPERTISE<span className="hero__dot">.</span>
                </span>
              </h1>
            </div>
            <div className="hero__right animate-fade-in animate-delay-2">
              <p className="hero__sub">
                Gestión empresarial estratégica para empresas que quieren crecer
                con estructura.
              </p>
              <Link href="#contacto" className="btn btn--vermillion">
                Agenda Tu Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      {/* PAIN / PROBLEM */}
      <section className="pain" id="problema" aria-labelledby="pain-heading">
        <div className="container">
          <div className="pain__header">
            <h2 id="pain-heading" className="pain__pullquote">
              Mientras construyes tu negocio, la{" "}
              <strong>
                gestión administrativa, los impuestos y la incertidumbre legal
              </strong>{" "}
              consumen tu tiempo y tu capital.
            </h2>
          </div>

          <div className="pain__grid">
            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                01
              </span>
              <div className="pain__content">
                <h3>Procesos que no escalan contigo</h3>
                <p>
                  Lo que antes funcionaba, hoy te limita. Sin estructura, el
                  crecimiento aumenta el desorden en lugar de optimizar la
                  operación.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                02
              </span>
              <div className="pain__content">
                <h3>Decisiones empresariales sin información clara</h3>
                <p>
                  Sin visibilidad real de tus números y procesos, tomar
                  decisiones se vuelve un riesgo constante.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                03
              </span>
              <div className="pain__content">
                <h3>Multas y errores fiscales evitables</h3>
                <p>
                  Una declaración fuera de plazo o una estructura contable mal
                  organizada puede generarte gastos innecesarios.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                04
              </span>
              <div className="pain__content">
                <h3>Dependencia operative del founder</h3>
                <p>
                  Cuando todo pasa por ti el crecimiento se vuelve insostenible
                  y la empresa no logra avanzar con autonomía.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="solution" aria-labelledby="solution-heading">
        <div className="container">
          <h2 id="solution-heading" className="solution__text">
            Methodica<span className="accent">.</span>
            <br />
            <span className="light">Tu equipo completo.</span>
            <br />
            Sin el costo de un departamento interno
            <span className="accent">.</span>
          </h2>
          <p className="solution__sub">
            Integramos la gestión empresarial con respaldo contable y legal a
            través de aliados estratégicos. Estructura para crecer con claridad.
          </p>
          <div className="solution__line" aria-hidden="true"></div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="services"
        id="servicios"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="services__header">
            <span className="services__label">Nuestros servicios</span>
            <h2 id="services-heading" className="services__title">
              Tres pilares para que
              <br />
              tu empresa crezca con estructura.
            </h2>
          </div>

          <div className="services__grid">
            <article className="service">
              <span className="service__number" aria-hidden="true">
                01
              </span>
              <h3 className="service__name">
                Estructura y Gestión Empresarial
              </h3>
              <p className="service__desc">
                Diseñamos el marco organizacional que tu empresa necesita para
                operar con claridad. Definimos roles, flujos y sistemas para que
                el negocio funcione con orden desde su base.
              </p>
            </article>

            <article className="service">
              <span className="service__number" aria-hidden="true">
                02
              </span>
              <h3 className="service__name">
                Control y Organización Financiera
              </h3>
              <p className="service__desc">
                Ponemos orden en tus números para que tengas visibilidad real de
                tu situación financiera. Información clara y al día para tomar
                decisiones con confianza.
              </p>
            </article>

            <article className="service">
              <span className="service__number" aria-hidden="true">
                03
              </span>
              <h3 className="service__name">
                Implementación y Orden Administrativo
              </h3>
              <p className="service__desc">
                Ejecutamos y organizamos la gestión administrativa del día a
                día. Trámites, documentación y cumplimiento resueltos para que
                tú te enfoques en hacer crecer el negocio.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="faq__layout">
            <div className="faq__header">
              <span className="faq__label">Preguntas frecuentes</span>
              <h2 id="faq-heading" className="faq__title">
                Todo lo que necesitas saber antes de dar el siguiente paso.
              </h2>
            </div>

            <div className="faq__list">
              <FaqItem question="¿Cómo es el proceso de onboarding?">
                Comenzamos con una reunión inicial donde entendemos cómo
                funciona tu empresa hoy: su estructura, procesos y desafíos
                operativos. A partir de ese diagnóstico definimos qué áreas
                necesitan ordenarse primero y establecemos un plan de trabajo
                claro.
              </FaqItem>

              <FaqItem question="¿Trabajan con empresas de cualquier tamaño?">
                Trabajamos principalmente con startups, negocios digitales y
                empresas de servicios que están en etapa de crecimiento y
                necesitan estructura para escalar con orden. Nuestro enfoque
                está pensado para empresas que quieren profesionalizar su
                operación antes de que el desorden se convierta en un problema.
              </FaqItem>

              <FaqItem question="¿Qué tipo de problemas ayuda a resolver Methodica?">
                Methodica ayuda a resolver problemas comunes en empresas en
                crecimiento:
                <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                  <li>Desorden administrativo</li>
                  <li>Falta de estructura operativa</li>
                  <li>Procesos improvisados</li>
                  <li>Riesgos fiscales</li>
                  <li>Falta de claridad financiera</li>
                </ul>
              </FaqItem>

              <FaqItem question="¿Qué pasa si ya tengo un contador?">
                Podemos trabajar perfectamente con los profesionales que ya
                forman parte de tu empresa. Methodica se encarga de coordinar la
                gestión empresarial para que la información financiera y
                operativa esté alineada con las decisiones del negocio.
              </FaqItem>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="final-cta"
        id="contacto"
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <h2 id="cta-heading" className="final-cta__text">
            <span className="light">El momento de actuar es</span>
            AHORA<span className="text-vermillion">.</span>
          </h2>
          <p className="final-cta__sub">
            Cada día sin estructura le cuesta dinero a tu empresa. Agenda una
            consulta gratuita y descubre cómo podemos transformar tu operación
            en las próximas semanas.
          </p>
          <Link
            href="mailto:hola@methodica.com"
            className="btn btn--vermillion"
          >
            Agenda Tu Consulta
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Link href="/" className="footer__logo">
                methodica<span>.</span>
              </Link>
              <p className="footer__desc">
                Gestión empresarial estratégica para empresas que quieren crecer
                con estructura.
              </p>
            </div>

            <div>
              <p className="footer__col-title">Servicios</p>
              <ul className="footer__links">
                <li>
                  <Link href="#servicios">Estructura y Gestión</Link>
                </li>
                <li>
                  <Link href="#servicios">Control Financiero</Link>
                </li>
                <li>
                  <Link href="#servicios">Orden Administrativo</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer__col-title">Contacto</p>
              <ul className="footer__links">
                <li>
                  <a href="mailto:hola@methodica.pe">hola@methodica.pe</a>
                </li>
                <li>
                  <a href="tel:+51956285469">+51 956 285 469</a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+51956285469"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              &copy; 2026 Methodica. Todos los derechos reservados.
            </p>
            <div className="footer__legal"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
