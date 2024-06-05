/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestoContract';
import FavoriterestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriterestaurantIdb.getAllrestaurant()).forEach(async (restaurant) => {
      await FavoriterestaurantIdb.deleterestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriterestaurantIdb);
});
