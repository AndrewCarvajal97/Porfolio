<template>
    <div class="work-experiences-container">
      <h2>Experiencias Previas</h2>
      <div class="experiences-grid">
        <div 
          v-for="experience in experiences" 
          :key="experience.id" 
          class="experience-card"
        >
          <h3>{{ experience.company }}</h3>
          <div class="experience-content">
            <div class="experience-details">
              <p><strong>Fecha Inicio:</strong> {{ experience.startDate }}</p>
              <p><strong>Fecha Fin:</strong> {{ experience.endDate }}</p>
              <p><strong>Cargo:</strong> {{ experience.position }}</p>
              <p><strong>Jefe Directo:</strong> {{ experience.supervisor }}</p>
              <p><strong>Teléfono Contacto:</strong> {{ experience.contactPhone }}</p>
            </div>
            <div class="experience-responsibilities">
              <p><strong>Funciones:</strong></p>
              <ul>
                <li v-for="(responsibility, index) in experience.responsibilities" :key="index">
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    company: 'Practicas Distribuciones Pastor Julio Delgado S.A.',
    startDate: '17 De Abril Del 2024',
    endDate: '17 De Octubre Del 2024',
    position: 'Aux Analisis y Desarrollo De Software Empresarial',
    supervisor: 'Fabián Camilo Alvarado Sanabria',
    contactPhone: '3002828948',
    responsibilities: [
      'Leer y Evaluar Historias de Usuario para el desarrollo Orion APP ',
      'Analisar y reportar errores en el desarrollo Orion APP',
      'Hacer seguimiento a issues en el desarrollo Orion APP',
      'Hacer levantamiento y estructuracion de historias de usuarios para aplicativos empresariales',
      'Desarrollar nuevas apps cooporativas ',
      'Refactorizacion pagina principal de la compañia '
    ]
  },
  {
    id: 2,
    company: 'Yas Studio',
    startDate: '26 De Enero Del 2019',
    endDate: '19 De Agosto Del 2023',
    position: 'Encargado de recursos tecnológicos',
    supervisor: 'Javier Yahir Sanguino',
    contactPhone: '3112153465',
    responsibilities: [
      'Comprar y Actualizar los recursos tecnológicos',
      'Reparar y Mantener recursos tecnológicos',
      'Administrar la distribución de recursos tecnológicos',
      'Listar y Controlar los recursos tecnológicos',
      'Brindar Soporte en hardware y software',
      'Brindar Capacitaciones en uso de software'
    ]
  },
  {
    id: 3,
    company: 'Optecom Movistar Colombia',
    startDate: '17 De Septiembre Del 2018',
    endDate: '30 De Noviembre Del 2018',
    position: 'Encargado de recursos tecnológicos',
    supervisor: 'Optecom',
    contactPhone: '6053770050',
    responsibilities: [
        'Realizar ventas en frio de productos intangibles',
        'Administrar ventas y documentos necesarios para la tramitacion',
    ]
  },
  {
    id: 4,
    company: 'Atento Tele Servicios España',
    startDate: '15 De Agosto Del 2016',
    endDate: '15 De Agosto Del 2018',
    position: 'Agente Call Center y Back Office',
    supervisor: 'Ocupar Temporales',
    contactPhone: '(572) 487 99 99',
    responsibilities: [
      'Brindar soporte a cliente extrangero sobre productos intangibles',
      'Realizar ventas en frio de productos intangibles',
      'Administrar ventas y documentos necesarios para la tramitacion',
      'Gestionar los tramites de instalacion de productos intangibles',
      'Realizar ventas en frio en el departamento especialidado de ventas ',
    ]
  }
  // Puedes añadir más experiencias aquí
])
</script>

    
<style scoped>
.work-experiences-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Arima', system-ui;
    font-weight: 700;
    margin-top: 1rem;
    padding: 2rem;
    color: #fff;
    box-sizing: border-box;
}

.work-experiences-container h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #fff;
}

.experiences-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tres tarjetas por fila */
    gap: 1.5rem; /* Espacio entre las tarjetas */
    justify-content: center;
    padding: 0 1rem;
}

.experience-card {
    display: flex;
    flex-direction: column;
    border: 2px solid #444;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.1); /* Fondo semi-transparente para las tarjetas */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #fff;
}

.experience-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
}

.experience-card h3 {
    text-align: center;
    margin-bottom: 1rem;
    color: #ffdd57; /* Color destacado para los títulos */
}

.experience-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.experience-details p,
.experience-responsibilities p {
    margin: 0.5rem 0;
}

.experience-responsibilities ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 0.5rem 0;
}
.experience-responsibilities ul li{
    margin-bottom: 1rem;
} 
/* Ajustes responsivos */
@media (max-width: 900px) {
    .experiences-grid {
        grid-template-columns: repeat(2, 1fr); /* Dos tarjetas por fila en pantallas medianas */
    }
}

@media (max-width: 600px) {
    .experiences-grid {
        grid-template-columns: 1fr; /* Una tarjeta por fila en pantallas pequeñas */
    }
}
</style>
