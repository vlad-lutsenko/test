import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

import { getAllImages } from "./fetchRequest";

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
    <>
      {isLoading && <Loader />}
      {!!images.length && !isLoading && <ImageGallery images={images} />}
    </>
  );
};

export default App;
