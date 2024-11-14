<template>
    <section class="contenedor">
        <div class="navegacion">
            <div class="boton" v-for="(tarjeta, index) in tarjetas" @click="cambiarTarjeta(tarjeta.id)">
                <span>→</span> {{ tarjeta.titulo }}
            </div>
        </div>
        <div class="tarjetas" v-for="(tarjeta, index) in tarjetas">
            <div v-if="tarjeta.id === tarjetaActual" :class="`tarjeta ${tarjeta.titulo}`">
                <div class="cabecera" v-if="tarjeta.id === 1">
                    <div class="titulos"><p>Nivel Academico</p></div>
                    <div class="titulos"><p>Descripcion</p></div>
                    <div class="titulos"><p>Institucion</p></div>
                    <div class="titulos"><p>Fecha Inicio</p></div>
                    <div class="titulos"><p>Fecha fin</p></div>
                </div>
                <div class="cabecera" v-else-if="tarjeta.id === 2">
                    <div class="titulos"><p>Tipo</p></div>
                    <div class="titulos"><p>Descripcion</p></div>
                    <div class="titulos"><p>Institucion</p></div>
                    <div class="titulos"><p>Fecha Inicio</p></div>
                    <div class="titulos"><p>Fecha fin</p></div>
                </div>
                <div class="cabecera" v-else>
                    <div class="titulos"><p>Tipo</p></div>
                    <div class="titulos"><p>Descripcion</p></div>
                    <div class="titulos"><p>Institucion</p></div>
                    <div class="titulos"><p>Fecha Inicio</p></div>
                    <div class="titulos"><p>Fecha fin</p></div>
                </div>
                <div class="Tabla" @scroll="cambiarApuntador">
                    <table>
                        <tbody>
                            <tr v-for="(Estudio, index) in tarjeta.Lista.reverse()" :key="index">
                                <td>{{ Estudio.Nivel }}</td>
                                <td>{{ Estudio.descripcion }}</td>
                                <td>{{ Estudio.Institucion }}</td>
                                <td>{{ Estudio.FechaInicio }}</td>
                                <td>{{ Estudio.FechaFin }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="apuntador">↓</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { tarjetas } from '../assets/Estudios.js';

const tarjetaActual = ref(1);

const cambiarTarjeta = (index) => {
    tarjetaActual.value = index;
};

const cambiarApuntador = (event) => {
    const tabla = event.target;
    const tarjetaElement = tabla.closest('.tarjeta');
    if (tarjetaElement) {
        const apuntador = tarjetaElement.querySelector('.apuntador');
        if (apuntador) {
            if (tabla.scrollTop + tabla.clientHeight >= tabla.scrollHeight) {
                apuntador.innerHTML = "↑";
            } else {
                apuntador.innerHTML = "↓";
            }
        }
    }
};
</script>

<style  scoped>
    .contenedor{
        margin: auto;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 99%;
        height: 620px;
        flex-wrap: wrap;
    }
    .navegacion{
        margin: .5rem 1rem;
        display: flex;
        padding: 0 2rem;
        justify-content: space-around;
        align-items: center; 
    }
    .boton{
        padding: .9rem;
        font-size: 1.2rem;
        font-family: "Arima", system-ui;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: bold;
        text-align: center;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .boton span{
        font-size: 2rem;
        animation: parpadeo 1.5s infinite;
        margin-right: 1rem;
    }

    .apuntador{
        position: absolute;
        font-size: 2rem;
        right: 20px;
        top: 200px;
        animation: parpadeo 1.5s infinite;
    }
    @keyframes parpadeo {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
    }
    .tarjetas{
        position: relative;
    }
    .tarjeta{
        height: 400px;
        width: 99%;
        margin: auto;
    }
    .Tabla{
        height: 380px;
        overflow: scroll;
        scrollbar-width: none;
        position: relative;
    }
    .cabecera{
        width: 99%;
        height: 3rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: auto;
        border: solid 2px grey;
        border-radius: 20px;
    }
    .titulos{
        width: 100%;
        height: 2rem;
    }
    .titulos p{
        margin: 1rem;
    }
    table{
        width: 100%;
        text-align: center;
    }
    table th{
        width: 20%;
        height: 1rem;
        text-align: center;
        border: solid 2px white;
        padding: 1rem;
    }
    table td{
        width: 200px;
        height: 2rem;
        padding: 2rem;
    }
    
</style>