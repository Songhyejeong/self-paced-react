import { useState } from 'react';
import styles from '../../css/Modal.module.css';
import { CATEGORYOPTION } from '../constants/CategoryOption';
import Modal from '../common/modal/Modal';

const AddRestaurantModal = ({ onSubmit, setIsAddModalOpen }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const validateFilledout = () => {
    if (!category) {
      alert('카테고리를 선택해주세요');
      return false;
    }
    if (!name) {
      alert('이름을 입력해주세요');
      return false;
    }
    if (!description) {
      alert('설명을 입력해주세요');
      return false;
    }
    return true;
  };

  const submitFormHandler = () => {
    const newRestaurant = {
      id: Date.now(),
      category: category,
      name: name,
      description: description,
    };

    onSubmit((prev) => [...prev, newRestaurant]);
  };

  const checkFormHandler = (e) => {
    e.preventDefault();
    const isFilledoutAll = validateFilledout();

    if (isFilledoutAll) {
      submitFormHandler();
    }
  };

  return (
    <Modal title="새로운 음식점" onClose={() => setIsAddModalOpen(false)}>
      <form onSubmit={(e) => checkFormHandler(e)}>
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
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
