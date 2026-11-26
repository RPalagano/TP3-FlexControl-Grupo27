(function () {
  // Obtiene los botones de los acordeones y el acceso rápido al inicio.
  var botones = document.querySelectorAll(".desplegable__boton");
  var volverArriba = document.querySelector(".volver-arriba");

  // Cada botón alterna el estado accesible y la visibilidad de su panel.
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      var panelId = boton.getAttribute("aria-controls");
      var panel = document.getElementById(panelId);

      boton.setAttribute("aria-expanded", abierto ? "false" : "true");

      if (panel) {
        panel.hidden = abierto;
      }
    });
  });

  // Muestra el botón para volver arriba después de desplazarse por la página.
  if (volverArriba) {
    var actualizarBotonArriba = function () {
      volverArriba.hidden = window.scrollY <= 180;
    };

    // El listener pasivo evita bloquear el desplazamiento; también fija el estado inicial.
    window.addEventListener("scroll", actualizarBotonArriba, { passive: true });
    actualizarBotonArriba();
  }
})();
