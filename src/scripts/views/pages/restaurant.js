import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/templates-creator';

const Restaurant = {
  async render () {
    return `
    <div class="banner">
      <img src="../images/heros/hero-image_2.jpg" alt="Banner Image">
      <div class="banner-content">
          <h1 class="banner-title">My Restaurant</h1>
          <p class="banner-subtitle">You are on the website to find the best restaurant!</p>
          <button aria-label="Cari Restoran" class="search-button">
              <a href="#title"> <i class="fa fa-search">Explore</i></a>
          </button>
      </div>
    </div>

    <h1 id="title">Explore Restoran</h1>
    <div id="restaurant-container"></div>
    <div id="loading-indicator"></div>
        `;
  },

  async afterRender () {
    const loadingIndicator = document.querySelector('#loading-indicator');
    loadingIndicator.innerHTML = 'Loading...';

    try {
      const restaurants = await RestaurantSource.list();
      const restaurantContainer = document.querySelector('#restaurant-container');
      restaurantContainer.innerHTML = '';

      restaurants.forEach(restaurant => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
      });

      loadingIndicator.style.display = 'none';
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      loadingIndicator.innerHTML = 'Gagal memuat data. Silakan coba lagi.';
    }
  }
};

export default Restaurant;
