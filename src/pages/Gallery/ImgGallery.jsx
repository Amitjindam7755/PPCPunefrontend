import React, { useState } from 'react';
import GalleryImages from '../../components/GalleryImage/GalleryImages';


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
        <GalleryImages/>
  );
};

export default Gallery;


