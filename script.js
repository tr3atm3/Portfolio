//scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


const obsCallback = function(entries,observer){
    const [entry] = entries;
    
    const className = entry.target.getAttribute('class');
    
    const [navElement] = [...navLinks].filter(nav => nav.getAttribute('href') === `#${className}`)
    if(entry.isIntersecting){
        navLinks.forEach(nav => nav.classList.remove('active'))
        navElement.classList.add('active')
        navbar.classList.remove('active')
        menuIcon.classList.remove('bx-x')
    }
};
const obsOptions = {
    root:null,
    threshold:0.3,
}
const sectionObserver = new IntersectionObserver(obsCallback,obsOptions);
sections.forEach(section => sectionObserver.observe(section))

//icon bar toggle;


menuIcon.addEventListener('click',function(){
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})