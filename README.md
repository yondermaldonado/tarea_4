# 🧩 Tarea 4 — Sesión 1.8: Eventos y Eventos Personalizados en JavaScript

Laboratorio práctico para trabajar el manejo de **eventos nativos del DOM** y **eventos personalizados (`CustomEvent`)** en JavaScript puro, mediante un panel interactivo de registro de productos.

Proyecto desarrollado con **HTML, CSS y JavaScript Vanilla**, sin frameworks ni dependencias externas.

## 📚 Contenido de la tarea

El ejercicio consiste en implementar los siguientes puntos en `js/main.js`:

1. Escuchar el evento `input` del campo de nombre del producto y actualizar una vista previa en tiempo real.
2. Escuchar el evento `change` del selector de categoría y reflejar la selección en pantalla.
3. Escuchar el evento `keydown` sobre el documento: si la tecla presionada es `Escape`, limpiar el mensaje de estado.
4. Escuchar el evento `submit` del formulario, evitando el comportamiento por defecto (`preventDefault`), validando los campos y creando una tarjeta de producto.
5. Implementar `crearTarjetaProducto(producto)`: genera dinámicamente un `<article>` con la información del producto y un botón para eliminarlo.
6. Crear y emitir un **evento personalizado** `producto:agregado` mediante `CustomEvent`, enviando `nombre`, `precio` y `categoría` en `detail`.
7. Escuchar el evento personalizado `producto:agregado` para actualizar el contador de productos y el historial de eventos.

## ✨ Funcionalidades de la interfaz

- **Formulario de registro**: nombre, precio y categoría del producto.
- **Vista previa en vivo**: muestra el nombre y la categoría mientras se completan los campos, antes de enviar el formulario.
- **Validación básica**: impide registrar un producto si falta algún campo, mostrando un mensaje de error.
- **Listado de productos**: cada producto agregado se muestra como una tarjeta con opción de eliminarla.
- **Contador de productos**: se actualiza automáticamente al agregar o eliminar productos.
- **Historial de eventos**: registro de cada producto agregado, alimentado por el evento personalizado `producto:agregado`.
- **Atajo de teclado**: presionar `Escape` limpia el mensaje de estado.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura del panel interactivo.
- **CSS3** — estilos de la interfaz (`styles.css`).
- **JavaScript (ES6+)** — manejo de eventos del DOM y eventos personalizados (`CustomEvent`), sin frameworks.

## 📁 Estructura del proyecto

```
sesion-1-8-eventos-estudiantes/
├── index.html                    # Panel interactivo de productos
├── css/
│   └── styles.css                # Estilos de la interfaz
├── js/
│   └── main.js                   # Lógica de eventos y eventos personalizados
└── data/
    └── productos_iniciales.json  # Datos de referencia de productos
```

## 🚀 Instalación y ejecución

Este proyecto es un archivo estático simple, no requiere backend ni instalación de dependencias.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/yondermaldonado/tarea_4.git
   cd tarea_4/sesion-1-8-eventos-estudiantes
   ```

2. Abre `index.html` directamente en tu navegador, o sírvelo con un servidor local:

   ```bash
   # Con Python
   python3 -m http.server 8080

   # Con la extensión Live Server de VS Code
   # clic derecho sobre index.html > "Open with Live Server"
   ```

3. Accede a `http://localhost:8080/index.html` (si usaste un servidor local) o abre el archivo directamente.

## 👤 Autor

Yonder Daniel Maldonado Pabón

## 📄 Licencia

Este proyecto se distribuye con fines educativos. Puedes usarlo y adaptarlo libremente citando la fuente.
