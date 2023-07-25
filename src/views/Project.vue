<template>
  <main id="inicio">
    <div>
      <section id="project_title">
        <h1>{{ projects[currentProjectName].title }}</h1>
        <h2>{{ projects[currentProjectName].tag }}</h2>
      </section>

      <section class="positionRelative focus-in">
        <div class="project_videoSection">
          <div id="project_videoSection_text">
            <p class="big_green_number">01</p>
            <span class="title_afterNumber">Recorrido por la página</span>
          </div>
          <video :poster="'/src/assets/img/projects/' + projects[currentProjectName].img" controls>
            <source src="" type="video/mp4">
          </video>
        </div>
        <div>
          <img class="star" id="video_star" src="/src/assets/img/star.svg">
        </div>
      </section>

      <section>
        <div>
          <p class="big_green_number">02</p>
          <span class="title_afterNumber">Sobre el proyecto</span>
          <p class="project_description">{{ projects[currentProjectName].description }}</p>
        </div>
        <div class="ctn_pages">
          <div class="mobilePage">
            <img id="mobileLanding" :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'preview_mobile.png'" alt="">
            <img :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'fullPreview_mobile.png'" alt="">
            <img id="mobileTransparent" class="transparentImg" :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'fullPreview_mobile.png'" alt="" :v-if="renderImg">
          </div>
          <div class="desktopPage">
            <img id="desktopLanding" :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'preview.png'" alt="">
            <img :src="fullPreviewPath" alt="">
            <img id="desktopTransparent" class="transparentImg" :src="fullPreviewPath" alt="" :v-if="renderImg">
          </div>
        </div>
      </section>

      <Contact></Contact>
      
    </div>
  </main>
</template>

<script>
  import Contact from '../components/Contact.vue';
  import projectsJson from '../assets/projectsData.json';

  export default {
    name: 'Project',
    data: function() {
      return {
        projects: projectsJson,
        currentProjectName: '',
        fullPreviewPath: '',
        fullMobilePreviewPath: '',
        landingPreviewPath: '',
        landingMobilePreviewPath: '',
        renderImg: true,
      }
    },
    components: {
        Contact
    },
    methods: {
      getProjectName: function() {
        this.currentProjectName = window.location.href.slice(40);

        this.fullPreviewPath = '/src/assets/img/projects/' + this.projects[this.currentProjectName].imagesPath + 'fullPreview.png';
        this.fullMobilePreviewPath = '/src/assets/img/projects/' + this.projects[this.currentProjectName].imagesPath + 'fullPreview_mobile.png';
        this.landingPreviewPath = '/src/assets/img/projects/' + this.projects[this.currentProjectName].imagesPath + 'preview.png';
        this.landingMobilePreviewPath = '/src/assets/img/projects/' + this.projects[this.currentProjectName].imagesPath + 'preview_mobile.png';
      },
      getPreviewHeight() {
        if(document.getElementById('desktopLanding')) {
          let desktopLanding = document.getElementById('desktopLanding');
          let landingPreviewHeight = desktopLanding.offsetHeight;
          document.getElementById('desktopTransparent').style.marginTop = '-' + landingPreviewHeight + 'px';
        } 
        
        if(document.getElementById('mobileLanding')) {
          let mobileLanding = document.getElementById('mobileLanding');
          let mobileLandingPreviewHeight = mobileLanding.offsetHeight;
          document.getElementById('mobileTransparent').style.marginTop = '-' + mobileLandingPreviewHeight + 'px';
        }
      },
      async forceRender() {
        this.renderImg = false;
        await this.$nextTick();
        this.renderImg = true;
        this.getPreviewHeight();
      }
    },
    beforeMount() {
      this.getProjectName();
    },
    mounted() {
      setTimeout(() => {
        this.forceRender();
      }, 1000);
    }
  }
</script>

<style>
  @import '../assets/styles/project.css';
</style>