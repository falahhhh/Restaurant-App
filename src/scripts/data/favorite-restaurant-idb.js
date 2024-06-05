import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  }
});

const FavoriterestaurantIdb = {
  async getrestaurant (id) {
    if (!id) {
      return null;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllrestaurant () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putrestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return null;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleterestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  }
};

export default FavoriterestaurantIdb;
