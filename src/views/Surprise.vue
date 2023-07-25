<template>
    <section class="focus-in">
        <h1>¿Qué cuerpo celeste preferís?</h1>
        <div>
            <input value="moon" type="radio" name="planet" id="moon" @change="selectedOption($event)">
            <label for="moon">Luna</label>

            <input value="mars" type="radio" name="planet" id="mars" @change="selectedOption($event)">
            <label for="mars">Marte</label>

            <input value="sun" type="radio" name="planet" id="sun" @change="selectedOption($event)">
            <label for="sun">Sol</label>

            <input value="jupiter" type="radio" name="planet" id="jupiter" @change="selectedOption($event)">
            <label for="jupiter">Jupiter</label>
        </div>
    </section>
    <section>
        <canvas ref="canvas"></canvas>
    </section>
</template>

<script>
    import * as THREE from 'three';
    export default {
        name: 'Surprise',
        data() {
            return {
                selectedPlanet: 'moon',
            }
        },
        mounted() {
            this.initThree();
            window.addEventListener('mousemove', this.onMouseMove);
        },
        beforeDestroy() {
            window.removeEventListener('mousemove', this.onMouseMove);
        },
        methods: {
            selectedOption(event) {
                this.selectedPlanet = event.target.value;
                this.updatePlanet();
            },
            initThree() {
                this.camera = new THREE.PerspectiveCamera(45, this.aspect, 0.1, 1500);
                this.scene = new THREE.Scene();
                this.renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas });
                this.textureLoader = new THREE.TextureLoader();
                this.camera.position.z = 5;
                this.cameraAutoRotation = true;
                this.renderer.setSize(window.innerWidth, window.innerWidth);
                this.renderer.setClearColor( 0xffffff, 0);
                this.aspect = window.innerWidth / window.innerWidth;
                this.cameraRotation = 0;
                this.cameraRotationSpeed = 0.001;
                this.createSaturnPlanet();
                this.animate();                
            },
            createSaturnPlanet() {
                const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

                const planetTexture = this.textureLoader.load('/src/assets/img/' + this.selectedPlanet + '.jpg');
                const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

                this.planet = new THREE.Mesh(planetGeometry, planetMaterial);
                this.scene.add(this.planet);
            },
            onMouseMove(event) {
                const rotationX = (event.clientX / window.innerWidth) * 2 - 1;
                const rotationY = (event.clientY / window.innerWidth) * 2 - 1;

                this.planet.rotation.x = rotationY;
                this.planet.rotation.y = rotationX;
            },
            animate() {
                requestAnimationFrame(this.animate.bind(this));
                this.renderer.render(this.scene, this.camera);
            },
            updatePlanet() {
                const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

                this.planet.material.dispose();
                this.scene.remove( this.planet );

                const planetTexture = this.textureLoader.load('/src/assets/img/' + this.selectedPlanet + '.jpg');
                const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

                this.planet = new THREE.Mesh(planetGeometry, planetMaterial);
                this.scene.add(this.planet);
            },
        }
    }
</script>

<style scoped>
    section {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: var(--white);
    } section:first-of-type {
        height: 10vh;
    }
    section h1 {
        text-align: center;
        font-size: 3rem;
        margin-top: 4vw;
    }
    label {
        font-size: 1.5rem;
    }
    input {
        margin-left: 20px;
        margin-right: 5px;
    } canvas {
        margin-top: 50px;
        max-width: 90vh;
        max-height: 90vh;
    }
</style>