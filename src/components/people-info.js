import Store from "../store";
const PeopleInfo = (context, router) => {
  console.log(context);



  let people = [];
  const $ = {
    leftSide: () => document.querySelector('#left-side'),
    rightSide: () => document.querySelector('#right-side'),
  }
  

  people = Store.people;

      const person = people[context.data.id - 1];


      router.updatePageLinks();     

      


  
  return `
<h2>People page</h2>
<div class="page-wrapper">
<div id="left-side">
<ul>
${people.map((p,idx) => `<li><a href='/people/${idx+1}' data-navigo>${p.name}</a></li>`).join('')}
</ul>
</div>
    <div id="right-side">
      <h1>${person.name}</h1>
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
</div>
</div>
`
}

export default PeopleInfo;
