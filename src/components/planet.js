import Store from "../store";
import ListComponent from "./list";
import Pagination from "./pagination";

export default class PlanetComponent {
  constructor($root, router, params) {
    this.$root = $root;
    this.router = router;
    this.pageNo = params?.page || 1;

    this.$ = {
            leftSide: () => $root.querySelector('#left-side'),
      loader: () => $root.querySelector('#loader'),
      pagination: () => $root.querySelector('#pagination'),
      showLoader() {
        this.loader().hidden = false;
      },
      hideLoader() {
        this.loader().hidden = true;
      }
    }

    this.init();
  }

  init() {
    this.render();
    this.$.showLoader();
        Store.fetchPlanets(this.pageNo)
      .then(data => {
        const perPage = 10;
        const totalPages = Math.ceil(data.count / perPage);
        const pages = new Array(totalPages).fill("/planets/?page=");

        this.$.hideLoader();
        this.$.leftSide().innerHTML = ListComponent(data.results, 'planets')
        this.$.pagination().innerHTML =  Pagination(data.count, perPage,pages, this.pageNo);

        this.router.updatePageLinks();
      })
  }

  render() {
    this.$root.innerHTML = `
<h2>Planet page</h2>
<p id="loader">Loading...</p>
<div id="left-side">
</div>
<div id="pagination"></div>
`
  }
}


