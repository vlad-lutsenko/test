import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

import { getAllImages } from "./fetchRequest";

import styles from "./components/ImageGallery/ImageGallery.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!images.length) {
      async function fetchRequest() {
        const response = await getAllImages();
        setImages(response.data);
        setIsLoading(false);
      }
      fetchRequest();
    }
  });

  return (
    <div className={styles.app}>
      {isLoading && <Loader />}
      {!!images.length && !isLoading && <ImageGallery images={images} />}
    </div>
  );
};

export default App;
