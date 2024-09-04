const PlanetComponent = () => {

  let planets = [];
  const $ = {
    leftSide: () => document.querySelector('#left-side'),
  }
  
  fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      planets = data.results;
      $.leftSide().innerHTML = `<ul>
${planets.map((p,idx) => `<li><a href='/planets/${idx+1}' data-navigo>${p.name}</a></li>`).join('')}
</ul>`
    })

  
  return `
<h2>Planet page</h2>
<div id="left-side">
</div>
<div id="right-side">
</div>
`
}

export default PlanetComponent;
