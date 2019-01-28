const API = 'https://api.punkapi.com/v2';

class BeerApi {
  static getBeers(id) {
    return fetch(`${API}/beers/${id !== undefined ? id : ''}`).then(response => response.json());
  }
}

export default BeerApi;
