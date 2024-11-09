import styles from '../../../css/Restaurant.module.css';
import KoreanIcon from '../../../assets/category/category-korean.png';
import AsianIcon from '../../../assets/category/category-asian.png';
import ChineseIcon from '../../../assets/category/category-chinese.png';
import EtcIcon from '../../../assets/category/category-etc.png';
import JapaneseIcon from '../../../assets/category/category-japanese.png';
import WesternIcon from '../../../assets/category/category-western.png';

const getCategoryIcon = (alt) => {
  switch (alt) {
    case '한식':
      return KoreanIcon;
    case '중식':
      return ChineseIcon;
    case '아시안':
      return AsianIcon;
    case '일식':
      return JapaneseIcon;
    case '양식':
      return WesternIcon;
    case '기타':
      return EtcIcon;
  }
};

const RestaurantCard = ({
  alt,
  name,
  description,
  setIsModalOpen,
  setSelectedRestaurant,
}) => {
  const image = getCategoryIcon(alt);

  const handleCardClick = () => {
    setIsModalOpen(true);
    setSelectedRestaurant({ name, description });
  };

  return (
    <li className={styles.restaurant} onClick={handleCardClick}>
      <div className={styles.restaurant__category}>
        <img src={image} alt={alt} className={styles.categoryIcon} />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>{name}</h3>
        <p className={`${styles.restaurant__description}  text-body`}>
          {description}
        </p>
      </div>
    </li>
  );
};

export default RestaurantCard;
