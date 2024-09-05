import Store from "../store";
import ListComponent from "./list";
import ListPage from "../pages/list";
import Pagination from "./pagination";

export default class PeopleComponent {
  constructor($root, router,params) {
    this.$root = $root;
    this.router = router;
    this.page = new ListPage("People")
    this.pageNo = params?.page || 1;
    
    this.init();
  }

  init() {
    this.render();
    this.page.$.showLoader();
    Store.fetchPeople(this.pageNo)
      .then(data => {
        const perPage = 10;
        const totalPages = Math.ceil(data.count / perPage);
        const pages = new Array(totalPages).fill("/people/?page=");

        this.page.$.hideLoader();
        this.page.$.leftSide().innerHTML = ListComponent(data.results, 'people')
        this.page.$.pagination().innerHTML =  Pagination(data.count, perPage,pages, this.pageNo);

        this.router.updatePageLinks();
      })
  }

  render() {
    this.$root.innerHTML = this.page.render();
  }
}
