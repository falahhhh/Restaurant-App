import FavoriterestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Menyukai restoran', () => {
  const setupLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="button-container"></div>';
  };

  beforeEach(() => {
    setupLikeButtonContainer();
  });

  it('harus menampilkan tombol batal sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('harus tidak menampilkan tombol sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });
    expect(document.querySelector('[aria-label="Hapus dari Favorit"]')).toBeFalsy();
  });

  it('harus bisa untuk menyukai restoran', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriterestaurantIdb.getrestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriterestaurantIdb.deleterestaurant(1);
  });

  it('harus tidak bisa menambahkan restoran lagi ketika sudah ditambahkan sebelumnya', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });
    await FavoriterestaurantIdb.putrestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriterestaurantIdb.getAllrestaurant()).toEqual([{ id: 1 }]);
    await FavoriterestaurantIdb.deleterestaurant(1);
  });

  it('harus tidak bisa menambahkan restoran ketika tidak punya id', async () => {
    await TestFactories.createMenyukaiButton({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriterestaurantIdb.getAllrestaurant()).toEqual([]);
  });
});
