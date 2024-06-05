/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurant.putrestaurant({ id: 1 });
    favoriteRestaurant.putrestaurant({ id: 2 });

    expect(await favoriteRestaurant.getrestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getrestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getrestaurant(3)).toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putrestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllrestaurant()).toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurant.putrestaurant({ id: 1 });
    favoriteRestaurant.putrestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllrestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.putrestaurant({ id: 1 });
    favoriteRestaurant.putrestaurant({ id: 2 });
    favoriteRestaurant.putrestaurant({ id: 3 });

    await favoriteRestaurant.deleterestaurant(1);

    expect(await favoriteRestaurant.getAllrestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.putrestaurant({ id: 1 });
    favoriteRestaurant.putrestaurant({ id: 2 });
    favoriteRestaurant.putrestaurant({ id: 3 });

    await favoriteRestaurant.deleterestaurant(4);

    expect(await favoriteRestaurant.getAllrestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
