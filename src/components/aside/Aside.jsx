import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';

function Aside({
  isModalOpen,
  isAddModalOpen,
  selectedRestaurant,
  setIsModalOpen,
  setIsAddModalOpen,
  getRestaurant,
}) {
  return (
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
          setIsAddModalOpen={setIsAddModalOpen}
          getRestaurant={getRestaurant}
        />
      )}
    </aside>
  );
}

export default Aside;
