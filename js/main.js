window.onload = function() {
     const header = document.getElementsByClassName("header")[0];
     window.onscroll = function() {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
     }
}