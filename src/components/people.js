import Store from "../store";
const PeopleComponent = (router) => {

  let people = [];
  const $ = {
    leftSide: () => document.querySelector('#left-side'),
  }

  Store.fetchPeople()
    .then(data => {
      console.log(data)
      people = data.results;
      $.leftSide().innerHTML = `<ul>
${people.map((p,idx) => `<li><a href='/people/${idx+1}' data-navigo>${p.name}</a></li>`).join('')}
</ul>`

      router.updatePageLinks();
    })

  
  return `
<h2>People page</h2>
<div id="left-side">
</div>
<div id="right-side">
</div>
`
}

export default PeopleComponent;
