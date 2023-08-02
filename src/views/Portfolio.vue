<template>
    <main id="inicio">
        <section class="positionRelative">
            <div class="positionRelative">
                <h1 class="slideInRight">Martina Fernandez</h1>
                <h1 id="name_indentation" class="slideInLeft">Suarez Anzorena</h1>
                <img class="star focus-in" id="landing_star" src="/src/assets/img/star.svg">
            </div>
            <h2 class="slideInRight">Desarrolladora Web</h2>
            <div id="ctn_myImg" class="focus-in">
                <div id="bkg_gradient"></div>
                <img id="myImg" src="/src/assets/img/yo.jpg" alt="Portrait picture of Martina">
            </div>
            <div class="positionRelative focus-in">
                <div class="arc" id="landing_firstArc"></div>
                <div class="arc" id="landing_sndArc"></div>
                <div class="line" id="landing_line"></div>
                <div class="halfCircle" id="landing_halfCircle"></div>
            </div>
        </section>

        <section id="about">
            <h3>Sobre mí</h3>
            <div class="positionRelative">
                <div>
                    <div class="about_group">
                        <p class="big_green_number">01</p>
                        <span class="title_afterNumber">Quién soy?</span>
                        <p class="about_text">Highly adaptable Web Developer with a passion for learning new technologies. I have experience in a range of programming languages including HTML, CSS, JavaScript, PHP, React and Vue. In addition to those skills, I'm well-versed in Git, GitHub and MySQL.</p>
                    </div>
                    <div class="about_group">
                        <p class="big_green_number">02</p>
                        <span class="title_afterNumber">Cuáles son mis skills?</span>
                        <p class="about_text">Maquetado front-end con <span class="accent">HTML</span> y <span class="accent">CSS</span> Programación web con <span class="accent">JavaScript</span>, <span class="accent">PHP</span>, <span class="accent">React</span> y <span class="accent">Vue</span>
                            Manejo y mantención de bases de datos con <span class="accent">MySQL</span> y <span class="accent">PostgreSQL</span>
                            + Prototipado con <span class="accent">Figma</span>
                            + <span class="accent">Inglés</span> profesional</p>
                    </div>
                    <div class="about_group">
                        <p class="big_green_number">03</p>
                        <span class="title_afterNumber">Cuál es mi experiencia laboral?</span>
                        <div v-for="(experience, index) in experiences" :key="index" class="about_text">
                            <p class="about_text_company">{{experience.company}} ({{calculateTotalWorked(index)}})</p>
                            <p class="itemTitle">{{experience.jobTitle}}</p>
                            <p class="about_text_time">{{experience.fromTime.toUTCString().slice(7,16)}} - {{experience.toTime.toUTCString().slice(7,16)}}</p>
                            <ul v-for="(tarea, index) in experience.tareas" :key="index">
                                <li>{{ tarea }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="ctn_aboutPhrase">
                    <p id="about_phrase">Para saber más ingresá acá</p>
                    <div>
                        <a href="" target="_blank">CV</a> <!--https://www.w3schools.com/howto/howto_js_snackbar.asp-->
                        <a href="https://github.com/MartinaFSA" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/martina-fernandez-suarez-anzorena/" target="_blank">LinkedIn</a>
                    </div>
                </div>
                <div id="about_ctnFigures">
                    <img class="star" id="about_star" src="/src/assets/img/star.svg">
                    <div class="halfCircle" id="about_halfCircle"></div>
                    <div class="fullCircle" id="about_firstFullCircle"></div>
                    <div class="fullCircle" id="about_sndFullCircle"></div>
                </div>
            </div>
        </section>
        <section id="proyectos">
            <h3>Proyectos</h3>
            <section id="content-archive" role="main">
                <div class="thumbnail" v-for="(project, index) in projects" :key="index">
                    <div class="positionRelative">
                        <RouterLink :to="'project/' + project.objectName" rel="bookmark">
                            <div></div>
                            <img :src="'/src/assets/img/projects/' + project.img" alt="" loading="lazy">
                        </RouterLink>
                    </div>
                    <div class="hover">
                        <RouterLink :to="'project/' + project.objectName" :title="project.title" rel="bookmark">
                            <p class="project_title">{{project.title}}</p>
                            <p class="tags">{{ project.tag }}</p>
                        </RouterLink>
                    </div>
                </div>
            </section>
        </section>
        <Contact></Contact>
    </main>
</template>
<script>
    import { RouterLink } from 'vue-router';
    import Contact from '../components/Contact.vue';
    import projectsJson from '../assets/projectsData.json';
    export default {
        name: 'Home',
        components: {
            Contact
        },
        data: function() {
            return {
                experiences: {
                    Accenture: { 
                        company: 'Accenture Argentina',
                        jobTitle: 'Custom Software Engineering Associate',
                        fromTime: new Date('05/09/2022'),
                        toTime: new Date(),
                        tareas: ['Mejoras de accesibilidad web', 'Desarrollo de nuevas funcionalidades', 'Arreglo de bugs', 
                            'Adaptar código a otros lenguajes de programación','Mantenimiento de aplicaciones, servidores y bases de datos',
                            'Migración de base de datos'],
                        tasks: ['Web accesibility improvementsb', 'Development of new features', 'Bug fixes',
                            'Adapt code to other programming languages','Maintenaince of applications, servers and databases',
                            'Database migration']                        
                    }
                },
                projects: projectsJson
            }
        },
        methods: {
            calculateTotalWorked: function(num) {
                const yearsWorked = this.experiences[num].toTime.getFullYear() - this.experiences[num].fromTime.getFullYear();
                const monthsWorked = this.experiences[num].toTime.getMonth() - this.experiences[num].fromTime.getMonth();
                let totalTime = ''; 
                switch (yearsWorked) {
                    case 0:
                        break;
                    case 1:
                        totalTime += '1 year';
                        break;
                    default:
                        totalTime += yearsWorked + ' years';
                        break;
                }

                switch (monthsWorked) {
                    case 0:
                        break;
                    case 1:
                        totalTime += ', 1 month';
                        break;
                    default:
                        totalTime += ', ' + monthsWorked + ' months';
                        break;
                }
                
                return totalTime;
            },
        },
    }
</script>
<style>
    @import '../assets/styles/portfolio.css';
</style>