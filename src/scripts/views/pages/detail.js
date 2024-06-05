import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render () {
    return `
        <h2 class="h2">Detail Page</h2>
        <div id="restaurant" class="restaurant"></div>
        <div id="reviews" class="reviews"></div>
        <div id="message-container"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const restaurantData = {
      id: restaurant.id,
      name: restaurant.name,
      city: restaurant.city,
      pictureId: restaurant.pictureId,
      description: restaurant.description,
      rating: restaurant.rating
    };
    LikeButtonInitiator.init({ likeButtonContainer, restaurant: restaurantData });
  }
};

export default Detail;
