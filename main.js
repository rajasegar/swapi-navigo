import './style.css'
import Navigo from 'navigo'
import AppComponent from './src/components/app';
import PeopleComponent from './src/components/people';
import PlanetComponent from './src/components/planet';
import PeopleInfo from './src/components/people-info';
import PlanetInfo from './src/components/planet-info';

const $root = document.querySelector('#app');
const router = new Navigo('/');


router.hooks({
  before(done,match) {
    console.log(match);
    renderNav(`/${match.url}`);
    done();
  },
});

router.on('/', index)
router.on('/people', people)
router.on('/planets', planets)
router.on('/planets/:id', planetsInfoRoute)
router.on('/people/:id', peopleInfoRoute)
router.on('/films', films);
router.on('/vehicles', vehicles);

router.resolve();

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

function films() {
  document.querySelector('#app').innerHTML = `<h1>Films</h1>`;
}

function vehicles() {
  document.querySelector('#app').innerHTML = `<h1>Vehicles</h1>`;
}

function renderNav(url) {

  console.log(url);
  const $navbar = document.querySelector('#navbar');
  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "People",
      url: "/people",
    },
    {
      name: "Planets",
      url: "/planets",
    },
    {
      name: "Films",
      url: "/films",
    },
    {
      name: "Vehicles",
      url: "/vehicles",
    },
  ];

  const activeClass = "bg-gray-900 text-white";
  const defaultClass = "text-gray-300 hover:bg-gray-700 hover:text-white";
  
  $navbar.innerHTML = `
  ${routes.map((r,i) => {
    const classList = url == r.url  ? activeClass : defaultClass;
    return `<a href="${r.url}" class="rounded-md px-3 py-2 text-sm font-medium ${classList}" data-navigo>${r.name}</a>`}).join('')}
`

  router.updatePageLinks();

}



