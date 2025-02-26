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

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}


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

        document.addEventListener("DOMContentLoaded", function() {
            typeWriterEffect("mensaje1", mensaje1, 15);
            typeWriterEffect("mensaje2", mensaje2, 15);
    });

