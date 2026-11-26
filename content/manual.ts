/**
 * Contenido del manual. Cada sección es una lista de bloques tipados que
 * `components/manual/Blocks.tsx` sabe renderizar. Para agregar una sección
 * nueva alcanza con sumar un objeto a `sections`.
 */

export type IconName =
  | 'brain'
  | 'wrench'
  | 'headphones'
  | 'plane'
  | 'lightbulb'
  | 'search'
  | 'rocket'
  | 'message'
  | 'laugh'
  | 'target'
  | 'laptop'
  | 'coffee'
  | 'heart'
  | 'globe'
  | 'puzzle'
  | 'alert'
  | 'radio'

export type Block =
  | { type: 'prose'; paragraphs: string[]; columns?: 2 | 3 }
  | { type: 'pull'; label?: string; text: string; tone?: 'ink' | 'accent' }
  | {
      type: 'cards'
      label?: string
      columns?: 2 | 4
      items: { icon: IconName; title: string; body: string[]; tag?: string; quote?: string; flow?: string[]; wide?: boolean }[]
    }
  | { type: 'flow'; label: string; steps: string[]; note: string }
  | { type: 'callouts'; items: { label: string; title?: string; paragraphs: string[]; tone: 'accent' | 'blue' }[] }
  | { type: 'chips'; label: string; items: string[]; variant?: 'pill' | 'box' | 'line' }
  | { type: 'list'; label: string; intro: string; items: string[] }
  | { type: 'protocol'; label: string; items: string[] }
  | { type: 'counter'; value: string; suffix: string; label: string; note: string }
  | { type: 'reason-one'; label: string; lead: string; lines: string; end: string }
  | { type: 'status'; items: { key: string; value: string }[] }
  | { type: 'faq'; items: { q: string; a: string; highlight?: boolean }[] }
  | { type: 'note'; label: string; paragraphs: string[] }
  | { type: 'closing'; paragraphs: string[]; final?: string }
  | { type: 'blank' }
  | {
      type: 'complete'
      label: string
      version: string
      status: string
      quote: string
      last: string
      copyright: string
    }

export type Section = {
  number: string
  id: string
  /** Título corto para el índice y la navegación. */
  title: string
  /** Título largo del encabezado. Se parte en dos líneas: la segunda va en cursiva. */
  heading: [string, string]
  note: string
  subtitle: string
  blocks: Block[]
}

export const manual = {
  docNumber: 'SJ-001',
  revision: '1.0',
  name: 'Salvador Juárez',
  firstName: 'Salvador',
  lastName: 'Juárez',
  description: 'Una guía breve, cálida y bastante honesta para entender un poco mejor a Salvador.',
  heroQuote: '«Porque aparentemente conocerme necesitaba documentación.»',
  indexTagline: 'Una guía breve, bastante honesta\ny con algún que otro bug.',
  readyNote: 'Este manual se encuentra en construcción.',
  readyNoteSub: 'La versión más auténtica se actualiza hablando.',
  footerLine: 'Hecho con curiosidad y un poco de código.',
}

export const sections: Section[] = [
  {
    number: '01',
    id: 'seccion-01',
    title: 'Quién es Salvador',
    heading: ['Quién es', 'Salvador'],
    note: 'La base del sistema',
    subtitle: 'Una primera aproximación\nal sistema que hay detrás.',
    blocks: [
      {
        type: 'prose',
        columns: 3,
        paragraphs: [
          'Salvador es una persona curiosa, creativa y bastante orientada a construir cosas. Es programador y estudiante, sí, pero su personalidad no gira únicamente alrededor de la programación. Le gusta aprender, experimentar, crear proyectos y encontrar soluciones cuando aparece un problema.',
          'Tiene una cabeza bastante inquieta: puede estar pensando en una aplicación, después en una idea para un proyecto, luego en música y cinco minutos después estar hablando de aviones. Le gusta entender cómo funcionan las cosas y, cuando algo le interesa de verdad, puede meterse completamente en el tema.',
          'Disfruta hacer las cosas a su manera. No necesita que todo esté perfectamente planeado para empezar: muchas veces arranca con una idea y termina construyendo algo bastante más grande.',
        ],
      },
      {
        type: 'pull',
        label: 'En pocas palabras',
        text: '«Curioso. Creativo. Técnico. Intenso con lo que le importa. Bastante independiente. Y con una capacidad cuestionable para tener una sola idea a la vez.»',
      },
      {
        type: 'cards',
        columns: 4,
        items: [
          { icon: 'brain', title: 'Curioso', body: ['Siempre quiere saber cómo funcionan las cosas.'] },
          { icon: 'wrench', title: 'Constructor', body: ['Si puede crear una solución en lugar de simplemente hablar de ella, probablemente la va a crear.'] },
          { icon: 'headphones', title: 'Creativo', body: ['La tecnología no es su único mundo. También encuentra formas de expresarse a través de la música.'] },
          { icon: 'plane', title: 'Multifunción', body: ['Programación, música, tecnología, aviación y probablemente alguna nueva obsesión que todavía no conocemos.'] },
        ],
      },
      {
        type: 'closing',
        paragraphs: ['«Si después de leer esto todavía no entendés del todo a Salvador, tranquilo. Recién arrancamos.»'],
      },
    ],
  },
  {
    number: '02',
    id: 'seccion-02',
    title: 'Cómo funciona su cabeza',
    heading: ['Cómo funciona', 'su cabeza'],
    note: 'Procesos internos',
    subtitle: 'Procesos internos\ncon demasiadas pestañas abiertas.',
    blocks: [
      {
        type: 'prose',
        columns: 3,
        paragraphs: [
          'La cabeza de Salvador rara vez está en modo reposo.',
          'Cuando algo le interesa, empieza a darle vueltas, buscar cómo funciona, imaginar posibilidades y pensar cómo podría hacerlo mejor.',
          'El problema es que una idea rara vez llega sola.',
        ],
      },
      {
        type: 'flow',
        label: 'El proceso típico',
        steps: ['Idea', 'Curiosidad', 'Investigación', '“¿Y si…?”', 'Proyecto', 'Versión 2', 'Otra idea'],
        note: 'Y en algún punto probablemente aparezca una versión 7 que nadie había pedido.',
      },
      {
        type: 'cards',
        columns: 4,
        items: [
          { icon: 'lightbulb', title: 'Siempre hay una idea', body: ['Puede estar haciendo cualquier cosa y de repente aparecer una idea nueva.'] },
          { icon: 'search', title: 'Necesita entender', body: ['No le alcanza demasiado con saber que algo funciona. También quiere saber por qué funciona.'] },
          { icon: 'wrench', title: 'Tiende a construir', body: ['Si encuentra un problema, su primera reacción muchas veces es pensar cómo solucionarlo.'] },
          { icon: 'rocket', title: 'Se entusiasma', body: ['Cuando algo realmente le interesa, se mete de lleno. Puede pasar horas concentrado en una sola cosa sin darse cuenta.'] },
        ],
      },
      {
        type: 'callouts',
        items: [
          {
            label: 'Una advertencia importante',
            title: '“¿Y si hacemos esto?”',
            paragraphs: ['Nunca preguntes eso cerca de Salvador si no estás preparado para que exista un proyecto relacionado con eso.'],
            tone: 'accent',
          },
          {
            label: 'Multitarea, pero a su manera',
            title: 'Demasiadas pestañas abiertas',
            paragraphs: [
              'Salvador puede estar pensando en programación, música, un proyecto nuevo y un avión prácticamente al mismo tiempo.',
              'No significa que esté perdido. Probablemente simplemente tenga demasiadas pestañas abiertas en la cabeza.',
            ],
            tone: 'blue',
          },
        ],
      },
      {
        type: 'closing',
        paragraphs: ['En resumen: Salvador no suele quedarse demasiado tiempo pensando “qué podría hacer”.', 'En algún momento empieza a pensar:'],
        final: '“Bueno... ¿y si lo hacemos?”',
      },
    ],
  },
  {
    number: '03',
    id: 'seccion-03',
    title: 'Cómo hablar con él',
    heading: ['Cómo hablar', 'con él'],
    note: 'Protocolos de comunicación',
    subtitle: 'Protocolo de comunicación\nsimple y sin vueltas.',
    blocks: [
      {
        type: 'prose',
        columns: 2,
        paragraphs: [
          'Hablar con Salvador no requiere un manual demasiado complicado.',
          'Podés contarle cualquier cosa. Probablemente la conversación termine pasando por algún lugar inesperado, pero eso también forma parte del encanto.',
        ],
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          { icon: 'message', title: 'Habla normal', body: ['Salvador no necesita conversaciones extremadamente estructuradas. Podés hablarle de cualquier cosa. Probablemente termine apareciendo algún tema inesperado en el camino.'] },
          { icon: 'laugh', title: 'El humor ayuda', body: ['Le gusta mucho el humor, las respuestas espontáneas y las conversaciones que no se sienten forzadas. Un poco de boludeo puede funcionar perfectamente como método de comunicación.'] },
          { icon: 'target', title: 'Mejor directo que complicado', body: ['Si querés decirle algo, decíselo. Salvador suele valorar más la sinceridad que tener que interpretar indirectas durante tres horas.'] },
          { icon: 'brain', title: 'Si pregunta “¿por qué?”', body: ['No necesariamente está cuestionándote. Muchas veces simplemente quiere entender. Su curiosidad puede convertir una pregunta sencilla en una conversación de media hora.'] },
          { icon: 'wrench', title: 'Si le contás un problema...', body: ['Existe una posibilidad considerable de que intente solucionarlo. No porque crea que tiene que arreglar la vida de todo el mundo, sino porque su cerebro naturalmente piensa en soluciones.'], wide: true },
        ],
      },
      {
        type: 'note',
        label: 'Advertencia',
        paragraphs: ['Si empezás una frase con “¿sabés qué estaría bueno...?”, existe riesgo de que Salvador quiera hacerlo realidad.'],
      },
      {
        type: 'protocol',
        label: 'Protocolo recomendado',
        items: ['Sé vos mismo.', 'Decí las cosas de frente.', 'No hace falta pensar demasiado qué decir.'],
      },
      {
        type: 'closing',
        paragraphs: ['“No necesitás aprender a hablar con Salvador. Solamente hablar con Salvador.”'],
      },
    ],
  },
  {
    number: '04',
    id: 'seccion-04',
    title: '200 razones para salir con Salvador',
    heading: ['200 razones', 'para salir con Salvador'],
    note: 'Beneficios no verificados',
    subtitle: 'Una evaluación objetiva\nque perdió objetividad rápido.',
    blocks: [
      { type: 'prose', paragraphs: ['El manual eventualmente tenía que responder la pregunta importante:'] },
      { type: 'pull', text: '“Bueno, ¿y por qué debería salir con este tipo?”', tone: 'accent' },
      {
        type: 'chips',
        label: 'Razones humanas',
        variant: 'pill',
        items: ['Te escucha.', 'Respeta tus tiempos.', 'No le gusta forzar las cosas.', 'Si le importás, se nota en las acciones.', 'Le gusta hacer sentir cómoda a la gente.', 'Valora la sinceridad.', 'No espera que seas perfecta.', 'Puede hablar durante horas de algo que le apasiona.', 'Le gusta hacer reír.', 'Se acuerda de pequeños detalles.', 'Si puede ayudarte, probablemente lo intente.', 'Podés ser vos misma.'],
      },
      {
        type: 'chips',
        label: 'Razones importantes',
        variant: 'box',
        items: ['Probablemente pueda arreglar tu computadora.', 'Si tu Wi-Fi falla, existe una posibilidad de que intente solucionarlo.', 'Tiene más proyectos que días de la semana.', 'Puede convertir una conversación normal en una idea de proyecto.', 'Dice “es una boludez” y después construye algo durante seis horas.', 'Tiene aproximadamente 47 pestañas abiertas en la cabeza.', 'Puede hablar de tecnología y terminar hablando de aviones.', 'Si decís “¿y si hacemos...?”, asumí las consecuencias.', 'Tiene una preocupante facilidad para crear versiones nuevas de cosas que ya funcionaban.', 'Puede pasar de programar a producir música sin pedir permiso al sistema operativo.'],
      },
      {
        type: 'chips',
        label: 'Razones para el día a día',
        variant: 'line',
        items: ['Le gusta compartir lo que le apasiona.', 'Es curioso.', 'Es creativo.', 'Tiene iniciativa.', 'Busca soluciones.', 'Le gusta aprender.', 'Tiene proyectos propios.', 'No se queda demasiado tiempo quieto.', 'Le entusiasman las ideas.', 'Cuando algo realmente le importa, se involucra.'],
      },
      {
        type: 'list',
        label: 'Términos y condiciones',
        intro: 'Al salir con Salvador aceptás automáticamente:',
        items: [
          'escuchar “se me ocurrió algo” con frecuencia indeterminada.',
          'recibir explicaciones técnicas que no pediste.',
          'aceptar que probablemente exista una versión 2.',
          'tolerar conversaciones que pueden cambiar de tema sin previo aviso.',
          'entender que “una idea rápida” puede convertirse en un proyecto.',
          'asumir que eventualmente aparecerá algún avión en la conversación.',
        ],
      },
      {
        type: 'counter',
        value: '200',
        suffix: '+',
        label: 'Razones documentadas',
        note: '“Las otras 173 razones probablemente aparezcan durante el proceso de conocerlo.”',
      },
      {
        type: 'reason-one',
        label: 'Razón #1',
        lead: 'Porque con Salvador no necesitás fingir ser alguien más.',
        lines: 'Si funciona, funciona.\nSi no funciona, se habla.\nY si aparece un problema...',
        end: 'bueno, probablemente intente solucionarlo. 😂',
      },
    ],
  },
  {
    number: '05',
    id: 'seccion-05',
    title: 'Su mundo',
    heading: ['Su', 'mundo'],
    note: 'Contexto y coordenadas',
    subtitle: 'Demasiadas expansiones\ninstaladas de fábrica.',
    blocks: [
      {
        type: 'pull',
        text: '“El problema de intentar explicar el mundo de Salvador es que aparentemente viene con demasiadas expansiones instaladas.”',
        tone: 'accent',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            icon: 'laptop',
            tag: '01 / Sistemas',
            title: 'Tecnología',
            body: ['Programación, software, sistemas y proyectos. Salvador disfruta entender cómo funcionan las cosas y, sobre todo, construirlas. No se conforma demasiado con usar algo cuando también puede preguntarse cómo está hecho.'],
            quote: 'Si puede construirlo, probablemente quiera intentarlo.',
          },
          {
            icon: 'headphones',
            tag: '02 / Frecuencias',
            title: 'Música',
            body: ['La música es una parte importante de su lado creativo. Produce música electrónica y tiene su propio proyecto musical, Reload Souls.'],
            quote: 'Porque aparentemente programar no era suficiente para mantener ocupada la cabeza.',
          },
          {
            icon: 'plane',
            tag: '03 / Altitud',
            title: 'Aviación',
            body: ['Los aviones son otra de sus grandes obsesiones e intereses. Le interesa la parte técnica, los sistemas, los procedimientos y simplemente todo lo que tenga que ver con volar.'],
            quote: 'Puede pasar de hablar de código a explicar por qué un avión hace determinada cosa sin transición alguna.',
          },
          {
            icon: 'rocket',
            tag: '04 / Iteraciones',
            title: 'Ideas y proyectos',
            body: ['Salvador suele convertir ideas en proyectos reales. Puede empezar con una idea pequeña y terminar construyendo algo mucho más grande.'],
            flow: ['Idea', 'Experimento', 'Proyecto', 'V2', 'V3', '“Se me ocurrió otra cosa”'],
            quote: 'La versión final es un concepto teórico.',
          },
        ],
      },
      {
        type: 'callouts',
        items: [
          {
            label: 'Una cosa en común',
            title: 'Tecnología. Música. Aviación. Proyectos.',
            paragraphs: [
              'Parecen cosas completamente distintas. Para Salvador tienen algo en común: curiosidad.',
              'Le gusta entender cómo funcionan las cosas, aprender y ver hasta dónde puede llevarlas.',
            ],
            tone: 'blue',
          },
          {
            label: 'Posible efecto secundario',
            paragraphs: [
              '“Si estás hablando con Salvador y de repente la conversación pasa de una aplicación a un avión, de un avión a música y de música a una idea para una app...',
              'No se rompió.\nEs así.”',
            ],
            tone: 'accent',
          },
        ],
      },
    ],
  },
  {
    number: '06',
    id: 'seccion-06',
    title: 'Fuera del sistema',
    heading: ['Fuera', 'del sistema'],
    note: 'La persona detrás de todos los procesos',
    subtitle: 'La persona detrás\nde todos los procesos.',
    blocks: [
      {
        type: 'prose',
        columns: 3,
        paragraphs: [
          'Aunque Salvador disfruta muchísimo la tecnología, los proyectos y pasar horas construyendo cosas, no todo en su vida necesita convertirse en un proyecto.',
          'También disfruta las cosas simples.',
          'Un buen café puede mejorarle el día. Una conversación interesante puede hacerle perder la noción del tiempo. Un abrazo inesperado probablemente sea mejor que cualquier notificación.',
        ],
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          { icon: 'coffee', title: 'Café primero', body: ['No hace falta un gran plan para compartir un buen momento. A veces alcanza con sentarse, tomar algo y hablar de cualquier cosa.'] },
          { icon: 'heart', title: 'Afecto sin complicaciones', body: ['Le gustan las muestras de cariño, los abrazos espontáneos y las personas que no tienen miedo de demostrar lo que sienten.'] },
          { icon: 'globe', title: 'Experiencias', body: ['Le gusta descubrir lugares, viajar, conocer personas y salir un poco de la rutina. Hay muchas cosas que todavía quiere experimentar.'] },
          { icon: 'message', title: 'Conversaciones reales', body: ['Puede hablar de tecnología durante horas, pero también disfruta escuchar historias, conocer otros puntos de vista y hablar de esas cosas que no aparecen en ningún manual.'] },
          { icon: 'puzzle', title: 'No todo tiene que tener una explicación', body: ['Aunque su cabeza tienda a analizarlo todo, está aprendiendo que algunas cosas simplemente se disfrutan.'], wide: true },
        ],
      },
      {
        type: 'note',
        label: 'Nota del sistema',
        paragraphs: [
          'Salvador puede construir aplicaciones, diseñar sistemas y resolver problemas complejos.',
          'Pero no necesita que cada momento de su vida tenga un objetivo, una métrica o una versión nueva.',
          'A veces solamente quiere estar, compartir y disfrutar.',
        ],
      },
      {
        type: 'closing',
        paragraphs: ['«No todo lo importante se puede programar.»'],
      },
    ],
  },
  {
    number: '07',
    id: 'seccion-07',
    title: 'Errores conocidos',
    heading: ['Errores', 'conocidos'],
    note: 'Limitaciones del sistema',
    subtitle: 'Limitaciones del sistema.\nPendiente de documentar.',
    blocks: [{ type: 'blank' }],
  },
  {
    number: '08',
    id: 'seccion-08',
    title: 'Preguntas frecuentes',
    heading: ['Preguntas', 'frecuentes'],
    note: 'Dudas habituales',
    subtitle: 'Dudas habituales\nsobre el sistema.',
    blocks: [
      {
        type: 'status',
        items: [
          { key: 'Current version', value: '1.0' },
          { key: 'Status', value: 'Still building' },
        ],
      },
      {
        type: 'faq',
        items: [
          { q: '¿Por qué tiene tantos proyectos?', a: 'Porque una idea le lleva a otra. Y aparentemente su cerebro no conoce el concepto de “una sola cosa a la vez”.' },
          { q: '¿Siempre está pensando en algo?', a: 'Bastante seguido. Si parece estar mirando al vacío, probablemente esté procesando una idea.' },
          { q: '¿Por qué habla tanto de tecnología?', a: 'Porque le gusta entender cómo funcionan las cosas. Y porque probablemente ya convirtió alguna conversación en una explicación técnica sin darse cuenta.' },
          { q: '¿Por qué puede empezar hablando de una cosa y terminar hablando de un avión?', a: 'No hay una explicación oficial. Se recomienda simplemente disfrutar el recorrido.' },
          { q: '¿Tiene una versión final?', a: 'No encontrada.' },
          { q: '¿Es complicado de entender?', a: 'Al principio quizás un poco. Pero en realidad no hace falta entender absolutamente todo. Conocerlo lleva tiempo, como cualquier persona.' },
          { q: '¿Qué pasa si aparece un bug?', a: 'Se habla, se entiende qué pasó y se intenta solucionar.' },
          { q: '¿Qué pasa si dice “se me ocurrió algo”?', a: 'Corré.' },
          {
            q: '¿Qué es lo más importante que hay que saber de Salvador?',
            a: 'Que detrás de todas las ideas, proyectos, código, música y obsesiones raras, sigue siendo una persona que simplemente quiere hacer cosas que le entusiasmen, aprender y compartir momentos con gente con la que pueda ser él mismo.',
            highlight: true,
          },
        ],
      },
      {
        type: 'complete',
        label: 'Manual de usuario — Salvador Juárez',
        version: 'Versión 1.0',
        status: 'Documentación completada',
        quote: '“Bueno. Ahora ya tenés una idea bastante decente de cómo funciona Salvador.”',
        last: '“El resto no se documenta.\nSe conoce.”',
        copyright: '© Salvador Juárez — Hecho con curiosidad.',
      },
    ],
  },
]
