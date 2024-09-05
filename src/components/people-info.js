import Store from "../store";
import ListComponent from "./list";
import DetailsPage from "../pages/details";
const PeopleInfo = (context, router) => {
  console.log(context);

  const page = new DetailsPage('People');


  let items = [];

  

  Store.fetchPeople()
    .then(data => {
      

      items = data.results;




      const person = items[context.data.id - 1];

      page.$.rightSide().innerHTML = `
      <h1 class="hello">${person.name}</h1>
<p>Birth year: ${person.birth_year}</p>
<p>Eye color: ${person.eye_color}</p>
<p>Hair color: ${person.hair_color}</p>
<p>Height: ${person.height}</p>
<p>Mass: ${person.mass}</p>
<p>Skin color: ${person.skin_color}</p>
<p>Home world: <a href="${person.homeworld.replace('https://swapi.dev/api','')}">${person.homeworld}</a></p>
<p>Films:</p>
<ul>
${person.films.map(f => `<li><a href="${f.replace('https://swapi.dev/api','')}">${f}</a></li>`).join('')}
</ul>
`

            router.updatePageLinks();     
    });

  return page.render();

      


  

}

export default PeopleInfo;
