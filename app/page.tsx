import Link from "next/link";
import FaqItem from "./components/FaqItem";
import ContactForm from "./components/ContactForm";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://methodica.pe/#organization",
      name: "Methodica",
      url: "https://methodica.pe",
      logo: "https://methodica.pe/icon.png",
      image: "https://methodica.pe/og-image.png",
      description:
        "Consultoría de gestión empresarial para startups y empresas de servicios en Perú. Diseñamos y operamos la estructura, procesos y gestión administrativa — con respaldo contable y legal vía aliados estratégicos.",
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
        "Consultoría de Gestión Empresarial",
        "Estructura y Organización Empresarial",
        "Gestión Administrativa y Operativa",
        "Optimización de Procesos Empresariales",
      ],
      knowsLanguage: "es",
      slogan: "Tu equipo completo. Sin el costo de un departamento interno.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Methodica",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Optimización de Procesos",
              description:
                "Analizamos y rediseñamos tus flujos de trabajo actuales para eliminar cuellos de botella, reducir errores y maximizar la productividad de tu equipo.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gestión Estratégica & Administrativa",
              description:
                "Nos convertimos en tu brazo derecho administrativo. Organizamos la estructura de tu empresa, desde la gestión de proveedores hasta el control de flujos de caja.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Asesoría Contable & Tributaria",
              description:
                "A través de nuestra red de aliados estratégicos, garantizamos que tu empresa cumpla con todas las normativas tributarias de manera eficiente y puntual.",
            },
          },
        ],
      },
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
          name: "¿Qué pasa en la primera consulta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "30 minutos, sin costo y sin compromiso. Entendemos cómo funciona tu empresa hoy: estructura, procesos y desafíos. Salimos con una lectura inicial de qué tendría sentido ordenar primero.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué tipo de empresas es Methodica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Startups, negocios digitales y empresas de servicios en Perú en etapa de crecimiento, que quieren profesionalizar su operación antes de que el desorden se vuelva un problema.",
          },
        },
        {
          "@type": "Question",
          name: "¿En cuánto tiempo veo resultados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orden operativo visible en 2 a 4 semanas. En 60 a 90 días tu empresa funciona con menos dependencia de ti, con procesos definidos y visibilidad clara de la operación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo manejan lo contable y legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Methodica se enfoca en gestión empresarial y operaciones. El respaldo contable y legal lo integramos vía aliados estratégicos — un solo punto de contacto, todo coordinado.",
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
              <Link href="#proceso">Proceso</Link>
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
                Consulta Gratuita
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__grid">
              <div className="hero__left">
                <h1 id="hero-heading" className="hero__headline animate-fade-in">
                  <span className="hero__line-1">CRECE</span>{" "}
                  <span className="hero__line-2">con orden, claridad y</span>{" "}
                  <span className="hero__line-3">
                    CONFIANZA<span className="hero__dot">.</span>
                  </span>
                </h1>
              </div>
              <div className="hero__right animate-fade-in animate-delay-2">
                <p className="hero__sub">
                  Diseñamos y operamos la estructura, procesos y gestión de
                  startups y empresas de servicios. Para que decidas con
                  claridad y crezcas sin frenos.
                </p>
                <Link href="#contacto" className="btn btn--vermillion">
                  Agendar Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider__dot"></span>
          </div>
        </div>

        {/* SERVICES */}
        <section
          className="services"
          id="servicios"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="services__header">
              <span className="services__label">Servicios</span>
              <h2 id="services-heading" className="services__title">
                Tu equipo completo.{" "}
                <span className="services__title-light">
                  Sin el costo de un departamento interno.
                </span>
              </h2>
            </div>

            <div className="services__grid">
              <article className="service">
                <span className="service__number" aria-hidden="true">
                  01
                </span>
                <h3 className="service__name">Optimización de Procesos</h3>
                <p className="service__desc">
                  Analizamos y rediseñamos tus flujos de trabajo actuales para
                  eliminar cuellos de botella, reducir errores y maximizar la
                  productividad de tu equipo.
                </p>
              </article>

              <article className="service">
                <span className="service__number" aria-hidden="true">
                  02
                </span>
                <h3 className="service__name">
                  Gestión Estratégica &amp; Administrativa
                </h3>
                <p className="service__desc">
                  Nos convertimos en tu brazo derecho administrativo.
                  Organizamos la estructura de tu empresa, desde la gestión
                  de proveedores hasta el control de flujos de caja.
                </p>
              </article>

              <article className="service">
                <span className="service__number" aria-hidden="true">
                  03
                </span>
                <h3 className="service__name">
                  Asesoría Contable &amp; Tributaria
                </h3>
                <p className="service__desc">
                  A través de nuestra red de aliados estratégicos, garantizamos
                  que tu empresa cumpla con todas las normativas tributarias de
                  manera eficiente y puntual.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESO / CÓMO TRABAJAMOS */}
        <section
          className="process"
          id="proceso"
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="process__header">
              <span className="process__label">Cómo trabajamos</span>
              <h2 id="process-heading" className="process__title">
                De desordenado a operando con estructura, en cuatro pasos.
              </h2>
            </div>

            <ol className="process__grid">
              <li className="process__step">
                <span className="process__number" aria-hidden="true">
                  01
                </span>
                <div className="process__content">
                  <h3>Conversamos.</h3>
                  <p>
                    30 minutos, sin costo. Entendemos cómo funciona tu empresa
                    hoy.
                  </p>
                </div>
              </li>

              <li className="process__step">
                <span className="process__number" aria-hidden="true">
                  02
                </span>
                <div className="process__content">
                  <h3>Diagnosticamos.</h3>
                  <p>
                    Identificamos qué tiene sentido ordenar primero y por qué.
                  </p>
                </div>
              </li>

              <li className="process__step">
                <span className="process__number" aria-hidden="true">
                  03
                </span>
                <div className="process__content">
                  <h3>Proponemos.</h3>
                  <p>
                    Plan de trabajo con alcance, tiempo y costo claros. Sin
                    sorpresas.
                  </p>
                </div>
              </li>

              <li className="process__step">
                <span className="process__number" aria-hidden="true">
                  04
                </span>
                <div className="process__content">
                  <h3>Implementamos.</h3>
                  <p>
                    Ejecutamos contigo y con tu equipo. No te dejamos un
                    PowerPoint.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="faq__layout">
              <div className="faq__header">
                <span className="faq__label">Preguntas frecuentes</span>
                <h2 id="faq-heading" className="faq__title">
                  Lo que necesitas saber antes del siguiente paso.
                </h2>
              </div>

              <div className="faq__list">
                <FaqItem question="¿Qué pasa en la primera consulta?">
                  30 minutos, sin costo y sin compromiso. Entendemos cómo
                  funciona tu empresa hoy: estructura, procesos y desafíos.
                  Salimos con una lectura inicial de qué tendría sentido ordenar
                  primero.
                </FaqItem>

                <FaqItem question="¿Para qué tipo de empresas es Methodica?">
                  Startups, negocios digitales y empresas de servicios en Perú
                  en etapa de crecimiento, que quieren profesionalizar su
                  operación antes de que el desorden se vuelva un problema.
                </FaqItem>

                <FaqItem question="¿En cuánto tiempo veo resultados?">
                  Orden operativo visible en 2 a 4 semanas. En 60 a 90 días tu
                  empresa funciona con menos dependencia de ti, con procesos
                  definidos y visibilidad clara de la operación.
                </FaqItem>

                <FaqItem question="¿Cómo manejan lo contable y legal?">
                  Methodica se enfoca en gestión empresarial y operaciones. El
                  respaldo contable y legal lo integramos vía aliados
                  estratégicos — un solo punto de contacto, todo coordinado.
                </FaqItem>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA + CONTACT FORM */}
        <section
          className="final-cta"
          id="contacto"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="final-cta__split">
              <div className="final-cta__left">
                <h2 id="cta-heading" className="final-cta__text">
                  <span className="light">El momento de ordenar tu empresa es</span>{" "}
                  AHORA<span className="text-vermillion">.</span>
                </h2>
                <p className="final-cta__sub">
                  Consulta gratuita de 30 minutos. Te mostramos qué ordenar
                  primero — sin compromiso, solo claridad sobre el próximo paso.
                </p>
              </div>
              <div className="final-cta__right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Link href="/" className="footer__logo">
                methodica<span>.</span>
              </Link>
              <p className="footer__desc">
                Consultoría de gestión empresarial para startups y empresas de
                servicios en crecimiento en Perú.
              </p>
            </div>

            <div>
              <p className="footer__col-title">Servicios</p>
              <ul className="footer__links">
                <li>
                  <Link href="#servicios">Estructura y Gestión</Link>
                </li>
                <li>
                  <Link href="#servicios">Orden Administrativo</Link>
                </li>
                <li>
                  <Link href="#servicios">Contable y Legal (aliados)</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer__col-title">Empresa</p>
              <ul className="footer__links">
                <li>
                  <Link href="#proceso">Cómo trabajamos</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
                <li>
                  <Link href="#contacto">Consulta Gratuita</Link>
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
                  <a
                    href="https://wa.me/51956285469"
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
