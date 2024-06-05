import CONFIG from '../../globals/config';

const ArrayList = (array) => {
  let listHtml = '';
  array.forEach((data) => {
    listHtml += `<li>${data.name}</li>`;
  });
  return listHtml;
};

const createReviewTemplate = (review) => `
  <div class="review-item">
    <p class="review-item__name">${review.name}</p>
    <p class="review-item__date">${review.date}</p>
    <p class="review-item__review">${review.review}</p>
  </div>
`;

const createRestaurantTemplate = (restaurant) => `
<div class="restaurant-unit">
  <div class="restaurant-unit__header">
    <img class="restaurant-unit__header__poster" src="${`${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}`}" alt="${restaurant.name}">
    <div class="restaurant-unit__header__rating">
        <p>⭐️<span class="restaurant-unit__header__rating__score">${restaurant.rating}</span></p>
      </div>
    <div class="rating-container" >
      
    </div>
  </div>
  <div class="restaurant-unit__content">
    <h3>${restaurant.name}</h3>
    <p>City: ${restaurant.city}</p>
    <p class="description">Description: ${restaurant.description}</p>
    <a href="#/detail/${restaurant.id}" class="detail-button">Lihat Detail</a>
  </div>
</div>

`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-container">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div class="restaurant__content">
      <img class="restaurant__poster" src="${`${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}`}" alt="${restaurant.name}">
      <div class="restaurant__info card">
        <h3>Information</h3>
        <h4>Categories</h4>
        <ul>${ArrayList(restaurant.categories)}</ul>
        <h4>Rating</h4>
        <p> ★ <span class="restaurants-unit__header__rating__score">${restaurant.rating}</span></p>
        <h4>Address</h4>
        <p>${`${restaurant.address} ${restaurant.city}`}</p>
      </div>
    </div>
    <div class="restaurant__info card">
      <h3>Information</h3>
      <p>${restaurant.description}</p>
    </div>
    <h3 class="menu-title" tabindex="0">Menu</h3>
    <div class="menu-container card">
      <div class="list-foods card">
        <h4 tabindex="0">Food</h4>
        <p tabindex="0">${ArrayList(restaurant.menus.foods)}</p>
      </div>
      <div class="list-drinks card">
        <h4 tabindex="0">Drinks</h4>
        <p tabindex="0">${ArrayList(restaurant.menus.drinks)}</p>
      </div>
    </div>
    <h3 class="reviews-title" tabindex="0">Customer Reviews</h3>
    <div id="reviews" class="reviews">
      ${restaurant.customerReviews.map((review) => createReviewTemplate(review)).join('')}
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate
};
