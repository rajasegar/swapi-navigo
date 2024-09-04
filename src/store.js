const Store = {
  people: [],
  planets: [],
  films: [],
  async fetchPeople() {
      return fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => {

      this.people = data.results;

      return data;
      

    })
  }
}

export default Store;
