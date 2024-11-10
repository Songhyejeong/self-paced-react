import styles from '../../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({
  restaurants,
  setSelectedRestaurant,
  setIsModalOpen,
}) => {
  return (
    <section className={`${styles.restaurantListContainer}`}>
      <ul className={`${styles.restaurantList}`}>
        {restaurants.length > 0 &&
          restaurants.map((item) => {
            return (
              <RestaurantCard
                key={item.id}
                alt={item.category}
                name={item.name}
                description={item.description}
                setSelectedRestaurant={setSelectedRestaurant}
                setIsModalOpen={setIsModalOpen}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default RestaurantList;
