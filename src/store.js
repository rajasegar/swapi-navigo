const Store = {
  cache: {},  
  async fetchData(url) {
    let result = "";
    if(this.cache[url] !== undefined) return this.cache[url].value;
    
      await fetch(url)
    .then(res => res.json())
      .then(json => {
        this.cache[url] = { value: json }
      
      })
      return this.cache[url].value;
  },

  async fetchPeople(page) {
    return this.fetchData(`https://swapi.dev/api/people?page=${page}`)
  },

  async fetchPlanets(page) {
    return this.fetchData(`https://swapi.dev/api/planets?page=${page}`)
  },

  async fetchPlanetById(id) {
    return this.fetchData(`https://swapi.dev/api/planets/${id}`)
  },

  async fetchPeopleById(id) {
    return this.fetchData(`https://swapi.dev/api/people/${id}`)
  }
}

export default Store;
