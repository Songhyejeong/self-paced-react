import { useState } from 'react';
import styles from '../../css/Modal.module.css';
import { CATEGORYOPTION } from '../constants/CategoryOption';

const AddRestaurantModal = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitFormHandler = () => {
    const newRestaurant = {
      id: Date.now(),
      category: category,
      name: name,
      description: description,
    };

    onSubmit((prevRestaurants) => [...prevRestaurants, newRestaurant]);
  };

  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-tilte`}>새로운 음식점</h2>
        <form>
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="category" className={` text-caption`}>
              카테고리
            </label>
            <select
              name="category"
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">선택해 주세요</option>
              {CATEGORYOPTION.map((option, idx) => {
                return (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="name" className={`text-caption`}>
              이름
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description" className={`text-caption`}>
              설명
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <span className={`${styles.helpText} text-caption`}>
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.buttonPrimary} text-caption`}
              onClick={() => submitFormHandler()}
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
