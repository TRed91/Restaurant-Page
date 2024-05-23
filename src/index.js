import './style.css';
import img from './pexels-pixabay-260922.jpg'
import pageHome from './page-home';
import pageMenu from './page-menu';

const imgMain = document.createElement('img');
const body = document.querySelector('body');

imgMain.src = img;

body.appendChild(imgMain);
const btnHome = document.querySelector('#btn-home');
const btnMenu = document.querySelector('#btn-menu');
const btnAbout = document.querySelector('#btn-about');

btnHome.addEventListener('click', pageHome);
btnMenu.addEventListener('click', pageMenu); 
