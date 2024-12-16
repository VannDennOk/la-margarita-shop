const opinionesdb = [

    {
        id: "user01",
        imagen: "../images/opiniones/opiniones-usuarios-carla.jpg",
        alt: "retrato de mujer joven con cabello castaño recogido",
        nombre: "Carla",
        fecha: "15/09/2024",
        titulo: "Excelente servicio",
        opinion: "Pedí un ramo personalizado para el cumpleaños de mi mamá, y quedó hermoso. Las flores frescas y el diseño, impecable. ¡Se nota el amor con el que trabajan!",
        visible: true,
        destacado: false
    },
    {
        id: "user02",
        imagen: "../images/opiniones/opiniones-usuarios-sofia.jpg",
        alt: "retrato de mujer joven rubia cabello suelto",
        nombre: "Sofía",
        fecha: "21/08/2024",
        titulo: "Lujaso",
        opinion: "Compré un ramo para decorar un evento en casa, ¡y fue la sensación! Llegaron en perfectas condiciones y el aroma llenó toda la sala. Definitivamente volveré a comprar aquí.",
        visible: true,
        destacado: false
    },
    {
        id: "user03",
        imagen: "../images/opiniones/opiniones-usuarios-lucila.jpg",
        alt: "retrato de mujer joven con cabello castaño recogido",
        nombre: "Lucila",
        fecha: "30/10/2024",
        titulo: "Taller",
        opinion: "Tomé el taller de ramos estacionales, ¡y fue una experiencia inolvidable! Todo súper organizado, aprendí mucho y me llevé un ramo precioso hecho por mí ¡Gracias por la paciencia y dedicación!!",
        visible: true,
        destacado: false
    },
    {
        id: "user04",
        imagen: "../images/opiniones/opiniones-usuarios-daniel.jpg",
        alt: "retrato hombre joven pelo castaño corto",
        nombre: "Daniel",
        fecha: "12/11/2024",
        titulo: "Recomiendo!",
        opinion: "El ramo llegó tal cual las fotos de la web, incluso mejor. Detalles cuidados y flores frescas que duraron semanas. Recomendadísimos para cualquier ocasión especial.",
        visible: true,
        destacado: false
    },
    {
        id: "user05",
        imagen: "../images/opiniones/opiniones-usuarios-martin.jpg",
        alt: "pareja hombre mujer adultos",
        nombre: "Martín",
        fecha: "05/07/2024",
        titulo: "Espectacular",
        opinion: "Hice un pedido express para el aniversario con mi pareja y cumplieron con todo. El ramo era espectacular, y la atención al cliente fue excelente. 100% confiable.",
        visible: true,
        destacado: false
    },
    {
        id: "user06",
        imagen: "../images/opiniones/opiniones-usuarios-juliana.jpg",
        alt: "pareja hombre y mujer jóvenes",
        nombre: "Juliana",
        fecha: "17/12/2024",
        titulo: "Calidad!",
        opinion: "¡Qué lindo es encontrar una tienda tan comprometida con la calidad! Pedí un ramo de flores primaverales, y quedó perfecto como decoración para mi oficina. Súper original y bien presentado.",
        visible: true,
        destacado: false
    },
    {
        id: "user07",
        imagen: "../images/opiniones/opiniones-usuarios-pilar.jpg",
        alt: "retrato de mujer joven con cabello castaño",
        nombre: "Pilar",
        fecha: "20/10/2024",
        titulo: "Confiable",
        opinion: "Me encuentro en España y quería enviar un regalo a mi mamá por su día. Pueden hacer su pedido con toda confianza, ya que en un día tan movido cumplieron a la perfección. Tanto el producto, como el servicio, se merecen un 10/10.",
        visible: true,
        destacado: true
    },

    {
        id: "user08",
        imagen: "../images/opiniones/opiniones-usuarios-mariarosa.jpg",
        alt: "mujer mayor con pelo corto y pelirrojo",
        nombre: "María Rosa",
        fecha: "10/10/2024",
        titulo: "Chocha",
        opinion: "Servicio de lujo!! Muy contenta, quería decorar mi casa para festejar mi cumpleaños número 80 y me trataron como una reina. Mis amigas quedaron todas celosas!!!",
        visible: true,
        destacado: true
    },

    {
        id: "user09",
        imagen: "../images/opiniones/opiniones-usuarios-juanjo.jpg",
        alt: "hombre morocho con anteojos",
        nombre: "Juanjo",
        fecha: "21/05/2024",
        titulo: "Muy bien todo",
        opinion: "Las chicas son súper atentas, cordiales y responsables, además de crear hermosos ramos! Es la segunda vez que compro para mi novia por nuestro aniversario. Me hacen quedar muy bien!",
        visible: true,
        destacado: true
    },

    {
        id: "user10",
        imagen: "../images/opiniones/opiniones-usuarios-claudia.jpg",
        alt: "retrato mujer rubia",
        nombre: "Claudia",
        fecha: "26/07/2024",
        titulo: "Excelente!",
        opinion: "Excelente servicio! El ramo fue recibido en el día y horario acordado y además estaba muy bonito! Tanía mis dudas pero me contacté por whatsapp y me respondieron todo. Excelente atención! Gracias!!",
        visible: true,
        destacado: true
    },

    {
        id: "user11",
        imagen: "../images/opiniones/opiniones-usuarios-marce.jpg",
        alt: "mujer rubia con paisaje montañoso atrás",
        nombre: "Marce",
        fecha: "03/09/2024",
        titulo: "Muy bueno!",
        opinion: "Hice el taller de armado de flores básico. Muy bien explicado y con todas las herramientas. Además pasé una linda tarde con gente muy copada.",
        visible: true,
        destacado: true
    },

    {
        id: "user12",
        imagen: "../images/opiniones/opiniones-usuarios-agusmati.jpg",
        alt: "pareja hombre y mujer jóvenes",
        nombre: "Agus y Mati",
        fecha: "15/04/2024",
        titulo: "Novia feliz",
        opinion: "Quería un ramo de novias especial y ellas lo lograron. Además hicimos los de las madrinas y la nena de las flores, un paquete genial! La calidez de las dueñas es espectacular.",
        visible: true,
        destacado: true
    },

]

//function crearOpinionesPorFiltro() {
// Variables para almacenar las opiniones filtradas
        let opinionesDestacadasHTML = "";
        let opinionesVisiblesHTML = "";
    
        // Recorrer las opiniones y clasificarlas según su visiblidad o destacado
        for (let indice = 0; indice < opinionesdb.length; indice++) {
            const opinion = opinionesdb[indice];
            const opinionHTML = `
            <div class="container__opiniones-card" >
                <div class="container__opiniones-card-header">
                    <img class="img_opinion" src="${opinionesdb[indice].imagen}"
                        alt="${opinionesdb[indice].alt}">
                    <div class="opinion_data">
                        <span><cite class="txt-body txt-medium txt-dark">${opinionesdb[indice].nombre}</cite></span>
                        <span><time class="txt-body txt-small txt-dark"
                        datetime="2024-09-15">${opinionesdb[indice].fecha}</time></span>
                        <div class="opinion_calificacion">
                            <i class="bi bi-star-fill bi-small bi-amarillo"></i>
                            <i class="bi bi-star-fill bi-small bi-amarillo"></i>
                            <i class="bi bi-star-fill bi-small bi-amarillo"></i>
                            <i class="bi bi-star-fill bi-small bi-amarillo"></i>
                            <i class="bi bi-star-fill bi-small bi-amarillo"></i>
                        </div>
                    </div>
                </div>
                <h2 class="titulo txt-medium txt-dark txt-strong">${opinionesdb[indice].titulo}</h2>
                <p class="txt-body txt-small txt-dark">${opinionesdb[indice].opinion}</p>
                </div>
                `;
 
            // Clasificar según destacado
            if (opinion.destacado) {
                opinionesDestacadasHTML += opinionHTML;
            }
    
            // Clasificar según disponibilidad
            if (opinion.visible) {
                opinionesVisiblesHTML += opinionHTML;
            }
        }
    
        // Insertar productos en sus contenedores correspondientes
        if (document.getElementById("opiniones-card-visibles")) {
            document.getElementById("opiniones-card-visibles").innerHTML = opinionesVisiblesHTML;
        }
        if (document.getElementById("opiniones-card-destacadas")) {
            document.getElementById("opiniones-card-destacadas").innerHTML = opinionesDestacadasHTML;
        }

    
//}

//crearCardsPorFiltro();