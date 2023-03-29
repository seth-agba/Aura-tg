// Changement de la couleur de navigation
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
}) 


// afficher le masquage des questions fréquentes

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

//changerla couleur de l'icon NB: il me faudra charger les icones en lignes

const icon = faq.querySelector('faq__icon img');
if(icon.className === 'plus') {
    icon.className ="moins"
}else {
    icon.className === "plus";
}

    })
})


/* ===========NAV MENU SHOW RIGHT ======*/
//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const openNavBtn = document.querySelector("#open-menu-btn");
const closeNavBtn = document.querySelector("#close-menu-btn");

/*menubtn.addEventListener('click',() =>{
    menu.style.display='flex';
})*/
const openNav= () =>{
    menu.style.display ='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}
openNavBtn.addEventListener('click', openNav)


const closeNav= () =>{
    menu.style.display ='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}
closeNavBtn.addEventListener('click', closeNav)