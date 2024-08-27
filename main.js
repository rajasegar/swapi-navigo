import './style.css'
import Navigo from 'navigo'

const router = new Navigo('/');


router.on('/', index)
router.on('/people', people)
router.on('/planets', planets)
router.resolve();


function index () {
  document.querySelector('h1').textContent = "Home page"
}

function people () {
  document.querySelector('h1').textContent = "People page"
}

function planets () {
  document.querySelector('h1').textContent = "Planets page"
}
