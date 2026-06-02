document.addEventListener("DOMContentLoaded", () => {
    
    // Configuración del Observador de Scroll para las animaciones
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observerOptions = {
        root: null, // usa el viewport del navegador
        threshold: 0.15, // se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // se activa un poco antes de que entre del todo
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase que dispara la transición CSS
                entry.target.classList.add("active");
                // Una vez animado, dejamos de observarlo para ahorrar rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Asignar el observador a cada elemento con la clase
    revealElements.forEach(element => {
        elementObserver.observe(element);
    });

    // Pequeño efecto dinámico interactivo para el fondo resplandeciente (Mouse Tracker)
    const bgGlow = document.querySelector(".bg-glow");
    window.addEventListener("mousemove", (e) => {
        // Mueve ligeramente el resplandor siguiendo al mouse con retraso suave
        const moveX = (e.clientX * 0.05);
        const moveY = (e.clientY * 0.05);
        bgGlow.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});