import { meals } from '../firebaseConfig';

/**
 * Get data from firestore
 */
class MealsApi {
  static getMeals() {
    return meals.get().then((docs) => {
      const all = {};
      docs.forEach((meal) => {
        const mealTemp = meal.data();
        mealTemp.id = meal.id;
        all[mealTemp.id] = { ...mealTemp };
      });

      return all;
    });
  }
}


export default MealsApi;
