import styles from '../../../css/Restaurant.module.css';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onCardClick }) => {
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
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default RestaurantList;
