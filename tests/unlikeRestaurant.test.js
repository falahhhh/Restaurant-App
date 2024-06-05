/* eslint-disable no-undef */
import FavoriterestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Batal sukai restoran', () => {
  const setupLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer" class="button-container"></div>';
  };

  beforeEach(async () => {
    setupLikeButtonContainer();
    await FavoriterestaurantIdb.putrestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriterestaurantIdb.deleterestaurant(1);
  });

  it('harus menampilkan tombol batal sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });

    const unlikeButton = document.querySelector('[aria-label="unlike this movie"]');
    expect(unlikeButton).toBeTruthy();
  });

  it('harus tidak menampilkan tombol sukai ketika restoran telah disukai sebelumnya', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });

    const likeButton = document.querySelector('[aria-label="like this restaurant"]');
    expect(likeButton).toBeFalsy();
  });

  it('harus bisa untuk membatalkan menyukai restoran', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });

    const unlikeButton = document.querySelector('[aria-label="unlike this movie"]');
    unlikeButton.dispatchEvent(new Event('click'));

    const allRestaurants = await FavoriterestaurantIdb.getAllrestaurant();
    expect(allRestaurants).toEqual([]);
  });

  it('harus tidak menampilkan error ketika user klik tombol batal sukai jika restoran tidak ada di dalam list', async () => {
    await TestFactories.createMenyukaiButton({ id: 1 });

    await FavoriterestaurantIdb.deleterestaurant(1);

    const unlikeButton = document.querySelector('[aria-label="unlike this movie"]');
    unlikeButton.dispatchEvent(new Event('click'));

    const allRestaurants = await FavoriterestaurantIdb.getAllrestaurant();
    expect(allRestaurants).toEqual([]);
  });
});
