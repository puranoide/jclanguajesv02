// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submission
document.querySelector('.cta-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias! Pronto nos pondremos en contacto contigo para agendar tu clase gratuita.');
    this.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

var testimonios={
    1:{nombre: "María Castro ",
    profesion: "Estudiante de Francés",
    testimonio: "En 6 meses pasé de no saber nada a poder mantener conversaciones fluidas en frances. Los profesores son increíbles y muy pacientes."},
    2:{nombre: "Miguel González",
    profesion: "Estudiante de Inglés",
    testimonio: "Me encanta la metodología de Jclanguajes. Los profesores son amables y compasivos. Recomiendo 100%."}
}

const testimonioscard = document.querySelector('.testimonial-card');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentTestimonial = 1;

btnPrev.addEventListener('click', () => {
    if (currentTestimonial > 1) {
        currentTestimonial--;
        showTestimonial(currentTestimonial);
    }
    else {
        currentTestimonial = Object.keys(testimonios).length;
        showTestimonial(currentTestimonial);
    }
});

btnNext.addEventListener('click', () => {
    if (currentTestimonial < Object.keys(testimonios).length) {
        currentTestimonial++;
        showTestimonial(currentTestimonial);
    }
    else {
        currentTestimonial = 1;
        showTestimonial(currentTestimonial);
    }
});

function showTestimonial(index) {
    testimonioscard.innerHTML = '';
    testimonioscard.innerHTML = `
            <p class="testimonial-text">${testimonios[index].testimonio}</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonios[index].nombre.charAt(0)}</div>
                <div class="author-info">
                    <h4>${testimonios[index].nombre}</h4>
                    <p>${testimonios[index].profesion}</p>
                </div>
            </div>
    `;
}

document.onload = showTestimonial(currentTestimonial);

const inputnumero=document.getElementById("numberinput");
inputnumero.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9+]/g, '');
});