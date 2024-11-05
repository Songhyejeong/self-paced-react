import './App.css';
import Header from './components/common/header/Header';
import CategoryFilter from './components/main/categoryFilter/CategoryFilter';
import RestaurantList from './components/main/restaurant/RestaurantList';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';

import { useState } from 'react';
import { restaurants } from './components/constants/Restaurants';

function App() {
  const [category, setCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);

  let filteredRestaurants = [];

  if (category === '전체') {
    filteredRestaurants = restaurants;
  }

  if (category !== '전체') {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }

  const hanleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onCardClick={hanleCardClick}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal onCloseButtonClick={handleCloseButtonClick} />
        )}
      </aside>
    </>
  );
}

export default App;
