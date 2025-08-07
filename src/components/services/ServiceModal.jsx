import { useEffect } from 'react';

const ServiceModal = ({ isOpen, title, content, closeModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="modal-content bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto show" onClick={(e) => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;