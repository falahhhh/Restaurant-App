import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async list () {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async search (keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantSource;
