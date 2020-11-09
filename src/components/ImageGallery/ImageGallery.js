import React, { useState } from "react";
import { getImageExtendedInfo } from "../../fetchRequest";
import Modal from "../Modal/Modal";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [imageExtendeSrc, setImageExtendedSrc] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const loadImageInfo = async (id) => {
    setLoading(true);
    const response = await getImageExtendedInfo(id);
    console.log(response.data);
    setImageExtendedSrc(response.data);
    setShowModal(true);
    setLoading(false);
  };

  return (
    <>
      <div className={styles.imagesGallery}>
        {images.map(({ image_id, src }) => (
          <div
            className={styles.imageContainer}
            key={image_id}
            onClick={() => loadImageInfo(image_id)}
          >
            <img src={src} alt={image_id} />
          </div>
        ))}
      </div>

      {showModal && <Modal />}
    </>
  );
};

export default ImageGallery;
