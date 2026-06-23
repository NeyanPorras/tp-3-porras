// Array de 6 elementos para las tarjetas
const items = [
  {
    id: 1,
    titulo: 'Desarrollo Web',
    categoria: 'Tecnología',
    descripcion:
      'Aprende HTML, CSS y JavaScript desde las bases hasta layouts complejos con Flexbox.',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Diseño UX/UI',
    categoria: 'Diseño',
    descripcion:
      'Descubre cómo crear interfaces atractivas y centradas en el usuario.',
    destacado: false
  },
  {
    id: 3,
    titulo: 'React.js Avanzado',
    categoria: 'Tecnología',
    descripcion:
      'Domina el estado de las aplicaciones con React y crea componentes reutilizables.',
    destacado: true
  },
  {
    id: 4,
    titulo: 'Marketing Digital',
    categoria: 'Negocios',
    descripcion:
      'Estrategias de posicionamiento, SEO y pauta digital para marcas modernas.',
    destacado: false
  },
  {
    id: 5,
    titulo: 'Bases de Datos',
    categoria: 'Tecnología',
    descripcion: 'Modelado de datos relacionales y no relacionales desde cero.',
    destacado: false
  },
  {
    id: 6,
    titulo: 'Finanzas Personales',
    categoria: 'Negocios',
    descripcion:
      'Aprende a gestionar ingresos, inversiones y planificación financiera.',
    destacado: true
  }
]


const container = document.getElementById('flex-cards-container')

// Función para renderizar las tarjetas en el DOM
function renderCards(elements) {
  container.innerHTML = '' // Limpiamos el contenedor por si había tarjetas previas

  elements.forEach((item) => {
    // Creamos el elemento div de la tarjeta
    const card = document.createElement('div')
    card.classList.add('dynamic-card')

    // Si es destacado, agregamos la clase highlight para el borde violeta
    if (item.destacado) {
      card.classList.add('highlight')
    }

    // Insertamos el HTML interno de la tarjeta
    card.innerHTML = `
      <span class="badge">${item.categoria}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    `

    container.appendChild(card)
  })
}

renderCards(items)
