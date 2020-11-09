import React, { useEffect, useState } from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./ImageExtended.module.css";

const ImageExtended = ({ imageSrc, imageComments }) => {
  const [imgId, setImgId] = useState("");

  useEffect(() => {}, [imageComments]);

  return (
    <div className={styles.modal}>
      <div>
        <img src={imageSrc} alt="awesome" />
      </div>
      <div className={styles.comments}>
        <ul className={styles.commentsList}>
          {imageComments.map((comment) => {
            const { description, id, name, image_id } = comment;
            if (imgId !== image_id) {
              setImgId(image_id);
            }
            return (
              <li key={id}>
                <p>{name}</p>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <InputForm imgId={imgId} />
    </div>
  );
};

export default ImageExtended;
