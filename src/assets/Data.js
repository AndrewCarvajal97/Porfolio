const HTML5= "/svg/Logos/html5.svg"
const CSS3="/svg/Logos/css3.svg"
const JavaScript="/svg/Logos/javascript.svg"
const React="/svg/Logos/react.svg"
const Node_js="/svg/Logos/nodedotjs.svg"
const Vue3="/svg/Logos/Vue.svg"
const Express="/svg/Logos/express.svg"
const Git="/svg/Logos/git.svg"
const GitHub="/svg/Logos/github.svg"
const Laragon="/svg/Logos/laragon.svg"
const Mysql="/svg/Logos/mysql.svg"
const PHP="/svg/Logos/php.svg"
const PostgreSQL ="/svg/Logos/postgresql.svg"
const Postman="/svg/Logos/postman.svg"
const SpringBoot="/svg/Logos/spring.svg"
const Vite = "/svg/Logos/vite.svg"
const Vue="/svg/Logos/Vue.svg"
const Xampp="/svg/Logos/xampp.svg"
const zod ="/svg/Logos/zod.svg"

export const projects = [
      {
          id: 1,
          titulo: "Aplicativo web Coopservices",
          imagen: "/img/Projects/Coopservices.webp",
          descripcion: "Aplicación web diseñada para el registro, control y gestión de los usuarios de la cooperativa de ahorro y crédito CoopServices. Desarrollada en Node.js con Express para el backend, utilizando una combinación de plantillas y código en HTML5, CSS3 y JavaScript Vanilla.",
          tecnologias: {HTML5, 
                        JavaScript, 
                        CSS3, 
                        Node_js,
                        Express,
                        PostgreSQL,
                        Git,
                        GitHub,
                        Postman},
          linkGIT: "https://github.com/andrewcarvajal97"
      },
      {
        id: 2,
        titulo: "Ajedrez",
        imagen: "/img/Projects/Captura de pantalla ajedrez.webp",
        descripcion: "Juego de ajedrez desarrollado en JavaScript Vanilla, que permite a los usuarios jugar una partida interactiva en un entorno web. Implementado con lógica de reglas del juego y movimiento de piezas, el proyecto ofrece una experiencia fluida y dinámica sin necesidad de dependencias externas, demostrando el uso eficiente de JavaScript puro para crear aplicaciones interactivas.",
        tecnologias: {HTML5, 
                      JavaScript, 
                      CSS3},
        linkGIT: "https://github.com/andrewcarvajal97"
    },
      {
          id: 2,
          titulo: "SENHUB-Zona Franca ",
          imagen: "/img/Projects/Captura de pantalla ZonaFranca.webp",
          descripcion: " Durante el hackathon de 2023 de Softic Colombia, participé en el desarrollo de una aplicación web para administrar y publicar eventos de salud ocupacional en la zona franca. Mi rol incluyó diseñar y maquetar la base de datos con PostgreSQL. La aplicación permitía a los usuarios registrar su asistencia a los eventos y acumular puntos canjeables por premios.",
          tecnologias:{
            React,
            Node_js,
            PostgreSQL,
            Laragon,
            Postman,
            Git,
            GitHub,
            Postman
          },
          linkGIT: "https://github.com/andrewcarvajal97"
      },
      {
          id: 3,
          titulo: "Coversor de monedo Alura",
          imagen: "/img/Projects/Captura de pantalla conversor de modenas alura.webp",
          descripcion: "API REST desarrollada en Java con Spring Boot para realizar el cambio de divisas y comprender el funcionamiento del framework.",
          tecnologias: {
            SpringBoot,
            Mysql,
            Postman
          },
          linkGIT: "https://github.com/andrewcarvajal97"
      },
      {
          id: 4,
          titulo: "Libreria Alura",
          imagen: "/img/Projects/Captura de pantalla libreria Alura.webp",
          descripcion: "API REST desarrollada en Java con Spring Boot para la búsqueda y registro de libros según filtros determinados, con el objetivo de profundizar en el uso del framework.",
          tecnologias: {
            SpringBoot,
            Mysql,
            Postman
          },
          linkGIT: "https://github.com/andrewcarvajal97"
      },
      {
          id: 5,
          titulo: "Foro Alura",
          imagen: "/img/Projects/Captura de pantalla Foro Alura.webp",
          descripcion: "API REST desarrollada en Java con Spring Boot para gestionar un foro, implementando todas las operaciones CRUD necesarias para su correcto funcionamiento, con el objetivo de profundizar y afianzar los conceptos del framework",
          tecnologias: {
            SpringBoot,
            Mysql,
            Postman
          },
          linkGIT: "https://github.com/andrewcarvajal97"
      },
      {
        id: 6,
        titulo: "Factura mensuly",
        imagen: "/img/Projects/Factura Mensuli_page-0002.webp",
        descripcion: "Proyecto desarrollado en PHP para la empresa Mensuly, una distribuidora y comercializadora de productos de consumo masivo ubicada en Bucaramanga. El proyecto consistió en la creación de una maqueta de facturación diseñada para optimizar y agilizar el proceso de gestión de facturas de la empresa.",
        tecnologias: {
          PHP,
          HTML5
        },
        linkGIT: "https://github.com/andrewcarvajal97"
    },
    {
        id: 7,
        titulo: "Pagina web Mensuly S A S",
        imagen: "/img/Projects/Captura de pantalla SPAMensuly.webp",
        descripcion: "Página web desarrollada como una Single Page Application (SPA) para Mensuly S.A.S., con el objetivo de exponer y presentar las políticas empresariales de la compañía. Esta solución permitió una navegación fluida y una experiencia de usuario optimizada para informar de manera clara las directrices y valores de la empresa.",
        tecnologias: {
          Vue3,
          Vite
        },
        linkGIT: "https://github.com/andrewcarvajal97"
    },
    {
        id: 8,
        titulo: "Pagina web Distribuidora Pastor Julio Delgado",
        imagen: "/img/Projects/captura de pantalla SPApastorJulio.webp",
        descripcion: "Página web desarrollada como una Single Page Application (SPA) para Pastor Julio Delgado, una empresa distribuidora y comercializadora de productos de consumo masivo ubicada en Bucaramanga. La página ofrece una presentación dinámica de los productos y marcas de alta calidad, tanto nacionales como internacionales, disponibles en la empresa, brindando a los usuarios una experiencia de navegación ágil y atractiva.",
        tecnologias: {
          Vue3,
          Vite
        },
        linkGIT: "https://github.com/andrewcarvajal97"
    },
    {
        id: 9,
        titulo: "Aplicativo web Recursos Humanos",
        imagen: "/img/Projects/Captura de pantalla Ofertas de empleo .webp",
        descripcion: "Aplicativo empresarial desarrollado para Pastor Julio Delgado, diseñado para administrar y mostrar ofertas laborales internamente a sus empleados. La herramienta facilita la visualización de oportunidades dentro de la empresa, optimizando el proceso de gestión de recursos humanos y promoviendo el crecimiento profesional dentro de la organización",
        tecnologias: {
          Vue3,
          Node_js,
          Express,
          Mysql,
          Xampp,
          zod,
          Vite,
          Postman,

        },
        linkGIT: "https://github.com/andrewcarvajal97"
    },
  ]