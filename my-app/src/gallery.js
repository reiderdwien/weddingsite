import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import './gallery.css';

const Gallery = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Just an example, replace with your own images
  const images = ['gallery.jpg', 'fish.jpg', 'fish.jpg', 'fish.jpg', 'fish.jpg', 'fish.jpg'];

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
            src={image}
            alt=""
            className="gallery-item"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <img src={selectedImage} alt="" className="modal-image" />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Gallery;