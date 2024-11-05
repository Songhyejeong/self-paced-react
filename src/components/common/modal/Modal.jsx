import styles from '../../../css/Modal.module.css';

const Modal = ({ children, title, onCloseButtonClick }) => {
  return (
    <div className={`${styles.modalOpen} ${styles.modal}`}>
      <div className={styles.modalBackdrop} onClick={onCloseButtonClick}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
