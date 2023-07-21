<template>
  <div class="about">
    <section>
      <h1>{{ projects[currentProjectName].title }}</h1>
      <h2>{{ projects[currentProjectName].tag }}</h2>
    </section>
    <section>
      <video width="470" height="255"  :poster="'/src/assets/img/projects/' + projects[currentProjectName].img" controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.ogg" type="video/ogg">
        <source src="video.webm" type="video/webm">
        <object data="video.mp4" width="470" height="255">
          <embed src="video.swf" width="470" height="255">
        </object>
      </video>
      <div>
        <p>01</p>
        <p>Recorrido por la página</p>
        <img class="star" id="about_star" src="/src/assets/img/star.svg">
      </div>
    </section>
    <section>
      <div>
        <p>02</p>
        <p>Sobre el proyecto</p>
        <p>{{ projects[currentProjectName].description }}</p>
      </div>
      <div>
        <div><img :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'preview_mobile.png'" alt=""></div>
        <div><img :src="'/src/assets/img/projects/' + projects[currentProjectName].imagesPath + 'preview.png'" alt=""></div>
      </div>
    </section>
    <Contact></Contact>
  </div>
</template>

<style>
  @import '../assets/styles/project.css';
</style>

<script>
  import Contact from '../components/Contact.vue';
  import projectsJson from '../assets/projectsData.json';
  export default {
    name: 'Project',
    data: function() {
      return {
        projects: projectsJson,
        currentProjectName: ''
      }
    },
    components: {
        Contact
    },
    methods: {
      getProjectName: function() {
        console.log(window.location.href.slice(40));
        this.currentProjectName = window.location.href.slice(40)
      }
    },
    beforeMount() {
      this.getProjectName();
    },
  }
</script>