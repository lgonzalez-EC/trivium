(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Navbar background, sombra y cambio de logo al hacer scroll
    const navbar = document.getElementById('mainNavbar');
    const logoText = document.getElementById('logoText');
    const logoImg = document.getElementById('logoImg');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-black-blur', 'navbar-shadow');
            navbar.classList.remove('bg-transparent', 'bg-white');
            logoText.classList.remove('text-white');
            logoText.classList.add('text-primary');
            // logoImg.src = 'img/logo_s.webp'; // Logo para fondo claro
            document.querySelectorAll('#mainNavbar .nav-link').forEach(a => {
                a.classList.remove('text-white');
                a.classList.add('text-light');
            });
        } else {
            navbar.classList.remove('navbar-black-blur', 'navbar-shadow');
            navbar.classList.add('bg-transparent');
            logoText.classList.add('text-white');
            logoText.classList.remove('text-primary');
            // logoImg.src = 'img/logo_s.webp'; // Logo para fondo oscuro
            document.querySelectorAll('#mainNavbar .nav-link').forEach(a => {
                a.classList.add('text-white');
                a.classList.remove('text-light');
            });
        }
    });

    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-y-full');
        mobileMenu.classList.add('translate-y-0');
    });
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0');
    }
    // Cierra el menú móvil al hacer click en un link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });


    // Loading
    const video = document.getElementById('loadingVideo');
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Esperar a que el video termine para ocultar el preloader
    video.addEventListener('ended', () => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    });

    // Fallback: por si el video no se reproduce bien, muestra el contenido tras 7s
    setTimeout(() => {
      if (preloader.style.display !== 'none') {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
      }
    }, 7000); // ajusta este valor si tu video dura más o menos

    
    // Cerrar el menú móvil personalizado al hacer clic fuera de él
    document.addEventListener('mousedown', function(event) {
        // Si no existen los elementos, no hacer nada
        if (!mobileMenu || !menuBtn || !closeMenuBtn) return;

        // Si el menú NO está abierto, no hacer nada
        if (!mobileMenu.classList.contains('translate-y-0')) return;

        // Si el clic fue dentro del menú, en el botón de abrir o cerrar, no hacer nada
        if (
            mobileMenu.contains(event.target) ||
            menuBtn.contains(event.target) ||
            closeMenuBtn.contains(event.target)
        ) {
            return;
        }

        // Si llegamos aquí, el clic fue fuera del menú y este está abierto: cerrarlo
        closeMobileMenu();
    });

})(jQuery);

