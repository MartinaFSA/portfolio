<script setup>
import { RouterLink, RouterView } from 'vue-router';
  window.onscroll = function() {scrollFunction()};
  let screenHeight = window.screen.height * window.devicePixelRatio;
  function scrollFunction() {
    if (document.body.scrollTop > screenHeight || document.documentElement.scrollTop > screenHeight) {
      document.getElementById("navbar").style.opacity = "1";
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
      document.getElementById("navbar").style.opacity = "0";
    }
  }
</script>

<template>
  <section id="overlay">
    <header>
        <nav id="navbar">
          <ul id="ctnNavLinks">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
    </header>

    <RouterView />
  </section>
</template>