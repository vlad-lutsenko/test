import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./ImageExtended.module.css";

const ImageExtended = ({ imageSrc, imageComments, closeModal }) => {
  const [imgId, setImgId] = useState("");

  return (
    <div className={styles.modal}>
      <div>
        <img src={imageSrc} alt="awesome" className={styles.bigImg} />
      </div>
      <div className={styles.comments}>
        <ul className={styles.commentsList}>
          {imageComments.map((comment) => {
            const { description, id, name, image_id } = comment;
            if (imgId !== image_id) {
              setImgId(image_id);
            }
            return (
              <li key={id} className={styles.commentsListItem}>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <InputForm imgId={imgId} imageComments={imageComments} />
      <button className={styles.closeButton} onClick={closeModal}>
        &#10006;
      </button>
    </div>
  );
};

export default ImageExtended;
//&#10006;
