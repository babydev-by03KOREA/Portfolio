'use strict';

// 참고한 mozila site
// https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
// https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

// 반응형을 위한 JS Code

const toogleBtn = document.querySelector(".navbar__toggle-btn");
const menu = document.querySelector(".navbar__menu");

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// navbar - scroll event handler
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// 할당한 변수는 전부 dataset에 들어감.
// navbar click scrollTo smooth
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    console.log(event.target);
    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// click이라는 이벤트가 실행되면 smooth하게 실행되는 arrow func.
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null){
        return;
    }
    projectContainer.classList.add('anima-out');
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });

    // while문으로 반복하여 사용하는법도 있음.
   
});
