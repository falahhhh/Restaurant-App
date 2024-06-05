import FavoriterestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';

const createMenyukaiButton = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.button-container'),
    favoriteRestaurants: FavoriterestaurantIdb,
    restaurant
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createMenyukaiButton };
