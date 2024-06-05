import FavoriterestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/templates-creator';

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton () {
    const { id } = this.restaurant;

    if (await this.isrestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isrestaurantExist (id) {
    const restaurant = await FavoriterestaurantIdb.getrestaurant(id);
    return !!restaurant;
  },

  renderLike () {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriterestaurantIdb.putrestaurant(this.restaurant);
      this.renderButton();
    });
  },

  renderLiked () {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriterestaurantIdb.deleterestaurant(this.restaurant.id);
      this.renderButton();
    });
  }
};

export default LikeButtonInitiator;
