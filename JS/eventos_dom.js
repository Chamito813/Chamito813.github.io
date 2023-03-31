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
    var x = event.clientX;
    var y = event.clientY;
    var mousePosition = document.getElementById("mousePosition");
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
// Capturamos los elementos del DOM
const table = document.getElementById("sampleTable");
const insertRowBtn = document.getElementById("btn-insert-r");
const insertColBtn = document.getElementById("btn-insert-c");

// Agregamos un manejador de eventos para el botón de agregar fila
insertRowBtn.addEventListener("click", function () {
  // Creamos una nueva fila y agregamos celdas a la fila
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  // Agregamos contenido a las celdas
  cell1.innerHTML = "New row column 1";
  cell2.innerHTML = "New row column 2";
});

// Agregamos un manejador de eventos para el botón de agregar columna
insertColBtn.addEventListener("click", function () {
  // Recorremos cada fila existente y agregamos una celda a cada una
  for (let i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].insertCell();
    cell.innerHTML = "New column";
  }
});

// Función para el cuarto ejercicio hecha por GPT:
const myTable = document.getElementById("myTable");
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeBtn = document.getElementById("btn-change");

changeBtn.addEventListener("click", function() {
    const rowIndex = parseInt(rowIndexInput.value) - 1; // Restamos 1 para ajustar a índices de JS
    const colIndex = parseInt(colIndexInput.value) - 1; // Restamos 1 para ajustar a índices de JS
    const newValue = newValueInput.value;

    // Verificamos si los índices son válidos
    if (rowIndex < 0 || rowIndex >= myTable.rows.length ||
        colIndex < 0 || colIndex >= myTable.rows[rowIndex].cells.length) {
      alert("Invalid index");
      return;
    }

    // Actualizamos el contenido de la celda
    myTable.rows[rowIndex].cells[colIndex].innerHTML = newValue;
  });