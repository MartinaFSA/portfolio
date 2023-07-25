<template>
    <div :v-if="renderImg" id="overlay">
    </div>
</template>
  
  <script>
    export default {
      name: 'Stars',
      data: function() {
        return {
            renderImg: true,
            wH: window.innerHeight,
            wW: window.innerWidth,
        }
      },
      methods: {
        generateStars: function(n) {
            for (let i = 0; i < n; i++) {
                const div = document.createElement('div');
                div.className = i % 20 == 0 ? 'bkg_star star--big' : i % 9 == 0 ? 'bkg_star star--medium' : 'bkg_star star--small';
                div.setAttribute('style', `top: ${Math.round(Math.random()*this.wH)}px;
                                        left: ${Math.round(Math.random()*this.wW)}px;
                                        animation-duration: ${Math.round(Math.random()*3000) + 3000}ms;
                                        animation-delay: ${Math.round(Math.random()*3000)}ms;`);
                document.getElementById('overlay').appendChild(div);
            }
        },
        async forceRender() {
          this.renderImg = false;
          await this.$nextTick();
          this.renderImg = true;
          this.generateStars(140);
        }
      },
      beforeMount() {
        this.generateStars();
      },
      mounted() {
        setTimeout(() => {
          this.forceRender();
        });
      }
    }
  </script>
  
  <style>
    @import '../assets/styles/stars.css';
  </style>