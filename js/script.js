function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


function typeWriterEffect(elementId, text, speed = 50, callback = null) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Mensajes para mostrar en forma de maquina de escribir en tiempo real
const mensaje1 = `Hola, mi gatita. Quiero que sepas que te amo mucho (sé que lo sabes, pero nunca está de más recalcarlo, jeje). Eres mi gatita, mi rayito de luz; tú me iluminas como el sol ilumina la Tierra. Eres el sol que calienta mis mañanas, la luna que ilumina mis noches más oscuras. Eres mi gatita regalona, eres mi todo, el amor de mi vida y eso se queda corto, porque eres el amor de esta vida y de todas las que están por venir.
            Eres el amor de mi alma. Estoy atado a tu ser en cuerpo y alma, de la misma manera en que me entrego a ti, mi amor. Eres solo tú. Mi alma seguirá apegada a ti incluso después de la muerte, porque sé que, si existe algún dios, nos mantendrá juntos en todas las vidas, tanto pasadas como futuras.
            Te amo mucho más allá de lo que mis palabras pueden expresar.
            Sigo deseando que podamos expandir aún más nuestra historia de amor, seguir creciendo juntos y siendo felices, manteniéndonos siempre fieles a nosotros mismos. Porque lo primordial es no perdernos en el camino, sino progresar juntos, sin dejar atrás al otro.
            Si uno tiene planes, debemos ser conscientes de incluir al otro en ellos, porque somos un equipo, no simples individuos. Siempre debemos recordar que tenemos a nuestra pareja; no podemos tomar decisiones apresuradas o impulsivas sin considerar al otro. Nos cuidamos mutuamente, pero, más que eso, nos amamos, y ese amor está por encima de todo. Es nuestra mayor prioridad, la certeza de que nos preocupamos el uno por el otro.
            Habrá momentos en los que nos pongamos tercos o discutamos, pero no podemos permitir que eso nos sobrepase. No podemos dejar que el ego se interponga en el amor que sentimos ni que el orgullo nos controle.
            Te amo muchísimo, mi gatita preciosa. Espero que leas esto al despertar.💖`;

const mensaje2 = `Hola de nuevo, espero que hayas tenido un bonito dia mi amor, quiero decirte que te amo mucho (nunca esta de mas recalcarlo muak). Que te deseo con todo mi corazón, te deseo con todo mi ser. Eres mi unico y gran amor que yo tengo, no necesito de nadie mas si te tengo a ti a mi lado, porque tu eres mi mujer ;3 y se que siempre me apoyaras. Al igual que yo te apoyare en todo contigo mi amor, pero siempre velare por el bien tuyo, por lo que mejor sea para ti, te apoyare en buenas decisiones pues deah jsjsjs, en la mejor decision para ti.
            Que nervios pensar que tu cumpleaño esta cada dia mas cerca jsjsjs, me da cosita, no se que subir 😭😭😭 que nervios deah, y nisiquiera es mi cumpleaños pero me siento nervioso de igual manera. Debo buscarte un regalito, hoy apenas es martes, pero siento como si la semana estuviera por acabar ya, el jueves si o si debo ir al centro a buscarte un regalito. Y mi amor, mi gatita, no quiero que pienses o tengas en tu cabecita que voy andar mirando a otras feuchentas, porque yo solo te miro a ti mi amor, debes tener eso en mente, solo te miro a ti, solo te deseo a ti, solo te amo a ti, no voy a querer a nadie mas que no seas tu, no voy a estar mirando cuando solo te quiero mirar a ti mi vida, te quiero mirar a ti por el resto de nuestras vidas :3
            No tengas en mente eso de que andare mirando, porque no sera asi, ¿que clase de tonto seria si lo hiciera?, yo no te cambiaria por nadie mi amor, tampoco miraria a nadie que no seas tu, porque tengo ojos solo para ti mi vida, ma vie, mi repollito, mi potito, solo tu y nadie mas.
            Te amo mucho, no se que haria sin ti gatita, sin ti no soy nadie, no tengo nada si no te tengo a ti, sin tu amor no tengo nada, si no te tengo a mi lado, nada vale la pena.`;

const mensaje3 = `Aun recuerdo la primera vez que empezamos a hablar, fue tan bonito, tan especial, porque como sabes, tuvimos y sentimos esa conexion, esa quimica, esa chispa que nos unio, que nos hizo conocernos, que nos hizo querernos, que nos hizo amarnos, que nos hizo ser lo que somos hoy, una pareja enamorada. Sentia no se, tanta conexion contigo, tanto amor, que lo unico que yo queria era estar contigo, era hablarte, era conocerte, y a dia de hoy sigue siendo igual, me sigo enamorando de ti, siento que nuestra conexion se fortalece, como tu dijiste; "nos estamos hacercando mas apesar de la distancia" o algo asi dijiste jsjsjs te amo.
Y no puedo evitar desear estar contigo, desde que te conoci es lo que mas deseo gatita, porque tu eres mi todo, no hay nada que desee con mas ganas que el poder casarme contigo, el formar una familia, el vivir juntos, el ser marido y mujer jsjsjs :3 y tu sabes eso mi amor, que eso es lo que mas deseo, y solo lo deseo contigo, solo te amo a ti, solo te quiero a ti, no necesito nada mas si te tengo a ti, mi propia carrera no me importa si te tengo a mi lado, porque tu eres mi vida, tu eres mi amor, tu eres mi todo.💓💖💗`;

const mensaje4 = `Hola mi gatita mosha :3 jsjsjs, ya es el 4to mensaje :OO deah.
Hola miamorshito bella, quiero decirte que eres muy bella, y hermosa, aunque eso tu ya lo sabes muuuak. Pero lo que no sabes, es que yo te amo mucho, y que te deseo con todo mi corazon, deah, bueno eso ya lo sabes, pero no sabes lo tan inmenso que es mi amor por ti, porque tu no eres solo mi polola mi amor, tu eres mi todo. No eres una "propiedad" eres tu mi gatita, te amo porque eres tu, no porque eres mia (aparte de eso deah jijij :3) te amo por quien eres mi amor, y no por como me haces sentir o tu forma de tratarme (bueno obviamente que igual te amo por eso, pero ese no es el punto muuak), porque eres solo tu mi amor, no hay nadie mas, no hubo nadie mas, y no habra nadie mas, solo tu, tu eres el alfa y el omega, tu eres el principio y el fin jsjsjs, tu eres mi todo mi repollito, y estoy locamente enamorado de ti, no me importa nada de lo que pueda pasar, porque se que siempre podremos juntos, podemos superar cualquier dificultad porque nos amamos, porque somo un solo ser, porque hicismo mitosis inversa deahh👻👻 te amo mi amor, y debes estar tranquila con el hecho de que dia tras dia yo seguire amandote, seguire eligiendo amarte, porque mi amor por ti es demasiado, supera el infinito, mi amor por ti atraviesa realidades, atraviesa dimensiones, atraviesa el espacio y tiempo.`

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("mensaje1").innerText = mensaje1;
        document.getElementById("mensaje2").innerText = mensaje2;
        document.getElementById("mensaje3").innerText = mensaje3;
        document.getElementById("mensaje4").innerText = mensaje4;
    });
    //typeWriterEffect("mensaje3", mensaje3, 15); para que tenga el efecto de maquina de escribir
    

    document.addEventListener("DOMContentLoaded", () => {
        // Datos de las imágenes
        const images = [
            { title: "De Las Primeras", src: "/story/images/nosotros.webp", description: "Una de nuestras primeras fotitos que se volvio nuestra favorita por un buen tiempo, hasta la tengo de publicacion en mi ig jsjsjs." },
            { title: "Última Cita", src: "/story/images/nosotros1.jpg", description: "Nuestra ultima foto juntitos, salimos bien bonitos, pero mas bonita tu muuuuak." },
            { title: "Viaje Romántico", src: "/story/images/nosotros2.png", description: "Como no recordar la vez que nos casamos en roblox :3." },
            { title: "Boda", src: "/story/images/nosotros3.jpg", description: "Cómo olvidar el dia que nos casamos. Nos vemos tan jovenes jsjsjs." },
            { title: "Favorita", src: "/story/images/nosotros4.jpg", description: "Una de las primeras fotos que se volvio de las favoritas, bien bonita." },
            { title: "Invierno", src: "/story/images/nosotros5.jpg", description: "Nuestra fotito de invierno jsjsjs, estabamos bien acurrucados porque conmigo no sentias frio, era tu osito por lo peludo jsjsjsjs, y no sentias frio cuando dormias conmigo, te amo." },
            { title: "Primera del Año", src: "/story/images/nosotros6.jpg", description: "La primera vez que nos vimos este año, fue tan bonito, era como irreal, el poder tocarnos y sentirnos, estabamos bien nerviosos." },
            { title: "Besito", src: "/story/images/nosotros7.jpg", description: "Esta fotito está porque esta bonita, y porque hay una foto en la que yo te doy besito, y entonces asi estamos a la par jsjs te amo mucho mi gatita." }
        ];
    
        // Contenedor de la galería
        const galleryContainer = document.getElementById("gallery-container");
    
        // Generar tarjetas dinámicamente
        images.forEach(img => {
            const card = document.createElement("div");
            card.classList.add("col-md-6", "col-lg-4");
            card.dataset.aos = "fade-up";
            card.innerHTML = `
                <div class="card shadow-sm border-0">
                    <h5 class="card-header text-center bg-light">${img.title}</h5>
                    <img src="${img.src}" class="card-img-top" alt="${img.title}">
                    <div class="card-body">
                        <p class="card-text">${img.description}</p>
                    </div>
                </div>
            `;
            galleryContainer.appendChild(card);
        });
    
        // Función para activar el botón de scroll arriba
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
});
    