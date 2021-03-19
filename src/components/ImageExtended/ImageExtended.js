import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import styles from './ImageExtended.module.css';

const ImageExtended = ({ imageSrc, imageComments, closeModal }) => {
  console.log(imageComments);
  const [imgId, setImgId] = useState('');

  return (
    <div className={styles.modal}>
      <div>
        <img src={imageSrc} alt='awesome' className={styles.bigImg} />
      </div>
      <div className={styles.comments}>
        <ul className={styles.commentsList}>
          {!!imageComments.length &&
            imageComments.map((comment) => {
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
          {!imageComments.length && (
            <li className={styles.commentsListItem}>
              <p className={styles.description}>Ваш комментарий будет первым</p>
            </li>
          )}
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
