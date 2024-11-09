import styles from '../../../css/Modal.module.css';

const Modal = ({ children, title, onClose }) => {
  return (
    <div className={`${styles.modalOpen} ${styles.modal}`}>
      <div className={styles.modalBackdrop} onClick={onClose}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
