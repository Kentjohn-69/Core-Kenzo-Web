
/*Navbar*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", function(){
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    navbar.classList.remove('active');
}

//DARK MODE
let darkmode = document.querySelector('#darkmode');

darkmode.addEventListener("click", function(){
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
});

//SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box',{interval: 200})

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});