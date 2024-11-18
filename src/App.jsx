import './App.css';
import { useState, useEffect } from 'react';
import Main from './components/main/main/Main';
import Aside from './components/aside/Aside';
import { getRestaurant } from './api/restaurant';

function App() {
  const [isModalOpen, setIsModalOpen] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getRestaurant(setRestaurantsList);
  }, []);

  return (
    <div>
      <Main
        restaurantsList={restaurantsList}
        setIsModalOpen={setIsModalOpen}
        setSelectedRestaurant={setSelectedRestaurant}
        setIsAddModalOpen={setIsAddModalOpen}
      />
      <Aside
        isModalOpen={isModalOpen}
        isAddModalOpen={isAddModalOpen}
        selectedRestaurant={selectedRestaurant}
        setIsModalOpen={setIsModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        setRestaurantsList={setRestaurantsList}
      />
    </div>
  );
}

export default App;
