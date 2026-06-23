const form = document.getElementById('form-persona')
const tablaBody = document.getElementById('tabla-body')
const tablaVacia = document.getElementById('tabla-vacia')

const listaPersonas = []

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // Obtenemos los valores de los inputs
  const nombre = document.getElementById('nombre').value.trim()
  const apellido = document.getElementById('apellido').value.trim()
  const edad = parseInt(document.getElementById('edad').value, 10)
  const altura = parseFloat(document.getElementById('altura').value)
  const peso = parseFloat(document.getElementById('peso').value)

  const imc = (peso / (altura * altura)).toFixed(2)

  const nuevaPersona = {
    id: Date.now(),
    nombre,
    apellido,
    edad,
    altura,
    peso,
    imc
  }

  listaPersonas.push(nuevaPersona)

  agregarFilaDOM(nuevaPersona)

  // Ocultamos el texto de la tabla vacia
  tablaVacia.style.display = 'none'

  form.reset()
})

// Funcion para agregar una nueva fila a la tabla
function agregarFilaDOM(persona) {
  const tr = document.createElement('tr')
  tr.setAttribute('data-id', persona.id)

  tr.innerHTML = `
    <td>${persona.nombre}</td>
    <td>${persona.apellido}</td>
    <td>${persona.edad}</td>
    <td>${persona.altura}</td>
    <td>${persona.peso}</td>
    <td>${persona.imc}</td> 
    <td>
      <button class="btn-delete" data-id="${persona.id}">Eliminar</button>
    </td>`
  tablaBody.appendChild(tr)
}

tablaBody.addEventListener('click', (e) => {
  // Comprobamos si el click fue en un boton de eliminar
  if (e.target.classList.contains('btn-delete')) {
    // Buscamos la fila (tr) más cercana al botón clickeado
    const fila = e.target.closest('tr')
    const idPersona = parseInt(fila.getAttribute('data-id'), 10)

    // Eliminamos la fila del DOM
    fila.remove()

    // Buscamos y removemos la persona de la lista
    const index = listaPersonas.findIndex((p) => p.id === idPersona)
    if (index !== -1) {
      listaPersonas.splice(index, 1)
    }

    // Si no quedan personas en el array mostramos el texto de la tabla vacia
    if (listaPersonas.length === 0) {
      tablaVacia.style.display = 'block'
    }
  }
})
