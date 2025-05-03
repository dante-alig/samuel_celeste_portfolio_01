import React from 'react';
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useCalendly } from "../context/CalendlyContext";

Modal.setAppElement("#root");

const CalendlyModal = () => {
  const { isModalOpen, closeCalendlyModal } = useCalendly();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeCalendlyModal}
      className="calendly-modal"
      overlayClassName="calendly-modal-overlay"
    >
      <button className="modal-close-button" onClick={closeCalendlyModal}>
        <FaTimes />
      </button>
      <iframe
        src="https://calendly.com/samuelceleste/appel"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </Modal>
  );
};

export default CalendlyModal;
