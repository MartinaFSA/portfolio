<template>
  <header>
        <nav id="navbar">
          <ul id="ctnNavLinks">
              <li><a href="#inicio">Inicio</a></li>
              <li v-if="isPortlioPage"><a href="#proyectos">Proyectos</a></li>
              <li v-else><RouterLink to="/#proyectos">Proyectos</RouterLink></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
    </header>
</template>

<script>
    import { RouterLink } from 'vue-router';
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
    export default {
        name: 'Navbar',
        data: function() {
            return {
                isPortlioPage: false, 
            }
        },
        methods: {
            getPathDir: function() {
                let windowLocation =  window.location.href.slice(7); //delete http:// from variable
                let firstSlash = windowLocation.indexOf('/') + 1;
                let secondSlash = windowLocation.indexOf('/', firstSlash)  + 1;
                let thirdSlash = windowLocation.indexOf('/', secondSlash) + 1;
                
                let startsWithPortfolioRoute = windowLocation.slice(firstSlash, secondSlash) == "portfolio/" ? true : false;
                let pointsToOtherRoute = (windowLocation.slice(secondSlash, thirdSlash) == "#inicio" && windowLocation.slice(secondSlash, thirdSlash) == "#contacto") && (windowLocation.slice(secondSlash, thirdSlash) == "#proyectos") ? true : false;
                this.isPortlioPage = (startsWithPortfolioRoute && pointsToOtherRoute);
            }
        },
        beforeMount() {
            this.getPathDir();
        },
        mounted() {
            setTimeout(() => {
                this.getPathDir();
            }, 1000);
        }
    }
</script>