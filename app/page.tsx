const sections = [
  { number: '01', title: 'Quién es Salvador', note: 'La base del sistema' },
  { number: '02', title: 'Cómo funciona su cabeza', note: 'Procesos internos' },
  { number: '03', title: 'Cómo hablar con él', note: 'Protocolos de comunicación' },
  { number: '04', title: '200 razones para salir con Salvador', note: 'Beneficios no verificados' },
  { number: '05', title: 'Su mundo', note: 'Contexto y coordenadas' },
  { number: '06', title: 'Sus cosas', note: 'Preferencias detectadas' },
  { number: '07', title: 'Errores conocidos', note: 'Limitaciones del sistema' },
  { number: '08', title: 'Preguntas frecuentes', note: 'Dudas habituales' },
]

function SectionCard({ number, title, note }: (typeof sections)[number]) {
  return (
    <a className="manual-card" href={`#seccion-${number}`}>
      <span className="manual-card-number">{number}</span>
      <span className="manual-card-copy">
        <strong>{title}</strong>
        <small>{note}</small>
      </span>
      <span className="manual-card-arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export default function Page() {
  return (
    <main className="manual-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">S<span>·</span>J</a>
        <div className="header-status"><span className="status-dot" /> SISTEMA EN LÍNEA</div>
      </header>

      <section className="hero" id="inicio">
        <div className="eyebrow"><span>MANUAL DE USUARIO</span><span className="eyebrow-line" /></div>
        <h1>Salvador<br /><em>Juárez</em></h1>
        <div className="hero-meta">
          <span>Versión 1.0</span>
          <span className="meta-divider">/</span>
          <span>Estado del sistema: <b><i /> OPERATIVO</b></span>
        </div>
        <p className="hero-quote">«Porque aparentemente conocerme<br className="mobile-break" /> necesitaba documentación.»</p>
        <a className="enter-button" href="#manual">ENTRAR AL MANUAL <span>→</span></a>
      </section>

      <section className="manual-index" id="manual" aria-labelledby="manual-title">
        <div className="section-heading">
          <div><span className="section-kicker">ÍNDICE / 00</span><h2 id="manual-title">El manual</h2></div>
          <p>Una guía breve, bastante honesta<br />y con algún que otro bug.</p>
        </div>
        <div className="cards-grid">
          {sections.map((section) => <SectionCard key={section.number} {...section} />)}
        </div>
      </section>

      <section className="salvador-section" id="seccion-01" aria-labelledby="salvador-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 01</span><h2 id="salvador-title">Quién es<br /><em>Salvador</em></h2></div>
          <p>Una primera aproximación<br />al sistema que hay detrás.</p>
        </div>
        <div className="salvador-intro">
          <p>Salvador es una persona curiosa, creativa y bastante orientada a construir cosas. Es programador y estudiante, sí, pero su personalidad no gira únicamente alrededor de la programación. Le gusta aprender, experimentar, crear proyectos y encontrar soluciones cuando aparece un problema.</p>
          <p>Tiene una cabeza bastante inquieta: puede estar pensando en una aplicación, después en una idea para un proyecto, luego en música y cinco minutos después estar hablando de aviones. Le gusta entender cómo funcionan las cosas y, cuando algo le interesa de verdad, puede meterse completamente en el tema.</p>
          <p>Disfruta hacer las cosas a su manera. No necesita que todo esté perfectamente planeado para empezar: muchas veces arranca con una idea y termina construyendo algo bastante más grande.</p>
        </div>
        <div className="highlight-block">
          <span className="highlight-label">EN POCAS PALABRAS</span>
          <p>«Curioso. Creativo. Técnico. Intenso con lo que le importa.<br className="desktop-break" /> Bastante independiente. Y con una capacidad cuestionable<br className="desktop-break" /> para tener una sola idea a la vez.»</p>
        </div>
        <div className="traits-grid">
          <article className="trait-card"><span className="trait-icon" aria-hidden="true">🧠</span><div><h3>Curioso</h3><p>Siempre quiere saber cómo funcionan las cosas.</p></div></article>
          <article className="trait-card"><span className="trait-icon" aria-hidden="true">🛠️</span><div><h3>Constructor</h3><p>Si puede crear una solución en lugar de simplemente hablar de ella, probablemente la va a crear.</p></div></article>
          <article className="trait-card"><span className="trait-icon" aria-hidden="true">🎧</span><div><h3>Creativo</h3><p>La tecnología no es su único mundo. También encuentra formas de expresarse a través de la música.</p></div></article>
          <article className="trait-card"><span className="trait-icon" aria-hidden="true">✈️</span><div><h3>Multifunción</h3><p>Programación, música, tecnología, aviación y probablemente alguna nueva obsesión que todavía no conocemos.</p></div></article>
        </div>
        <p className="section-closing">«Si después de leer esto todavía no entendés del todo a Salvador, tranquilo. Recién arrancamos.»</p>
      </section>

      <section className="mind-section" id="seccion-02" aria-labelledby="mind-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 02</span><h2 id="mind-title">Cómo funciona<br /><em>su cabeza</em></h2></div>
          <p>Procesos internos<br />con demasiadas pestañas abiertas.</p>
        </div>
        <div className="mind-intro">
          <p>La cabeza de Salvador rara vez está en modo reposo.</p>
          <p>Cuando algo le interesa, empieza a darle vueltas, buscar cómo funciona, imaginar posibilidades y pensar cómo podría hacerlo mejor.</p>
          <p>El problema es que una idea rara vez llega sola.</p>
        </div>
        <div className="process-block">
          <span className="highlight-label">EL PROCESO TÍPICO</span>
          <div className="process-flow" aria-label="Idea, curiosidad, investigación, y si, proyecto, versión 2, otra idea">
            {['Idea', 'Curiosidad', 'Investigación', '“¿Y si…?”', 'Proyecto', 'Versión 2', 'Otra idea'].map((step, index) => (
              <span className="process-step" key={step}><b>{step}</b>{index < 6 && <i aria-hidden="true">→</i>}</span>
            ))}
          </div>
          <p className="process-note">Y en algún punto probablemente aparezca una versión 7 que nadie había pedido.</p>
        </div>
        <div className="mind-cards">
          <article className="mind-card"><span className="mind-icon" aria-hidden="true">💡</span><div><h3>Siempre hay una idea</h3><p>Puede estar haciendo cualquier cosa y de repente aparecer una idea nueva.</p></div></article>
          <article className="mind-card"><span className="mind-icon" aria-hidden="true">🔎</span><div><h3>Necesita entender</h3><p>No le alcanza demasiado con saber que algo funciona. También quiere saber por qué funciona.</p></div></article>
          <article className="mind-card"><span className="mind-icon" aria-hidden="true">🛠️</span><div><h3>Tiende a construir</h3><p>Si encuentra un problema, su primera reacción muchas veces es pensar cómo solucionarlo.</p></div></article>
          <article className="mind-card"><span className="mind-icon" aria-hidden="true">🚀</span><div><h3>Se entusiasma</h3><p>Cuando algo realmente le interesa, se mete de lleno. Puede pasar horas concentrado en una sola cosa sin darse cuenta.</p></div></article>
        </div>
        <div className="mind-callouts">
          <article className="mind-callout warning"><span className="highlight-label">UNA ADVERTENCIA IMPORTANTE</span><h3>“¿Y si hacemos esto?”</h3><p>Nunca preguntes eso cerca de Salvador si no estás preparado para que exista un proyecto relacionado con eso.</p></article>
          <article className="mind-callout"><span className="highlight-label">MULTITAREA, PERO A SU MANERA</span><h3>Demasiadas pestañas abiertas</h3><p>Salvador puede estar pensando en programación, música, un proyecto nuevo y un avión prácticamente al mismo tiempo.</p><p>No significa que esté perdido. Probablemente simplemente tenga demasiadas pestañas abiertas en la cabeza.</p></article>
        </div>
        <p className="section-closing mind-closing">En resumen: Salvador no suele quedarse demasiado tiempo pensando “qué podría hacer”.<br /><br />En algún momento empieza a pensar:</p>
        <p className="mind-final">“Bueno... ¿y si lo hacemos?”</p>
      </section>

      <section className="talk-section" id="seccion-03" aria-labelledby="talk-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 03</span><h2 id="talk-title">Cómo hablar<br /><em>con él</em></h2></div>
          <p>Protocolo de comunicación<br />simple y sin vueltas.</p>
        </div>
        <div className="talk-intro">
          <p>Hablar con Salvador no requiere un manual demasiado complicado.</p>
          <p>Podés contarle cualquier cosa. Probablemente la conversación termine pasando por algún lugar inesperado, pero eso también forma parte del encanto.</p>
        </div>
        <div className="talk-cards">
          <article className="talk-card"><span className="talk-icon" aria-hidden="true">💬</span><div><h3>Habla normal</h3><p>Salvador no necesita conversaciones extremadamente estructuradas. Podés hablarle de cualquier cosa. Probablemente termine apareciendo algún tema inesperado en el camino.</p></div></article>
          <article className="talk-card"><span className="talk-icon" aria-hidden="true">😂</span><div><h3>El humor ayuda</h3><p>Le gusta mucho el humor, las respuestas espontáneas y las conversaciones que no se sienten forzadas. Un poco de boludeo puede funcionar perfectamente como método de comunicación.</p></div></article>
          <article className="talk-card"><span className="talk-icon" aria-hidden="true">🎯</span><div><h3>Mejor directo que complicado</h3><p>Si querés decirle algo, decíselo. Salvador suele valorar más la sinceridad que tener que interpretar indirectas durante tres horas.</p></div></article>
          <article className="talk-card"><span className="talk-icon" aria-hidden="true">🧠</span><div><h3>Si pregunta “¿por qué?”</h3><p>No necesariamente está cuestionándote. Muchas veces simplemente quiere entender. Su curiosidad puede convertir una pregunta sencilla en una conversación de media hora.</p></div></article>
          <article className="talk-card talk-card-wide"><span className="talk-icon" aria-hidden="true">🛠️</span><div><h3>Si le contás un problema...</h3><p>Existe una posibilidad considerable de que intente solucionarlo. No porque crea que tiene que arreglar la vida de todo el mundo, sino porque su cerebro naturalmente piensa en soluciones.</p></div></article>
        </div>
        <div className="talk-callout"><span className="highlight-label">⚠️ ADVERTENCIA</span><p>Si empezás una frase con “¿sabés qué estaría bueno...?”, existe riesgo de que Salvador quiera hacerlo realidad.</p></div>
        <div className="protocol-block"><span className="highlight-label">🗣️ PROTOCOLO RECOMENDADO</span><div className="protocol-list"><span>Sé vos mismo.</span><span>Decí las cosas de frente.</span><span>No hace falta pensar demasiado qué decir.</span></div></div>
        <p className="section-closing talk-closing">“No necesitás aprender a hablar con Salvador. Solamente hablar con Salvador.”</p>
      </section>

      <section className="reasons-section" id="seccion-04" aria-labelledby="reasons-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 04</span><h2 id="reasons-title">200 razones<br /><em>para salir con Salvador</em></h2></div>
          <p>Una evaluación objetiva<br />que perdió objetividad rápido.</p>
        </div>
        <div className="reasons-intro"><p>El manual eventualmente tenía que responder la pregunta importante:</p><p className="reasons-question">“Bueno, ¿y por qué debería salir con este tipo?”</p></div>
        <div className="reason-group">
          <span className="highlight-label">RAZONES HUMANAS</span>
          <div className="reasons-grid">
            {['Te escucha.', 'Respeta tus tiempos.', 'No le gusta forzar las cosas.', 'Si le importás, se nota en las acciones.', 'Le gusta hacer sentir cómoda a la gente.', 'Valora la sinceridad.', 'No espera que seas perfecta.', 'Puede hablar durante horas de algo que le apasiona.', 'Le gusta hacer reír.', 'Se acuerda de pequeños detalles.', 'Si puede ayudarte, probablemente lo intente.', 'Podés ser vos misma.'].map((reason) => <span className="reason-chip" key={reason}>{reason}</span>)}
          </div>
        </div>
        <div className="reason-group">
          <span className="highlight-label">RAZONES IMPORTANTES</span>
          <div className="reasons-grid reasons-grid-absurd">
            {['Probablemente pueda arreglar tu computadora.', 'Si tu Wi-Fi falla, existe una posibilidad de que intente solucionarlo.', 'Tiene más proyectos que días de la semana.', 'Puede convertir una conversación normal en una idea de proyecto.', 'Dice “es una boludez” y después construye algo durante seis horas.', 'Tiene aproximadamente 47 pestañas abiertas en la cabeza.', 'Puede hablar de tecnología y terminar hablando de aviones.', 'Si decís “¿y si hacemos...?”, asumí las consecuencias.', 'Tiene una preocupante facilidad para crear versiones nuevas de cosas que ya funcionaban.', 'Puede pasar de programar a producir música sin pedir permiso al sistema operativo.'].map((reason) => <span className="reason-chip" key={reason}>{reason}</span>)}
          </div>
        </div>
        <div className="reason-group">
          <span className="highlight-label">RAZONES PARA EL DÍA A DÍA</span>
          <div className="reasons-grid reasons-grid-daily">
            {['Le gusta compartir lo que le apasiona.', 'Es curioso.', 'Es creativo.', 'Tiene iniciativa.', 'Busca soluciones.', 'Le gusta aprender.', 'Tiene proyectos propios.', 'No se queda demasiado tiempo quieto.', 'Le entusiasman las ideas.', 'Cuando algo realmente le importa, se involucra.'].map((reason) => <span className="reason-chip" key={reason}>{reason}</span>)}
          </div>
        </div>
        <div className="terms-block"><span className="highlight-label">TÉRMINOS Y CONDICIONES</span><p>Al salir con Salvador aceptás automáticamente:</p><ul><li>escuchar “se me ocurrió algo” con frecuencia indeterminada.</li><li>recibir explicaciones técnicas que no pediste.</li><li>aceptar que probablemente exista una versión 2.</li><li>tolerar conversaciones que pueden cambiar de tema sin previo aviso.</li><li>entender que “una idea rápida” puede convertirse en un proyecto.</li><li>asumir que eventualmente aparecerá algún avión en la conversación.</li></ul></div>
        <div className="reason-counter"><strong>200<span>+</span></strong><span className="counter-label">RAZONES DOCUMENTADAS</span><p>“Las otras 173 razones probablemente aparezcan durante el proceso de conocerlo.”</p></div>
        <div className="number-one"><span className="highlight-label">RAZÓN #1</span><p>Porque con Salvador no necesitás fingir ser alguien más.</p><p>Si funciona, funciona.<br />Si no funciona, se habla.<br />Y si aparece un problema...</p><p>bueno, probablemente intente solucionarlo. 😂</p></div>
      </section>

      <section className="world-section" id="seccion-05" aria-labelledby="world-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 05</span><h2 id="world-title">Su<br /><em>mundo</em></h2></div>
          <p>Demasiadas expansiones<br />instaladas de fábrica.</p>
        </div>
        <p className="world-intro">“El problema de intentar explicar el mundo de Salvador es que aparentemente viene con demasiadas expansiones instaladas.”</p>
        <div className="world-grid">
          <article className="world-card world-tech"><span className="world-icon" aria-hidden="true">💻</span><div><span className="world-tag">01 / SISTEMAS</span><h3>Tecnología</h3><p>Programación, software, sistemas y proyectos. Salvador disfruta entender cómo funcionan las cosas y, sobre todo, construirlas. No se conforma demasiado con usar algo cuando también puede preguntarse cómo está hecho.</p><q>Si puede construirlo, probablemente quiera intentarlo.</q></div></article>
          <article className="world-card world-music"><span className="world-icon" aria-hidden="true">🎧</span><div><span className="world-tag">02 / FRECUENCIAS</span><h3>Música</h3><p>La música es una parte importante de su lado creativo. Produce música electrónica y tiene su propio proyecto musical, Reload Souls.</p><q>Porque aparentemente programar no era suficiente para mantener ocupada la cabeza.</q></div></article>
          <article className="world-card world-aviation"><span className="world-icon" aria-hidden="true">✈️</span><div><span className="world-tag">03 / ALTITUD</span><h3>Aviación</h3><p>Los aviones son otra de sus grandes obsesiones e intereses. Le interesa la parte técnica, los sistemas, los procedimientos y simplemente todo lo que tenga que ver con volar.</p><q>Puede pasar de hablar de código a explicar por qué un avión hace determinada cosa sin transición alguna.</q></div></article>
          <article className="world-card world-projects"><span className="world-icon" aria-hidden="true">🚀</span><div><span className="world-tag">04 / ITERACIONES</span><h3>Ideas y proyectos</h3><p>Salvador suele convertir ideas en proyectos reales. Puede empezar con una idea pequeña y terminar construyendo algo mucho más grande.</p><div className="world-flow">IDEA <i>→</i> EXPERIMENTO <i>→</i> PROYECTO <i>→</i> V2 <i>→</i> V3 <i>→</i> “SE ME OCURRIÓ OTRA COSA”</div><q>La versión final es un concepto teórico.</q></div></article>
        </div>
        <div className="world-common"><span className="highlight-label">🧩 UNA COSA EN COMÚN</span><p className="world-common-lead">Tecnología. Música. Aviación. Proyectos.</p><p>Parecen cosas completamente distintas. Para Salvador tienen algo en común: <strong>curiosidad.</strong></p><p>Le gusta entender cómo funcionan las cosas, aprender y ver hasta dónde puede llevarlas.</p></div>
        <div className="world-warning"><span className="highlight-label">⚠️ POSIBLE EFECTO SECUNDARIO</span><p>“Si estás hablando con Salvador y de repente la conversación pasa de una aplicación a un avión, de un avión a música y de música a una idea para una app...</p><p>No se rompió.<br />Es así.”</p></div>
      </section>

      <section className="faq-section" id="seccion-08" aria-labelledby="faq-title">
        <div className="section-heading section-heading-left">
          <div><span className="section-kicker">SECCIÓN / 08</span><h2 id="faq-title">Preguntas<br /><em>frecuentes</em></h2></div>
          <p>Dudas habituales<br />sobre el sistema.</p>
        </div>
        <div className="faq-status"><span>CURRENT VERSION: 1.0</span><span>STATUS: STILL BUILDING</span></div>
        <div className="faq-list">
          <details open><summary>¿Por qué tiene tantos proyectos?</summary><p>Porque una idea le lleva a otra. Y aparentemente su cerebro no conoce el concepto de “una sola cosa a la vez”.</p></details>
          <details><summary>¿Siempre está pensando en algo?</summary><p>Bastante seguido. Si parece estar mirando al vacío, probablemente esté procesando una idea.</p></details>
          <details><summary>¿Por qué habla tanto de tecnología?</summary><p>Porque le gusta entender cómo funcionan las cosas. Y porque probablemente ya convirtió alguna conversación en una explicación técnica sin darse cuenta.</p></details>
          <details><summary>¿Por qué puede empezar hablando de una cosa y terminar hablando de un avión?</summary><p>No hay una explicación oficial. Se recomienda simplemente disfrutar el recorrido.</p></details>
          <details><summary>¿Tiene una versión final?</summary><p>No encontrada.</p></details>
          <details><summary>¿Es complicado de entender?</summary><p>Al principio quizás un poco. Pero en realidad no hace falta entender absolutamente todo. Conocerlo lleva tiempo, como cualquier persona.</p></details>
          <details><summary>¿Qué pasa si aparece un bug?</summary><p>Se habla, se entiende qué pasó y se intenta solucionar.</p></details>
          <details><summary>¿Qué pasa si dice “se me ocurrió algo”?</summary><p>Corré.</p></details>
          <details className="faq-human"><summary>¿Qué es lo más importante que hay que saber de Salvador?</summary><p>Que detrás de todas las ideas, proyectos, código, música y obsesiones raras, sigue siendo una persona que simplemente quiere hacer cosas que le entusiasmen, aprender y compartir momentos con gente con la que pueda ser él mismo.</p></details>
        </div>
        <div className="system-complete">
          <span className="highlight-label">MANUAL DE USUARIO — SALVADOR JUÁREZ</span>
          <p className="system-version">Versión 1.0</p>
          <p className="system-status"><i /> DOCUMENTACIÓN COMPLETADA</p>
          <p className="system-quote">“Bueno. Ahora ya tenés una idea bastante decente de cómo funciona Salvador.”</p>
          <p className="system-last">“El resto no se documenta.<br />Se conoce.”</p>
          <a className="back-home" href="#inicio">VOLVER AL INICIO <span>↗</span></a>
          <small>© Salvador Juárez — Hecho con curiosidad.</small>
        </div>
      </section>

      <section className="ready-note" aria-label="Nota del sistema">
        <span className="ready-icon">⌁</span>
        <p>Este manual se encuentra en construcción.<br /><span>La versión más auténtica se actualiza hablando.</span></p>
      </section>

      <footer><span>MJ / S. JUÁREZ</span><span>Hecho con curiosidad y un poco de código.</span><span>© 2024 — V1.0</span></footer>
    </main>
  )
}

export { sections }

// Las anclas de cada tarjeta quedan preparadas para el contenido detallado de la siguiente versión.
for (const section of sections) {
  void section
}

// Secciones reservadas para futuras versiones del manual.
export function ReservedSections() {
  return <div className="reserved-sections" aria-hidden="true">{sections.map(({ number }) => <span key={number} id={`seccion-${number}`} />)}</div>
}

// Mantiene los destinos de navegación dentro de la página sin agregar contenido inventado.
void ReservedSections

