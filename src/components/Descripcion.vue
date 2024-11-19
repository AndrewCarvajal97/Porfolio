<template>
    <div class="contenedor">
        <div class="foto-perfil">
            <div class="foto">
                <img src="/FotoPerfil.webp" alt="foto de pablo andres">
            </div>
            <div class="iconosContacto">
               <a href="https://github.com/AndrewCarvajal97" target="_blank"> <img src="/svg/github.svg" alt=" " title="Icon by Icons8"></a>
                <a href="" target="_blank"><img src="/svg/linkedin.svg" alt="" title="Icon by Icons8"></a>
                <a href="" target="_blank"><img src="/svg/gmail.svg" alt="" title="Icon by Icons8"></a>
                <a href="" target="_blank"><img src="/svg/whatsapp.svg" alt="" title="Icon by Icons8"></a>
            </div>
        </div>
        <div class="descripcion">
            <h1 id="titulo">
                ¡Hola! Soy Andrew Carvajal
            </h1>
            <h2 id="subtitulo">
                Desarrollador Fullstack
            </h2>
            <p id="parrafo">
                Soy un joven apasionado por resolver problemas complejos y optimizar procesos con soluciones innovadoras.
                <br>Tengo +1 Año de experiencia en desarrollo web, especializado en Vue 3, Node.js, y bases de datos relacionales. 
                <br>Poseo un sólido manejo de control de versiones con Git y GitHub, además cuento con experiencia en la creación de aplicaciones eficientes y escalables. 
                <br>Adicional mente cuento con  conocimientos en Java con Spring Boot y JavaScript Vanilla, lo que amplía mi capacidad de adaptarme a distintos entornos tecnológicos. 
                
            </p>
        </div>  
    </div>
</template>

<script setup>

</script>

<style  scoped>
    .contenedor{
        display: flex;
        width: 100%;
        align-items: center;
        justify-items: center;
        box-sizing: border-box;
    }

    .foto-perfil {
    display: flex;
    flex-direction: column;
    flex: 25%; /* Alinea los elementos a la derecha */
    }
    .iconosContacto{
        margin: auto;
        padding-top: 2rem;
        display: flex;
        gap: 1rem;
        
    }
    .iconosContacto img{
        background-color: aliceblue;
        text-align: center;
        width: 3rem;
        border-radius: 100px;
    }
    .foto{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .foto img {
        height: auto; /* Cambia a auto para mantener la proporción de la imagen */
        width: 13rem; /* Ajusta según sea necesario */
        overflow: hidden;
        
        border-radius: 100px;
        z-index: -1;
    }
    .descripcion{
        flex: 75%;
        display: grid;
        grid-template-rows: .4fr 0.2fr 1fr;
    }
    #titulo{
        text-align: center;
        font-size: 3.5rem;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
    }
    #subtitulo{
        text-align: center;
        font-size: 2.5rem;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: bold;
        color: #9f7aea;
        padding: 0 1rem;
        margin: 0;
    }
    #parrafo{
        width: 90%;
        height: 100%;
        line-height: 2rem;
        margin: 0 auto;
        font-size: 1.2rem;
        text-align: center;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: bold;
    }

    @media(max-width:992px){
        .contenedor{
            flex-direction: column;
        }
        .foto-perfil{
            margin-bottom: 2rem;
        }
        
    }
</style>    