class DetailsPage {
  constructor(title) {
    this.title = title;
    this.$ = {
      rightSide: () => document.querySelector('#right-side'),
    }
  }

  render()  {
    return `
<h2>${this.title} page</h2>
<div class="page-wrapper">
<div id="right-side">
</div>
</div>
`
  }
}

export default DetailsPage;
