import React, { useState } from "react";
import {
  getImageExtendedComments,
  getImageExtendedSrc,
} from "../../fetchRequest";
import ImageExtended from "../ImageExtended/ImageExtended";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [imageExtendedSrc, setImageExtendedSrc] = useState("");
  const [imageExtendedComments, setImageExtendedComments] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const loadImageInfo = async (id) => {
    setLoading(true);
    const source = await getImageExtendedSrc(id);
    setImageExtendedSrc(source.data.src);
    const comments = await getImageExtendedComments(id);
    setImageExtendedComments(comments.data);
    openModal();
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>test app</h1>
        <div className={styles.imagesGallery}>
          {images.map(({ image_id, src }) => (
            <div
              className={styles.imageContainer}
              key={image_id}
              onClick={() => loadImageInfo(image_id)}
            >
              <img src={src} alt={image_id} className={styles.image} />
            </div>
          ))}
        </div>

        {showModal && (
          <Modal closeModal={closeModal}>
            <ImageExtended
              imageSrc={imageExtendedSrc}
              imageComments={imageExtendedComments}
              closeModal={closeModal}
            />
          </Modal>
        )}
        <footer className={styles.footer}>
          <p className={styles.footerText}>© 2018-2019</p>
        </footer>
      </div>
    </>
  );
};

export default ImageGallery;
