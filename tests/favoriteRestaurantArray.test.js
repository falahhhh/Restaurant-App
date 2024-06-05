/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getrestaurant (id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllrestaurant () {
    return favoriteRestaurants;
  },

  putrestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getrestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleterestaurant (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((Restaurant) => Restaurant.id != id);
  }
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
