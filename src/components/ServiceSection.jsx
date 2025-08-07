import { useState } from 'react';
import MainTabs from './services/MainTabs';
import SubTabs from './services/SubTabs';
import ServiceModal from './services/ServiceModal';
import '../addons/modal.css'

const ServicesSection = () => {
  const [currentSubtabs, setCurrentSubtabs] = useState(null);
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: '' });

  const toggleSubtabs = (category) => {
    if (currentSubtabs === category) {
      setCurrentSubtabs(null);
      return;
    }
    setCurrentSubtabs(category);
  };

  const openModal = (title, content) => {
    setModalData({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Servicios</h1>
        <p className="text-lg text-gray-600">Explora nuestros servicios y descubre como podemos ayudarte</p>
      </div>

      <MainTabs toggleSubtabs={toggleSubtabs} />
      <SubTabs currentSubtabs={currentSubtabs} openModal={openModal} />
      <ServiceModal {...modalData} closeModal={closeModal} />
    </div>
  );
};

export default ServicesSection;