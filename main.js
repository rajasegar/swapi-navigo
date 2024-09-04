import './style.css'
import Navigo from 'navigo'
import AppComponent from './src/components/app';
import PeopleComponent from './src/components/people';
import PlanetComponent from './src/components/planet';
import PeopleInfo from './src/components/people-info';
import PlanetInfo from './src/components/planet-info';

const router = new Navigo('/');


router.on('/', index)
router.on('/people', people)
router.on('/planets', planets)
router.on('/planets/:id', planetsInfoRoute)
router.on('/people/:id', peopleInfoRoute)
router.resolve();


function index () {
  document.querySelector('#app').innerHTML = AppComponent();
}

function people () {
  document.querySelector('#app').innerHTML = PeopleComponent(router);
}

function peopleInfoRoute(data) {
  document.querySelector('#app').innerHTML = PeopleInfo(data, router);
}

function planetsInfoRoute(data) {
    document.querySelector('#app').innerHTML = PlanetInfo(data);
}


function planets () {
  document.querySelector('#app').innerHTML = PlanetComponent();
}
