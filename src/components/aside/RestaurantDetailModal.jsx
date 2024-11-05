import styles from '../../css/Modal.module.css';
import Modal from '../common/Modal';

const RestaurantDetailModal = ({
  onCloseButtonClick,
  restaurantName,
  restaurantDescription,
}) => {
  return (
    <Modal title={restaurantName} onCloseButtonClick={onCloseButtonClick}>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantDescription} text-body}`}>
          {restaurantDescription}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={` ${styles.button} ${styles.buttonPrimary} text-caption`}
          onClick={onCloseButtonClick}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
};

export default RestaurantDetailModal;
