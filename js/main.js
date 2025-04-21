// Scroll suave para enlaces del navbar
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Descargar archivo
function descargarArchivo(url) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//Script de cambio de idioma
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-language");
    const elements = document.querySelectorAll("[data-es][data-en]");
    let idioma = localStorage.getItem("idioma") || "es";

    function actualizarIdioma() {
      elements.forEach(el => {
        el.textContent = idioma === "es" ? el.dataset.es : el.dataset.en;
      });
    }

    toggleBtn.addEventListener("click", () => {
      idioma = idioma === "es" ? "en" : "es";
      localStorage.setItem("idioma", idioma);
      actualizarIdioma();
    });

    actualizarIdioma();
  });

// Efecto de aparición en scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});

// Efecto de hover dinámico en los iconos de contacto
document.querySelectorAll('.contact-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('glow');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('glow');
    });
});

// Activar animación de skill-circle cuando entren en pantalla
const skillItems = document.querySelectorAll('.skill-circle');
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-animate', 'true');
      }
    });
  }, { threshold: 0.3 });

  skillItems.forEach(skill => skillObserver.observe(skill));


// Formulario de contacto
    const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_mjgcpfd';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Correo';
      alert('¡Enviado!');
    }, (err) => {
      btn.value = 'Enviar Correo';
      alert(JSON.stringify(err));
    });
});