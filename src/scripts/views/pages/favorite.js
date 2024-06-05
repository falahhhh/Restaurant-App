import FavoriterestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/templates-creator';

const Favorite = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div id="restaurant" class="restaurantItem"></div>
        <div class="restaurant-item__not__found"></div>
      </div>
    `;
  },

  async afterRender () {
    const restaurants = await FavoriterestaurantIdb.getAllrestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    const emptyMessageContainer = document.querySelector('.restaurant-item__not__found');

    if (restaurants.length === 0) {
      emptyMessageContainer.innerHTML = `
        <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    } else {
      restaurants.forEach(restaurantItem => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurantItem);
      });
    }
  }
};

export default Favorite;
