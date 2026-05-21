$(document).ready(function () {

    // ============================================================
    // CAROLINA SKIFF — HOME PAGE JS
    // ============================================================

    // --- Side menu toggle ---
    function openMenu() {
        $('.csSideMenu, .csMenuOverlay').addClass('csMenuActive');
        $('body').css('overflow', 'hidden');
    }

    function closeMenu() {
        $('.csSideMenu, .csMenuOverlay').removeClass('csMenuActive');
        $('body').css('overflow', '');
    }

    $('.csHamburger').on('click', openMenu);
    $('.csSideMenuClose, .csMenuOverlay').on('click', closeMenu);
    $('.csSideMenuList a').on('click', closeMenu);

    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    // --- Featured Model carousel (Owl Carousel) ---
    if ($('.csFeaturedCarousel').length) {
        $('.csFeaturedCarousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            smartSpeed: 700
        });
    }

});
