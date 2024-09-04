import PageWrapper from "./page-wrapper";

const PlanetInfo = (context) => {
  console.log(context);

  const page = new PageWrapper('Planet');

  let items = [];

  
  fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      items = data.results;
      page.$.leftSide().innerHTML = `<ul>
${items.map((p,idx) => `<li><a href='/planets/${idx+1}' data-navigo>${p.name}</a></li>`).join('')}
</ul>`
      const person = items[context.data.id - 1];
      page.$.rightSide().innerHTML = `<h1>${person.name}</h1>
<p>Climate: ${person.climate}</p>
<p>Diameter: ${person.diameter}</p>
<p>Hair color: ${person.hair_color}</p>
<p>Height: ${person.height}</p>
<p>Mass: ${person.mass}</p>
<p>Skin color: ${person.skin_color}</p>

<p>Films:</p>
<ul>
${person.films.map(f => `<li><a href="${f.replace('https://swapi.dev/api','')}">${f}</a></li>`).join('')}
</ul>
`
    })

  
  return page.render()

}

export default PlanetInfo;
