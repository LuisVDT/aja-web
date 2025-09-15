import { useState, useEffect, useRef } from 'react';
import MainTabs from './services/MainTabs';
import SubTabs from './services/SubTabs';
import ServiceModal from './services/ServiceModal';
import '../addons/modal.css';

const ServicesSection = () => {
  const [currentSubtabs, setCurrentSubtabs] = useState(null); 
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: '' });
  const modalRef = useRef(null);

  const openSubtabs = (category) => {
    setCurrentSubtabs(category);
  };

  const closeSubtabs = () => {
    setCurrentSubtabs(null);
  };

  const openModal = (title, content) => {
    setModalData({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  // Cerrar con tecla Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (modalData.isOpen) {
          closeModal();
        } else if (currentSubtabs) {
          closeSubtabs();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalData.isOpen, currentSubtabs]);

  // Cerrar al hacer clic fuera
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeSubtabs();
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Servicios</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos asesoría integral en todas las áreas del derecho laboral
        </p>
        <p className="text-lg text-gray-600">
          Explora nuestros servicios y descubre cómo podemos ayudarte
        </p>
      </div>

      {/* Main Tabs */}
      <MainTabs toggleSubtabs={openSubtabs} />

      {/* Modal de SubTabs */}
      {currentSubtabs && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal-overlay  z-40"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl p-6 max-w-4xl w-full shadow-lg relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={closeSubtabs}
            >
              ✕
            </button>
            <SubTabs currentSubtabs={currentSubtabs} openModal={openModal} />
          </div>
        </div>
      )}

      {/* Modal de Texto */}
      <ServiceModal {...modalData} closeModal={closeModal} />
    </div>
  );
};

export default ServicesSection;
