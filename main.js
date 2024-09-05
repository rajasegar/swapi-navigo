import './style.css'
import Navigo from 'navigo'
import AppComponent from './src/components/app';
import PeopleComponent from './src/components/people';
import PlanetComponent from './src/components/planet';
import PeopleInfo from './src/components/people-info';
import PlanetInfo from './src/components/planet-info';

const $root = document.querySelector('#app');
const router = new Navigo('/');


router.on('/', index)
router.on('/people', people)
router.on('/planets', planets)
router.on('/planets/:id', planetsInfoRoute)
router.on('/people/:id', peopleInfoRoute)
router.resolve();

function updateNavbar() {
  
}



function index () {
  const App = new AppComponent(document.querySelector('#app'));
  App.render();

}

function people ({data, params, queryString}) {
  const People = new PeopleComponent($root, router, params);
  People.init();

}

function peopleInfoRoute(data) {
  document.querySelector('#app').innerHTML = PeopleInfo(data, router);
}

function planetsInfoRoute(data) {
  document.querySelector('#app').innerHTML = PlanetInfo(data, router);
}


function planets ({params}) {
  const Planet = new PlanetComponent($root, router, params);
  Planet.init();

}
