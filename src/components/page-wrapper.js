class PageWrapper {
  constructor(title) {
    this.title = title;
    this.$ = {
      leftSide: () => document.querySelector('#left-side'),
      rightSide: () => document.querySelector('#right-side'),
    }
  }

  render()  {
    return `
<h2>${this.title} page</h2>
<div class="page-wrapper">
<div id="left-side">
</div>
<div id="right-side">
</div>
</div>
`
  }
}

export default PageWrapper;
