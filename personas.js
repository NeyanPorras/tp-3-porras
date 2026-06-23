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

  tr.innerHTML = `
    <td>${persona.nombre}</td>
    <td>${persona.apellido}</td>
    <td>${persona.edad}</td>
    <td>${persona.altura}</td>
    <td>${persona.peso}</td>
    <td>${persona.imc}</td>
`
  tablaBody.appendChild(tr)
}
