import Store from "../store";

import DetailsPage from "../pages/details";
const PeopleInfo = (context, router) => {

  const page = new DetailsPage('People');

  Store.fetchPeopleById(context.data.id)
    .then(data => {
      const person = data;

      page.$.rightSide().innerHTML = `
      <h1 class="text-2xl text-indigo-500 font-bold">${person.name}</h1>
      <p><span class="font-bold text-gray-500">Birth year:</span> ${person.birth_year}</p>
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
