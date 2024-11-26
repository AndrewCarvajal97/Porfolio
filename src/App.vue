<script setup>
  import Navbar from './components/Navbar.vue';
  import BotonSubir from './components/BotonSubir.vue';
  import Descripcion from './components/Descripcion.vue';
  import Proyectos from './components/Proyectos.vue';
  import Estudios from './components/Estudios.vue';
  import {projects} from './assets/Data.js'
  import Tecnologias from './components/Tecnologias.vue';
  import Experiencias from './components/Experiencias.vue';
   
</script>

<template>
  <header>
    <Navbar />
  </header>
  <section id="Descripcion">
    <Descripcion/>
  </section>
  <section id="Proyectos">
    <Proyectos :Proyectos="projects"/>
  </section>
  <section id="Estudios">
    <div class="contenedor">
      <Estudios/>
    </div>
  </section>
  <section id="Tecnologias">
    <div class="contenedor">
      <Tecnologias/>
    </div>
  </section>
  <section id="Experiencia">
    <div class="contenedor">
      <Experiencias/>
    </div>
  </section>
  <section id="Contacto">
    <div class="contenedor">
      <h1>aca ira el contacto</h1>
    </div>
  </section>
  <BotonSubir/>
</template>

<style scoped>

  header{
    display: flex;
    flex-direction: row;
    justify-items: center;
  }
  #Descripcion{
    padding-top: 110px;
  }
  .contenedor{
    display: flex;
    color: white;
    min-height: 200px;
    width: 100dvw;
    overflow: scroll;
    scrollbar-width: none;
    justify-content: center;
    
  }
  h2{
    font-size: 2.5rem;
    font-family: "Arima", system-ui;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: bold;;
}
  

</style>
