import React, { useEffect } from "react";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    window.addEventListener("click", handleOverlayClick);

    return () => {
      window.removeEventListener("click", handleOverlayClick);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          className="absolute top-[200px] right-[457px] text-red-500 hover:text-red-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
