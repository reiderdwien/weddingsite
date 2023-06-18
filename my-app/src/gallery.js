import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import './gallery.css';

const customStyles = {
  content: {
    width: '60%',
    height: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Gallery = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Just an example, replace with your own images
  const images = [
     {src: 'gallery.jpg', caption: t ('GalleryCaptions.caption1')},
     {src: 'fish.jpg', caption: t ('GalleryCaptions.caption2')},
     {src: 'fish.jpg', caption: t ('GalleryCaptions.caption3')},
     {src: 'fish.jpg', caption: t ('GalleryCaptions.caption4')},
     {src: 'fish.jpg', caption: t ('GalleryCaptions.caption5')},
     {src: 'fish.jpg', caption: t ('GalleryCaptions.caption6')}
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>{t('Gallery')}</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt=""
            className="gallery-item"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
          {selectedImage && (
            <>
              <img src={selectedImage.src} alt="" className="modal-image" />
              <p>{selectedImage.caption}</p>
            </>
          )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Gallery;