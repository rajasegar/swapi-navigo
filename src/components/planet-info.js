import DetailsPage from "../pages/details"
import Store from "../store";
import ListComponent from "./list";

const PlanetInfo = (context, router) => {
  console.log(context);

  const page = new DetailsPage('Planet');

  let items = [];


  Store.fetchPlanetById(context.data.id)
    .then(data => {
      console.log(data)
  
      const planet = data; 
 
  
      page.$.rightSide().innerHTML = `<h1>${planet.name}</h1>
<p>Climate: ${planet.climate}</p>
<p>Diameter: ${planet.diameter}</p>
<p>Hair color: ${planet.hair_color}</p>
<p>Height: ${planet.height}</p>
<p>Mass: ${planet.mass}</p>
<p>Skin color: ${planet.skin_color}</p>

<p>Films:</p>
<ul>
${planet.films.map(f => `<li><a href="${f.replace('https://swapi.dev/api','')}">${f}</a></li>`).join('')}
</ul>
`

      router.updatePageLinks();
    })

  
  return page.render()

}

export default PlanetInfo;
