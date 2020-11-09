import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";

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
      {!!images.length && !isLoading && <ImageGallery images={images} />}
      {isLoading && <div>loading...</div>}
    </>
  );
};

export default App;
