import styles from '../../../css/Header.module.css';
import addButton from '../../../assets/button/add-button.png';

const Header = ({ onAddRestaurantClick }) => {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
      <button
        type="button"
        className={styles.gnb__button}
        aria-label="음식점 추가"
        onClick={onAddRestaurantClick}
      >
        <img
          className={`${styles.gnb__button} img`}
          src={addButton}
          alt="음식점 추가"
        />
      </button>
    </header>
  );
};

export default Header;
