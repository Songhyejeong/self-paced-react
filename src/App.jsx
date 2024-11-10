import './App.css';
import Header from './components/common/header/Header';
import CategoryFilter from './components/main/categoryFilter/CategoryFilter';
import RestaurantList from './components/main/restaurant/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import { useState } from 'react';
import { restaurants } from './components/constants/Restaurants';

function App() {
  const [category, setCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });

  let filteredRestaurants = [];

  if (category === '전체') {
    filteredRestaurants = restaurants;
  }

  if (category !== '전체') {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            onCloseButtonClick={() => setIsModalOpen(false)}
            restaurantName={selectedRestaurant.name}
            restaurantDescription={selectedRestaurant.description}
          />
        )}
      </aside>
    </>
  );
}

export default App;
