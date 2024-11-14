import './App.css';
import { useState, useEffect } from 'react';
import Main from './components/main/main/Main';
import Aside from './components/aside/Aside';

function App() {
  const [isModalOpen, setIsModalOpen] = useState();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name: '',
    description: '',
  });
  const [restaurantsList, setRestaurantsList] = useState([]);

  const getRestaurant = async () => {
    const response = await fetch('http://localhost:3000/restaurants');
    const jsonData = await response.json();

    if (response.ok) {
      setRestaurantsList([...jsonData]);
    }
  };

  useEffect(() => {
    getRestaurant();
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
        getRestaurant={getRestaurant}
      />
    </div>
  );
}

export default App;
