import React, { useEffect, useState } from 'react';

export interface ServiceDetail {
  title: string;
  items: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  service,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (isRendered) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset';
      }, 260); // Match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isRendered]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsRendered(false);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 250);
  };

  if (!isRendered || !service) return null;

  return (
    <div
      className={`service-modal-backdrop ${isClosing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="service-modal-title"
    >
      <div
        className={`service-modal-card ${isClosing ? 'modal-card-exit' : 'modal-card-enter'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="service-modal-header">
          <h3 id="service-modal-title" className="service-modal-title">
            {service.title}
          </h3>

          <button
            id="btn-close-service-modal"
            className="service-modal-close-btn"
            onClick={handleClose}
            aria-label="Close service details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="service-modal-body">
          <ul className="service-modal-list">
            {service.items.map((item, idx) => (
              <li key={idx} className="service-modal-list-item">
                <span className="service-modal-bullet">◆</span>
                <span className="service-modal-item-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="service-modal-footer">
          <button
            className="service-modal-ok-btn"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
