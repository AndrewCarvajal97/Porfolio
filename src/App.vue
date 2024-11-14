<script setup>
  import Navbar from './components/Navbar.vue';
  import BotonSubir from './components/BotonSubir.vue';
  import Descripcion from './components/Descripcion.vue';
  import Proyectos from './components/Proyectos.vue';
  import Estudios from './components/Estudios.vue';
  import {projects} from './assets/Data.js'
   
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
      <h1>aca iran las tecnologias</h1>
    </div>
  </section>
  <section id="Certificados">
    <div class="contenedor">
      <h1>aca iran certificados</h1>
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
  }
  

</style>
