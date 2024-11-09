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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  let filteredRestaurants = [];

  if (category === '전체') {
    filteredRestaurants = restaurantsList;
  } else {
    filteredRestaurants = restaurantsList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  return (
    <>
      <Header onAddRestaurantClick={setIsAddModalOpen} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          setIsModalOpen={setIsModalOpen}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            setIsModalOpen={setIsModalOpen}
            restaurantName={selectedRestaurant.name}
            restaurantDescription={selectedRestaurant.description}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onSubmit={setRestaurantsList}
            setIsAddModalOpen={setIsAddModalOpen}
          />
        )}
      </aside>
    </>
  );
}

export default App;
