const formulario = document.querySelector("#formularioProducto");
const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
const categoriaProducto = document.querySelector("#categoriaProducto");

const previewNombre = document.querySelector("#previewNombre");
const previewCategoria = document.querySelector("#previewCategoria");
const mensajeEstado = document.querySelector("#mensajeEstado");
const productosLista = document.querySelector("#productosLista");
const contadorProductos = document.querySelector("#contadorProductos");
const historialEventos = document.querySelector("#historialEventos");


// TODO 1: Escuchar el evento input del campo nombreProducto.
// Actualiza previewNombre con el valor escrito.

// TODO 2: Escuchar el evento change del select categoriaProducto.
// Actualiza previewCategoria con la categoría seleccionada.

// TODO 3: Escuchar el evento keydown del documento.
// Si la tecla es Escape, limpia el mensajeEstado.

// TODO 4: Escuchar el evento submit del formulario.
// Usa event.preventDefault(), valida los campos y crea una tarjeta.

// TODO 5: Crear una función crearTarjetaProducto(producto).
// Debe crear un article, agregar contenido y permitir eliminar la tarjeta.

// TODO 6: Crear y emitir un CustomEvent llamado "producto:agregado".
// Debe enviar nombre, precio y categoría dentro de detail.

// TODO 7: Escuchar el evento personalizado "producto:agregado".
// Actualiza contador e historial usando event.detail.

let totalProductos = 0;

// =========================================================================
// TODO 1: Escuchar el evento input del campo nombreProducto.
// =========================================================================
nombreProducto.addEventListener("input", (e) => {
  const valor = e.target.value.trim();
  previewNombre.textContent = valor || "Sin nombre";
});

// =========================================================================
// TODO 2: Escuchar el evento change del select categoriaProducto.
// =========================================================================
categoriaProducto.addEventListener("change", (e) => {
  const valor = e.target.value;
  previewCategoria.textContent = valor || "Ninguna";
});

// =========================================================================
// TODO 3: Escuchar el evento keydown del documento.
// =========================================================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mensajeEstado.textContent = "";
  }
});

// =========================================================================
// TODO 4: Escuchar el evento submit del formulario.
// =========================================================================
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = nombreProducto.value.trim();
  const precio = precioProducto.value.trim();
  const categoria = categoriaProducto.value;

  // Validación básica
  if (!nombre || !precio || !categoria) {
    mensajeEstado.textContent = "⚠️ Por favor, completa todos los campos del formulario.";
    mensajeEstado.style.color = "red";
    return;
  }

  const nuevoProducto = { nombre, precio, categoria };

  // Crear la tarjeta visual
  crearTarjetaProducto(nuevoProducto);

  // TODO 6: Crear y emitir el CustomEvent
  const eventoProductoAgregado = new CustomEvent("producto:agregado", {
    detail: nuevoProducto
  });
  document.dispatchEvent(eventoProductoAgregado);

  // Limpiar formulario y reiniciar vistas previas
  formulario.reset();
  previewNombre.textContent = "Sin nombre";
  previewCategoria.textContent = "Ninguna";
  mensajeEstado.textContent = "✅ ¡Producto agregado con éxito!";
  mensajeEstado.style.color = "green";
});

// =========================================================================
// TODO 5: Crear una función crearTarjetaProducto(producto).
// =========================================================================
function crearTarjetaProducto(producto) {
  const article = document.createElement("article");
  article.classList.add("tarjeta-producto"); // Clase sugerida para tus estilos

  article.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p>
    <button class="btn-eliminar">Eliminar</button>
  `;

  // Funcionalidad para eliminar la tarjeta
  const btnEliminar = article.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", () => {
    article.remove();
    totalProductos--;
    contadorProductos.textContent = totalProductos;
  });

  productosLista.appendChild(article);
}

// =========================================================================
// TODO 7: Escuchar el evento personalizado "producto:agregado".
// =========================================================================
document.addEventListener("producto:agregado", (e) => {
  // 1. Actualizar el contador global e interfaz
  totalProductos++;
  contadorProductos.textContent = totalProductos;

  // 2. Extraer datos del detail
  const { nombre, precio, categoria } = e.detail;

  // 3. Agregar registro al historial de eventos
  const registro = document.createElement("p");
  registro.textContent = `[Nuevo Producto] Nombre: ${nombre} | Cat: ${categoria} | Precio: $${precio}`;
  historialEventos.appendChild(registro);
});