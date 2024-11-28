import "./style/style.css"
import { displayMenu } from "./menu";
import { displayHome } from "./home";
import { resetHTLM } from "./utilize";
import { displayContactUs } from "./about";
import logoImg from "./asset/tacos-logo.png"

//for header
let header = document.querySelector('header');
let h1 = document.createElement('h1');
h1.innerText = "Tac"
let logo = document.createElement('img');
logo.src = logoImg
let h1Plus = document.createElement('h1');
h1Plus.innerText = "Best"
header.insertBefore(h1Plus, header.firstChild)
header.insertBefore(logo, header.firstChild)
header.insertBefore(h1, header.firstChild)


displayHome();
let nav = document.querySelector('nav');
let listNav = nav.childNodes;
listNav.forEach((child) => {
    child.addEventListener('click', () => {
        let data = child.childNodes[0];
        //child.style.backgroundColor = 'rgb(206, 120, 8)'
        if(data.textContent === 'Home') {
            resetHTLM();
            displayHome();
        } else if(data.textContent === 'Menu') {
            resetHTLM();
            displayMenu();
        } else if(data.textContent === 'About') {
            resetHTLM();
            displayContactUs();
        }
        
    })
})









