import './App.css';
import Header from './components/common/header/Header';
import CategoryFilter from './components/main/categoryFilter/CategoryFilter';
import RestaurantList from './components/main/restaurant/RestaurantList';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import { useState } from 'react';
import { restaurants } from './components/constants/Restaurants';

import { useState } from 'react';
import { restaurants } from './components/constants/Restaurants';

function App() {

  const [category, setCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectName, setSelectName] = useState('');
  const [selectDescription, setSelectDescription] = useState('');
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  let filteredRestaurants = [];

  if (category === '전체') {
    filteredRestaurants = restaurantsList;
  }

  if (category !== '전체') {
    filteredRestaurants = restaurantsList.filter(

      (restaurant) => restaurant.category === category
    );
  }

  const hanleCardClick = ({ name, description }) => {
    setSelectName(name);
    setSelectDescription(description);
    setIsModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }

    if (isAddModalOpen) {
      setIsAddModalOpen(false);
    }
  };

  const handleAddRestaurantClick = () => {
    setIsAddModalOpen(true);
  };

  const handleAddRestaurantSubmit = (newRestaurants) => {
    setRestaurantsList(newRestaurants);
    setIsAddModalOpen(false);
  };

  return (
    <>
      <Header onAddRestaurantClick={handleAddRestaurantClick} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onCardClick={hanleCardClick}
        />

      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            onCloseButtonClick={handleCloseButtonClick}
            restaurantName={selectName}
            restaurantDescription={selectDescription}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onSubmit={handleAddRestaurantSubmit}
            onCloseButtonClick={handleCloseButtonClick}
          />
        )}
      </aside>
    </>
  );
}

export default App;
