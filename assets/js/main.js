// Active and remove menu

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navCollapse = document.querySelector('.navbar-collapse');
    navCollapse.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Parallax

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll > 30) {
        $('.navbar').addClass('scroll');
    }else{
        $('.navbar').removeClass('scroll');
    }
});
