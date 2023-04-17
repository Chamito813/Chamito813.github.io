// q: ¿Qué es el DOM?
// r: El DOM es la representación de un documento HTML en forma de árbol de nodos.

// q: ¿Qué es un nodo?
// r: Un nodo es un elemento HTML, como un párrafo, una imagen, un enlace, etc.

// q: ¿Cómo se accede a un elemento del DOM?
// r: Se accede a un elemento del DOM a través de su ID.

//q: ¿Cómo se modifica el contenido de un elemento del DOM?
//r: Se modifica el contenido de un elemento del DOM a través de su ID.

// q: ¿Cuál es la diferencia entre getElementby* y querySelector*?
// r: getElementby* devuelve un array de elementos, mientras que querySelector* devuelve el primer elemento que coincida con el selector.

// q: ¿Qué es un evento?
// r: Un evento es una acción que ocurre en el navegador, como un click, un scroll, un resize, etc.

// q: ¿Qué es un listener?
// r: Un listener es una función que se ejecuta cuando ocurre un evento.

// q: ¿Que es un callback?
// r: Un callback es una función que se pasa como parámetro a otra función.

// q: ¿Que es un objeto de evento?
// r: Un objeto de evento es un objeto que contiene información sobre el evento que se ha producido.

// Función que me diga en que parte del documento se encuentra el mouse cuando se mueve en el mismo documento HTML con id mousePosition
// No funcionó con Copilot.
document.addEventListener("mousemove", function(event) {  
  console.log("X: " + event.clientX + " Y: " + event.clientY);
});


//Función hecha por ChatGPT:
document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let mousePosition = document.getElementById("mousePosition");
    mousePosition.innerHTML = "Posición del mouse: (" + x + ", " + y + ")";
});

// Función hecha por ChatGPT:

// Capturamos los elementos del DOM
const form = document.getElementById("form1");
const fnameInput = document.getElementById("form-fname");
const lnameInput = document.getElementById("form-lname");
const submitBtn = document.getElementById("form1-submit");

// Agregamos el evento de click al botón de enviar
submitBtn.addEventListener("click", function(event) {
	event.preventDefault(); // Evitamos que el formulario se envíe

	// Obtenemos los valores de las cajas de texto
	const fname = fnameInput.value.trim();
	const lname = lnameInput.value.trim();

	// Creamos el elemento para el nombre completo y lo agregamos al DOM
	const fullName = document.createElement("p");
	fullName.textContent = fname + " " + lname;
	form.insertAdjacentElement("afterend", fullName);
});


// Haría las funciones con Copilot pero solo se copia de las funciones ya hechas y sin ellas no genera nada, o no cómo lo quiero.


//Función para el tercer ejercicio hecha por GPT:
// Obtener los botones de inserción de fila y columna
let insertRowBtn = document.getElementById("btn-insert-r");
let insertColBtn = document.getElementById("btn-insert-c");

// Agregar un evento de clic a cada botón de inserción
insertRowBtn.addEventListener("click", function() {
// Crear una nueva fila
  let newRow = document.createElement("tr");

  // Crear dos nuevas celdas y agregarlas a la nueva fila
  let newCell1 = document.createElement("td");
  newCell1.textContent = "New Row";
  let newCell2 = document.createElement("td");
  newCell2.textContent = "New Row";
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);

  // Obtener una referencia a la tabla y agregar la nueva fila al final
  let table = document.getElementById("sampleTable");
  table.appendChild(newRow);
});

insertColBtn.addEventListener("click", function() {
  // Obtener todas las filas de la tabla
  let rows = document.querySelectorAll("#sampleTable tr");

  // Para cada fila, crear una nueva celda y agregarla al final
  rows.forEach(function(row) {
    let newCell = document.createElement("td");
    newCell.textContent = "New Column";
    row.appendChild(newCell);
  });
});
