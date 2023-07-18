<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <section>
    <header>
        <nav>
          <div id="ctnNavLinks">
              <a href="#inicio">Inicio</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
          </div>
          <div>
              <button>EN</button>
              <span style="font-size: 2rem;">/</span>
              <button>ESP</button>
          </div>
        </nav>
    </header>

    <RouterView />
  </section>
</template>