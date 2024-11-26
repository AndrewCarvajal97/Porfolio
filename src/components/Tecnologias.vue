<template>
    <div class="principal">
    <h2>Stacks Manejados</h2>
        <div class="Stacks">
            <div class="contenedor">
                <h3>Vue 3 + Express.Js + Mysql + Node.Js</h3>
                <div class="imagenes">
                    <img src="/svg/Tecnologias/TecnologiaVue3.webp" alt="logo de la tecnologia Vue3">
                    <img src="/svg/Tecnologias/TecnologiaExpressJs.webp" alt="logo de la tecnologia Express.Js">
                    <img src="/svg/Tecnologias/TecnologiaMySQL.webp" alt="logo de la tecnologia MySQL">
                    <img src="/svg/Tecnologias/TecnologiaNodeJs.webp" alt="logo de la tecnologia Node.Js">
                </div>
            </div>
            <div class="contenedor">
                <h3>React Js+ Express.Js + Mysql + Node.Js</h3>
                <div class="imagenes">
                    <img src="/svg/Tecnologias/TecnologiaReactJs.webp" alt="logo de la tecnologia Vue3">
                    <img src="/svg/Tecnologias/TecnologiaExpressJs.webp" alt="logo de la tecnologia Express.Js">
                    <img src="/svg/Tecnologias/TecnologiaMySQL.webp" alt="logo de la tecnologia MySQL">
                    <img src="/svg/Tecnologias/TecnologiaNodeJs.webp" alt="logo de la tecnologia Node.Js">
                </div>
            </div>
            <div class="contenedor">
                <h3>Vue 3 + Spring + Mysql + Java</h3>
                <div class="imagenes">
                    <img src="/svg/Tecnologias/TecnologiaVue3.webp" alt="logo de la tecnologia Vue3">
                    <img src="/svg/Tecnologias/TecnologiaSpring.webp" alt="logo de la tecnologia Express.Js">
                    <img src="/svg/Tecnologias/TecnologiaMySQL.webp" alt="logo de la tecnologia MySQL">
                    <img src="/svg/Tecnologias/TecnologiaJava.webp" alt="logo de la tecnologia Node.Js">
                </div>
            </div>
            <div class="contenedor">
                <h3>React Js + Spring + Mysql + Java</h3>
                <div class="imagenes">
                    <img src="/svg/Tecnologias/TecnologiaReactJs.webp" alt="logo de la tecnologia Vue3">
                    <img src="/svg/Tecnologias/TecnologiaSpring.webp" alt="logo de la tecnologia Express.Js">
                    <img src="/svg/Tecnologias/TecnologiaMySQL.webp" alt="logo de la tecnologia MySQL">
                    <img src="/svg/Tecnologias/TecnologiaJava.webp" alt="logo de la tecnologia Node.Js">
                </div>
            </div>
            <div class="contenedor">
                <h3>React Js + Express.Js + PostgreSQL + Node.Js</h3>
                <div class="imagenes">
                    <img src="/svg/Tecnologias/TecnologiaReactJs.webp" alt="logo de la tecnologia Vue3">
                    <img src="/svg/Tecnologias/TecnologiaExpressJs.webp" alt="logo de la tecnologia Express.Js">
                    <img src="/svg/Tecnologias/TecnologiaPostgresSql.webp" alt="logo de la tecnologia MySQL">
                    <img src="/svg/Tecnologias/TecnologiaNodeJs.webp" alt="logo de la tecnologia Node.Js">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.principal{
    display: grid;
    grid-template-rows: 1fr ;
    width: 100%;
    box-sizing: border-box;
    margin-top: 2.5rem;
}
.Stacks{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    row-gap: 5rem;
}

.contenedor{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
h2{
    text-align: center;
    font-size: 2.5rem;
    font-family: "Arima", system-ui;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: bold;
}

.imagenes{
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
}
img{
    height: 60px;

}
</style>