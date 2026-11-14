document.addEventListener("DOMContentLoaded", () => {
    // animaciones
    const elementos = document.querySelectorAll('.animar-al-scroll');

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const el = entrada.target;
                const animacion = el.dataset.animacion;

                el.classList.add('animate__animated', animacion);

                observador.unobserve(el);
            }
        });
    }, {
        threshold: 0.05
    });

    elementos.forEach(el => observador.observe(el));

    // favicon random
    const favicons = [
        "src/images/favicon_ps.png",
        "src/images/favicon_n.png",
        "src/images/favicon_sp.png",
        "src/images/favicon_lr.png"
    ];

    const randomIndex = Math.floor(Math.random() * favicons.length);

    document.getElementById("favicon").href = favicons[randomIndex];

    // CV
    window.abrirModal = function () {
        const modal = document.getElementById('modal-imagen');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.cerrarModal = function () {
        const modal = document.getElementById('modal-imagen');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.cerrarModal();
        }
    });
});