class ListPage {
  constructor(title) {
    this.title = title;
    this.$ = {
      leftSide: () => document.querySelector('#left-side'),
      loader: () => document.querySelector('#loader'),
      pagination: () => document.querySelector('#pagination'),
      showLoader() {
        this.loader().hidden = false;
      },
      hideLoader() {
        this.loader().hidden = true;
      }
    }

  }

  render()  {
    return `
<h2>${this.title} page</h2>
<div class="page-wrapper">
<p id="loader">Loading...</p>
<div id="left-side">

</div>
</div>
<div id="pagination"></div>

`
  }
}

export default ListPage;
