import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';

function Main({
  category,
  setCategory,
  filteredRestaurants,
  setIsModalOpen,
  setSelectedRestaurant,
  setIsAddModalOpen,
}) {
  return (
    <>
      <Header onAddRestaurantClick={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          setIsModalOpen={setIsModalOpen}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      </main>
    </>
  );
}

export default Main;
