import styles from '../../css/Modal.module.css';

const RestaurantDetailModal = ({ onCloseButtonClick }) => {
  return (
    <div className={`${styles.modalOpen} ${styles.modal}`}>
      <div className={styles.modalBackdrop} onClick={onCloseButtonClick}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>음식점 이름</h2>
        <div className={styles.restaurantInfo}>
          <p className={`${styles.restaurantDescription} text-body}`}>
            음식점 소개 문구
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
      </div>
    </div>
  );
};

export default RestaurantDetailModal;
