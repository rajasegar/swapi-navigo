export default class AppComponent {
  constructor($root) {
    this.$root = $root;
  }

  render() {
    this.$root.innerHTML = `<h1>Swapi</h1>`
  }
}
