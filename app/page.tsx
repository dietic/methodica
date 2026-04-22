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
        "Consultoría de gestión empresarial para startups y empresas de servicios en crecimiento en Perú. Diseñamos y operamos la estructura, procesos y gestión administrativa de tu empresa — con respaldo contable y legal integrado vía aliados estratégicos.",
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
      slogan:
        "Tu equipo completo. Sin el costo de un departamento interno.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Methodica",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Estructura y Gestión Empresarial",
              description:
                "Diseño del marco organizacional, roles, flujos y sistemas para que la empresa opere con orden desde su base.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Implementación y Orden Administrativo",
              description:
                "Ejecución y coordinación de la gestión administrativa del día a día: trámites, documentación y cumplimiento.",
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
            text: "Es una reunión de 30 minutos, sin costo y sin compromiso. Entendemos cómo funciona tu empresa hoy: estructura, procesos y desafíos. Salimos con una lectura inicial de qué tendría sentido ordenar primero y cómo podría verse un plan de trabajo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué tipo de empresas es Methodica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos con startups, negocios digitales y empresas de servicios en Perú que están en etapa de crecimiento y necesitan estructura para escalar con orden. Nuestro enfoque es para empresas que quieren profesionalizar su operación antes de que el desorden se convierta en un problema.",
          },
        },
        {
          "@type": "Question",
          name: "¿En cuánto tiempo veo resultados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del alcance, pero lo típico es ver orden operativo visible en las primeras 2 a 4 semanas. En 60 a 90 días tu empresa debería funcionar con menos dependencia de ti, con procesos definidos y visibilidad clara de la operación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo manejan lo contable y legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Methodica se enfoca en gestión empresarial, estructura y operaciones. El respaldo contable y legal lo integramos vía aliados estratégicos de confianza — puedes mantener a los profesionales que ya tienes o apoyarte en los que te recomendamos. Un solo punto de contacto, todo coordinado.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa con mi información confidencial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toda la información de tu empresa está cubierta por cláusulas de confidencialidad desde el primer contacto. Al cierre del servicio, los procesos, documentos y sistemas implementados quedan contigo — no hay lock-in ni dependencia de Methodica para que tu empresa siga operando.",
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

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__left">
              <h1 id="hero-heading" className="hero__headline animate-fade-in">
                <span className="hero__line-1">TU</span>
                <span className="hero__line-2">empresa, sin</span>
                <span className="hero__line-3">
                  DEPENDER DE TI<span className="hero__dot">.</span>
                </span>
              </h1>
            </div>
            <div className="hero__right animate-fade-in animate-delay-2">
              <p className="hero__sub">
                Consultoría de gestión empresarial para startups y empresas de
                servicios en Perú. Diseñamos y operamos la estructura, procesos
                y gestión de tu empresa — para que crezca con orden y tú
                recuperes tu tiempo.
              </p>
              <Link href="#contacto" className="btn btn--vermillion">
                Agendar Consulta Gratuita
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
              Cuanto mejor van las ventas,{" "}
              <strong>más tensión interna se genera</strong>. Sin estructura,
              el crecimiento multiplica el desorden en lugar de reducirlo.
            </h2>
          </div>

          <div className="pain__grid">
            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                01
              </span>
              <div className="pain__content">
                <h3>Todo pasa por ti.</h3>
                <p>
                  La empresa no avanza sin tu intervención. Cada decisión, cada
                  proceso, cada cliente nuevo termina en tu escritorio — y el
                  crecimiento se vuelve insostenible.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                02
              </span>
              <div className="pain__content">
                <h3>Cada nuevo cliente obliga a improvisar.</h3>
                <p>
                  Lo que funcionó al inicio, hoy se rompe. Sin procesos
                  definidos, el equipo no tiene claridad y cada entrega cuesta
                  más de lo que debería.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                03
              </span>
              <div className="pain__content">
                <h3>Decides a ciegas.</h3>
                <p>
                  Sabes que el negocio vende, pero no sabes cuánto queda. Sin
                  visibilidad real de márgenes y operación, cada decisión es un
                  salto al vacío.
                </p>
              </div>
            </article>

            <article className="pain__item">
              <span className="pain__number" aria-hidden="true">
                04
              </span>
              <div className="pain__content">
                <h3>La administración te consume.</h3>
                <p>
                  Trámites, documentación, cumplimiento, coordinación. Tareas
                  que deberían fluir solas te roban horas clave que deberías
                  invertir en crecer.
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
            Diseñamos la estructura, ordenamos los procesos y operamos la
            gestión administrativa de tu empresa. El respaldo contable y legal
            viene integrado vía aliados estratégicos — un solo punto de
            contacto para todo lo que tu empresa necesita.
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
              Dos pilares para que
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
                operar con claridad. Definimos roles, flujos y sistemas para
                que el negocio funcione con orden desde su base — sin depender
                de ti para cada decisión.
              </p>
            </article>

            <article className="service">
              <span className="service__number" aria-hidden="true">
                02
              </span>
              <h3 className="service__name">
                Implementación y Orden Administrativo
              </h3>
              <p className="service__desc">
                Ejecutamos y organizamos la gestión administrativa del día a
                día. Trámites, documentación, coordinación y cumplimiento
                resueltos para que tú te enfoques en hacer crecer el negocio.
              </p>
            </article>
          </div>

          <p className="services__complement">
            <strong>+ Respaldo contable y legal integrado</strong> vía aliados
            estratégicos de confianza. Un solo punto de contacto, todo
            coordinado — sin que tengas que manejar múltiples proveedores por
            tu cuenta.
          </p>
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
              De desordenado a operando con estructura
              <br />
              en cuatro pasos claros.
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
                  Reunión inicial de 30 minutos, sin costo y sin compromiso.
                  Entendemos cómo funciona tu empresa hoy: estructura,
                  procesos y desafíos operativos.
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
                  Te entregamos una lectura clara del estado actual y las
                  prioridades para avanzar con impacto real.
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
                  sorpresas, sin propuestas infladas, sin compromisos de largo
                  plazo forzados.
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
                  Ejecutamos el plan contigo y con tu equipo — no te dejamos un
                  PowerPoint. Ajustamos sobre la marcha hasta que tu empresa
                  funcione con orden.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* SOBRE METHODICA / FOUNDER */}
      {/* TODO: Reemplazar [TU NOMBRE], [TU BACKGROUND] y [TU URL DE LINKEDIN] con contenido real antes de lanzar. */}
      <section className="about" id="sobre" aria-labelledby="about-heading">
        <div className="container">
          <div className="about__layout">
            <div className="about__left">
              <span className="about__label">Quién está detrás</span>
              <h2 id="about-heading" className="about__title">
                Methodica nació para founders peruanos que necesitan ordenar su
                empresa, no contratar otro contador.
              </h2>
            </div>
            <div className="about__right">
              <p className="about__bio">
                La mayoría de founders en Perú no necesitan otro proveedor
                transaccional — necesitan alguien que diseñe y opere la
                estructura de su empresa para que puedan dejar de ser cuello de
                botella. Por eso existe Methodica.
              </p>
              <p className="about__bio">
                Trabajamos con founders de startups, negocios digitales y
                empresas de servicios en Perú que quieren profesionalizar su
                operación antes de que el desorden se convierta en un problema.
              </p>
              <p className="about__bio about__bio--placeholder">
                <em>
                  [TU NOMBRE] fundó Methodica después de [TU BACKGROUND en 1-2
                  líneas].
                </em>
              </p>
              <a
                href="[TU URL DE LINKEDIN]"
                className="about__linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conectar en LinkedIn →
              </a>
            </div>
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
              <FaqItem question="¿Qué pasa en la primera consulta?">
                Es una reunión de 30 minutos, sin costo y sin compromiso.
                Entendemos cómo funciona tu empresa hoy: estructura, procesos
                y desafíos. Salimos con una lectura inicial de qué tendría
                sentido ordenar primero y cómo podría verse un plan de
                trabajo.
              </FaqItem>

              <FaqItem question="¿Para qué tipo de empresas es Methodica?">
                Trabajamos con startups, negocios digitales y empresas de
                servicios en Perú que están en etapa de crecimiento y
                necesitan estructura para escalar con orden. Nuestro enfoque
                es para empresas que quieren profesionalizar su operación
                antes de que el desorden se convierta en un problema.
              </FaqItem>

              <FaqItem question="¿En cuánto tiempo veo resultados?">
                Depende del alcance, pero lo típico es ver orden operativo
                visible en las primeras 2 a 4 semanas. En 60 a 90 días tu
                empresa debería funcionar con menos dependencia de ti, con
                procesos definidos y visibilidad clara de la operación.
              </FaqItem>

              <FaqItem question="¿Cómo manejan lo contable y legal?">
                Methodica se enfoca en gestión empresarial, estructura y
                operaciones. El respaldo contable y legal lo integramos vía
                aliados estratégicos de confianza — puedes mantener a los
                profesionales que ya tienes o apoyarte en los que te
                recomendamos. Un solo punto de contacto, todo coordinado.
              </FaqItem>

              <FaqItem question="¿Qué pasa con mi información confidencial?">
                Toda la información de tu empresa está cubierta por cláusulas
                de confidencialidad desde el primer contacto. Al cierre del
                servicio, los procesos, documentos y sistemas implementados
                quedan contigo — no hay lock-in ni dependencia de Methodica
                para que tu empresa siga operando.
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
                <span className="light">El momento de ordenar tu empresa es</span>
                AHORA<span className="text-vermillion">.</span>
              </h2>
              <p className="final-cta__sub">
                Agenda una consulta gratuita de 30 minutos. Te mostramos qué
                tiene sentido ordenar primero en tu empresa — sin compromisos,
                sin propuestas agresivas, solo claridad sobre el próximo paso.
              </p>
            </div>
            <div className="final-cta__right">
              <ContactForm />
            </div>
          </div>
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
                  <Link href="#sobre">Sobre Methodica</Link>
                </li>
                <li>
                  <Link href="#faq">FAQ</Link>
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
