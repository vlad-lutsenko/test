import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ closeModal, children }) => {
  const escCloseModal = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", escCloseModal);
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  });

  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <>{children}</>
      </div>
    </div>
  );
};

export default Modal;
