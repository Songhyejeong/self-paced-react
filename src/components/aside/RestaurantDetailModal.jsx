import styles from '../../css/Modal.module.css';
import Modal from '../common/modal/Modal';

const RestaurantDetailModal = ({
  setIsModalOpen,
  restaurantName,
  restaurantDescription,
}) => {
  return (
    <Modal title={restaurantName} onClose={() => setIsModalOpen(false)}>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantDescription} text-body}`}>
          {restaurantDescription}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={` ${styles.button} ${styles.buttonPrimary} text-caption`}
          onClick={() => setIsModalOpen(false)}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
};

export default RestaurantDetailModal;
