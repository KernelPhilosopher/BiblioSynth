// Este código se ejecuta cuando toda la página web ha terminado de cargar
document.addEventListener("DOMContentLoaded", function () {
  // Buscar y guardar referencias a los elementos HTML que necesitamos:
  // - El botón que abre/cierra el menú desplegable (tiene la clase "header__dropdown-toggle")
  const dropdownToggle = document.querySelector(".header__dropdown-toggle");

  // - El menú desplegable que se muestra/oculta (tiene el ID "libros-submenu")
  const submenu = document.getElementById("libros-submenu");

  // Verificar que ambos elementos existen en la página antes de continuar
  if (dropdownToggle && submenu) {
    // FUNCIONALIDAD 1: Controlar el clic en el botón del menú desplegable
    dropdownToggle.addEventListener("click", function (event) {
      // Evitar que el navegador navegue a otra página (porque el enlace tiene href="#")
      event.preventDefault();

      // Verificar el estado actual del menú:
      // - Si "aria-expanded" es "true", significa que el menú está abierto
      // - Si es "false" (o no existe), significa que el menú está cerrado
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      // Cambiar el estado del menú al opuesto:
      // - Si estaba abierto (true), lo cerramos (false)
      // - Si estaba cerrado (false), lo abrimos (true)
      this.setAttribute("aria-expanded", !isExpanded);
    });

    // FUNCIONALIDAD 2: Cerrar el menú cuando el usuario hace clic fuera de él
    document.addEventListener("click", function (event) {
      // Verificar si el clic ocurrió:
      // - FUERA del botón del menú Y
      // - FUERA del propio menú desplegable
      if (
        !dropdownToggle.contains(event.target) &&
        !submenu.contains(event.target)
      ) {
        // Si el clic fue fuera de ambos elementos, cerrar el menú
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });

    // FUNCIONALIDAD 3: Cerrar el menú cuando el usuario presiona la tecla Escape
    document.addEventListener("keydown", function (event) {
      // Verificar si:
      // - La tecla presionada es "Escape" Y
      // - El menú está actualmente abierto
      if (
        event.key === "Escape" &&
        dropdownToggle.getAttribute("aria-expanded") === "true"
      ) {
        // Cerrar el menú
        dropdownToggle.setAttribute("aria-expanded", "false");

        // Devolver el foco (cursor) al botón del menú para mejorar la accesibilidad
        // Esto ayuda a usuarios que navegan con teclado
        dropdownToggle.focus();
      }
    });
  }
});
