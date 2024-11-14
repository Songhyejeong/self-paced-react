import styles from '../../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({
  restaurants,
  setIsModalOpen,
  setSelectedRestaurant,
}) => {
  return (
    <section className={`${styles.restaurantListContainer}`}>
      <ul className={`${styles.restaurantList}`}>
        {restaurants.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              alt={item.category}
              name={item.name}
              description={item.description}
              setIsModalOpen={setIsModalOpen}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default RestaurantList;
