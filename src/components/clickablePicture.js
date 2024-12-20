import React, { useState } from 'react';

function ClickablePicture() {
  const img1 = '../assets/images/pic1.png';
  const img2 = '../assets/images/pic2.png';
  const [currentImg, setCurrentImg] = useState(img1);

  return (
    <img
      src={currentImg}
      alt="Toggle"
      onClick={() => setCurrentImg(currentImg === img1 ? img2 : img1)}
    />
  );
}

export default ClickablePicture;