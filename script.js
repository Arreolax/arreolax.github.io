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

    // CV Previews
    let previewsListas = 0;

    function registrarCargaPreview() {
        previewsListas++;

        if (previewsListas >= 2) {
            desbloquearTarjetaCV();
        }
    }

    function desbloquearTarjetaCV() {
        const btn = document.getElementById('btn-abrir-cv');
        const idle = document.getElementById('cv-card-idle');
        const loading = document.getElementById('cv-card-loading');

        if (btn && idle && loading) {
            loading.classList.add('hidden');
            idle.classList.remove('hidden');

            btn.classList.remove('pointer-events-none', 'cursor-wait', 'border-slate-600');
            btn.classList.add('cursor-pointer', 'border-white', 'hover:border-sky-400', 'hover:scale-105');
            btn.setAttribute('tabindex', '0');
            btn.removeAttribute('aria-disabled');

            const img = btn.querySelector('img');
            if (img) {
                img.classList.remove('opacity-50');
                img.classList.add('opacity-70', 'group-hover:opacity-100', 'group-hover:scale-110');
            }
        }
    }

    setTimeout(() => {
        if (previewsListas < 2) {
            desbloquearTarjetaCV();
        }
    }, 10000);

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