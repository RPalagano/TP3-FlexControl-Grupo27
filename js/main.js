(function () {
  var botones = document.querySelectorAll(".desplegable__boton");
  var volverArriba = document.querySelector(".volver-arriba");

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

  if (volverArriba) {
    var actualizarBotonArriba = function () {
      volverArriba.hidden = window.scrollY <= 180;
    };

    window.addEventListener("scroll", actualizarBotonArriba, { passive: true });
    actualizarBotonArriba();
  }
})();
