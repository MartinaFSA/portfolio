<template>
    <main>
        <section id="inicio" class="positionRelative">
            <div class="positionRelative">
                <h1>Martina Fernandez</h1>
                <h1 id="name_indentation">Suarez Anzorena</h1>
                <img class="star" id="landing_star" src="src/assets/img/star.svg">
            </div>
            <h2>Desarrolladora Web</h2>
            <div id="ctn_myImg">
                <img id="myImg" src="src/assets/img/o.jpg" alt="Portrait picture of Martina">
            </div>
            <div class="positionRelative">
                <div class="arc" id="landing_firstArc"></div>
                <div class="arc" id="landing_sndArc"></div>
                <div class="line" id="landing_line"></div>
                <div class="halfCircle" id="landing_halfCircle"></div>

                <div id="bkg_gradient"></div>
            </div>
        </section>

        <section id="about">
            <h3>Sobre mí</h3>
            <div>
                <div>
                    <div class="about_group">
                        <p class="about_number">01</p>
                        <span class="about_title">Quién soy?</span>
                        <p class="about_text">Highly adaptable Web Developer with a passion for learning new technologies. I have experience in a range of programming languages including HTML, CSS, JavaScript, PHP, React and Vue. In addition to those skills, I'm well-versed in Git, GitHub and MySQL.</p>
                    </div>
                    <div class="about_group">
                        <p class="about_number">02</p>
                        <span class="about_title">Cuáles son mis skills?</span>
                        <p class="about_text">Maquetado front-end con <span class="accent">HTML</span> y <span class="accent">CSS</span> Programación web con <span class="accent">JavaScript</span>, <span class="accent">PHP</span>, <span class="accent">React</span> y <span class="accent">Vue</span>
                            Manejo y mantención de bases de datos con <span class="accent">MySQL</span> y <span class="accent">PostgreSQL</span>
                            + Prototipado con <span class="accent">Figma</span>
                            + <span class="accent">Inglés</span> profesional</p>
                    </div>
                    <div class="about_group">
                        <p class="about_number">03</p>
                        <span class="about_title">Cuál es mi experiencia laboral?</span>
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
                        <a href="">CV</a>
                        <a href="https://github.com/MartinaFSA">GitHub</a>
                        <a href="https://www.linkedin.com/in/martina-fernandez-suarez-anzorena/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="proyectos">
            <h3>Proyectos</h3>
            <section id="content-archive" role="main">
                <div class="thumbnail accent" v-for="(project, index) in projects" :key="index">
                    <a :href="project.link" rel="bookmark">
                        <img :src="'../assets/img/projects/' + project.img" class="" alt="ASDFGH">
                    </a>
                    <div class="hover">
                        <a href="" rel="bookmark"></a>
                        <ul v-for="(tag, index) in project.tags" :key="index" class="tags">
                            <li>{{ tag }}</li>
                        </ul>
                        <a href="" :title="project.title" rel="bookmark">
                            <span><img src="../assets/img/external-link.svg" alt="Redirect to new page"></span><p class="project_title">{{project.title}}</p>
                        </a>
                    </div>
                </div>
                <div class="thumbnail accent" v-for="(project, index) in projects" :key="index">
                    <a :href="project.link" rel="bookmark">
                        <img src="https://www.also-online.com/wp-content/uploads/2022/09/logo-explorations-2048x1459.png" class="" alt="ASDFGH">
                    </a>
                    <div class="hover">
                        <a href="" rel="bookmark"></a>
                        <ul v-for="(tag, index) in project.tags" :key="index" class="tags">
                            <li>{{ tag }}</li>
                        </ul>
                        <a href="" :title="project.title" rel="bookmark">
                            <span><img src="../assets/img/external-link.svg" alt="Redirect to new page"></span><p class="project_title">{{project.title}}</p>
                        </a>
                    </div>
                </div>
            </section>
        </section>
        <Contact></Contact>
    </main>
</template>
<script>
    import Contact from '../components/Contact.vue';
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
                projects: {
                    AvatarGenerator: {
                        img: 'avatarGenerator/thumbnail.png',
                        tags: ['Web'],
                        title: 'Avatar Generator',
                        link: 'a',
                        description: 'Esta aplicación web es un generador de avatares personalizados. Los usuarios pueden seleccionar el color de piel, ojos y labios del personaje, su peinado y el fondo o seleccionar rasgos al azar. Los personajes pueden ser descargados en formato PNG con un solo click.'
                    },
                    MercadoLibre: {
                        img: 'avatarGenerator/thumbnail.png',
                        tags: ['Web'],
                        title: 'Copia de Mercado Libre',
                        link: 'b',
                        description: 'Maquetado Front-End de la página de inicio de Mercado Libre Argentina.'
                    },
                    AvatarGenerator2: {
                        img: 'avatarGenerator/thumbnail.png',
                        tags: ['Web'],
                        title: 'Avatar Generator2',
                        link: 'c',
                        description: 'Esta ap2afslicación web es un generador de avatares personalizados. Los usuarios pueden seleccionar el color de piel, ojos y labios del personaje, su peinado y el fondo o seleccionar rasgos al azar. Los personajes pueden ser descargados en formato PNG con un solo click.'
                    },
                }
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